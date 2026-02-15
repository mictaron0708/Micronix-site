export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* gradient blobs */}
      <div
        className="absolute -top-24 -left-24 h-[340px] w-[340px] rounded-full blur-3xl opacity-40"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute top-44 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
        style={{ background: "var(--accent)" }}
      />
      <div className="absolute inset-0 bg-black/10 dark:bg-black/10" />

      {/* grain (subtil, elegant) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"260\" height=\"260\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"260\" height=\"260\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>')",
        }}
      />
    </div>
  );
}