export default function Background() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "3rem 3rem",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)",
        }}
      />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-linear-to-tr from-blue-600/10 to-cyan-400/10 blur-[120px] pointer-events-none z-0" />
    </>
  );
}
