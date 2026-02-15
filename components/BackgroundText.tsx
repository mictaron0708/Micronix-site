export default function BackgroundText() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.06]">
      <div className="absolute inset-0 flex flex-wrap text-5xl sm:text-6xl font-extrabold tracking-tight">
        {Array(60)
          .fill("Micronix Studio")
          .map((text, i) => (
            <span key={i} className="mr-10 mb-6 select-none">
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}