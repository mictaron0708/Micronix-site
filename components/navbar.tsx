"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  label: string;
  icon: string;
  href?: string;     // pentru pagini
  targetId?: string; // pentru scroll la secțiuni
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "LOGIN", icon: "🔒", href: "/login" },
      { label: "ACASĂ", icon: "🏠", targetId: "home" },
      { label: "PLAY&WIN", icon: "🏆", href: "/playwin" },
      { label: "PROMO", icon: "%", targetId: "promo" }, // secțiune promo (o vom face)
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (item: NavItem) => {
    if (item.targetId) {
      setOpen(false);
      // mic delay ca să se închidă meniul fluid
      setTimeout(() => scrollToId(item.targetId!), 80);
    }
  };

  return (
    <>
      {/* TOP BAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "backdrop-blur-md",
          "border-b",
          scrolled ? "border-white/10" : "border-white/5",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <div
            className={[
              "flex items-center justify-between",
              "h-16",
              "rounded-b-2xl",
              "transition-all duration-300",
              scrolled ? "bg-black/35" : "bg-black/20",
            ].join(" ")}
          >
            {/* BRAND */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="select-none"
              >
                <span className="font-extrabold tracking-wide text-lg sm:text-xl">
                  Micronix Studio
                </span>
              </motion.div>

              <span className="hidden sm:inline text-xs opacity-70">
                Writing • Web • Social • Design
              </span>
            </div>

            {/* CENTER ICON NAV (desktop) */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavPill
                  key={item.label}
                  item={item}
                  onSectionClick={() => handleNavClick(item)}
                />
              ))}
            </nav>

            {/* MENU BUTTON */}
            <motion.button
              aria-label="Open menu"
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen(true)}
              className={[
                "md:hidden",
                "w-12 h-10",
                "rounded-xl",
                "border border-white/10",
                "bg-white/5",
                "flex items-center justify-center",
                "active:opacity-80",
              ].join(" ")}
            >
              <span className="text-xl leading-none">☰</span>
            </motion.button>

            {/* RIGHT MENU BUTTON (desktop) */}
            <motion.button
              aria-label="Open menu (desktop)"
              whileTap={{ scale: 0.96 }}
              onClick={() => setOpen(true)}
              className={[
                "hidden md:flex",
                "w-12 h-10",
                "rounded-xl",
                "border border-white/10",
                "bg-white/5",
                "items-center justify-center",
                "active:opacity-80",
              ].join(" ")}
            >
              <span className="text-xl leading-none">☰</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* DRAWER MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60"
            />

            {/* PANEL */}
            <motion.aside
              initial={{ x: 360, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 360, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={[
                "fixed right-0 top-0 z-50 h-full w-[86%] sm:w-[360px]",
                "border-l border-white/10",
                "bg-black/70 backdrop-blur-xl",
                "p-4",
                "flex flex-col",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-extrabold text-lg">Meniu</div>
                  <div className="text-xs opacity-70">Micronix Studio</div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setOpen(false)}
                  className={[
                    "w-11 h-10 rounded-xl",
                    "border border-white/10 bg-white/5",
                    "flex items-center justify-center",
                  ].join(" ")}
                >
                  ✕
                </motion.button>
              </div>

              <div className="mt-5 space-y-2">
                <DrawerSection title="Navigare rapidă">
                  {navItems.map((item) => (
                    <DrawerItem
                      key={item.label}
                      item={item}
                      onSectionClick={() => handleNavClick(item)}
                      onClose={() => setOpen(false)}
                    />
                  ))}

                  {/* BUTOANE către secțiunile de pe pagina principală */}
                  <Divider />

                  <DrawerButton
                    icon="ℹ️"
                    label="Despre noi"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("about"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="🧩"
                    label="Ce oferim?"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("services"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="📦"
                    label="Pachete"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("packages"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="🛒"
                    label="Trimite comanda"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("order"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="⭐"
                    label="Recenzii"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("reviews"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="☎️"
                    label="Contact"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("contact"), 80);
                    }}
                  />
                </DrawerSection>

                <Divider />

                <DrawerSection title="Extra">
                  <DrawerButton
                    icon="🎁"
                    label="Promoții"
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => scrollToId("promo"), 80);
                    }}
                  />
                  <DrawerButton
                    icon="⚙️"
                    label="Setări (viitor)"
                    onClick={() => setOpen(false)}
                  />
                </DrawerSection>
              </div>

              <div className="mt-auto pt-4">
                <div className="text-xs opacity-70">
                  Apasă <span className="font-semibold">ESC</span> ca să închizi.
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer pentru header fixed */}
      <div id="home" className="h-16" />
    </>
  );
}

/* ----------------------- SUBCOMPONENTE ----------------------- */

function NavPill({
  item,
  onSectionClick,
}: {
  item: NavItem;
  onSectionClick: () => void;
}) {
  const content = (
    <motion.div
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "flex items-center gap-2",
        "px-3 py-2",
        "rounded-xl",
        "border border-white/10",
        "bg-white/5",
        "text-sm",
        "select-none",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
      ].join(" ")}
    >
      <span className="text-base leading-none">{item.icon}</span>
      <span className="font-semibold tracking-wide">{item.label}</span>
    </motion.div>
  );

  // Pagini
  if (item.href) {
    return (
      <Link href={item.href} className="outline-none">
        {content}
      </Link>
    );
  }

  // Secțiuni
  return (
    <button onClick={onSectionClick} className="outline-none">
      {content}
    </button>
  );
}

function DrawerSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-xs uppercase tracking-wider opacity-70 mb-2">
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function DrawerItem({
  item,
  onSectionClick,
  onClose,
}: {
  item: NavItem;
  onSectionClick: () => void;
  onClose: () => void;
}) {
  // Pagini
  if (item.href) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={[
          "flex items-center justify-between",
          "w-full",
          "px-3 py-3",
          "rounded-xl",
          "border border-white/10",
          "bg-black/20",
          "active:opacity-80",
        ].join(" ")}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{item.icon}</span>
          <span className="font-semibold">{item.label}</span>
        </div>
        <span className="opacity-70">›</span>
      </Link>
    );
  }

  // Secțiuni
  return (
    <button
      onClick={onSectionClick}
      className={[
        "flex items-center justify-between",
        "w-full",
        "px-3 py-3",
        "rounded-xl",
        "border border-white/10",
        "bg-black/20",
        "active:opacity-80",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{item.icon}</span>
        <span className="font-semibold">{item.label}</span>
      </div>
      <span className="opacity-70">›</span>
    </button>
  );
}

function DrawerButton({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={[
        "flex items-center justify-between",
        "w-full",
        "px-3 py-3",
        "rounded-xl",
        "border border-white/10",
        "bg-black/20",
        "active:opacity-80",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="font-semibold">{label}</span>
      </div>
      <span className="opacity-70">›</span>
    </motion.button>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10 my-2" />;
}