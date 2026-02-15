import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="Despre noi"
      subtitle="Micronix Studio — scriem, construim și administrăm prezența ta online."
      from="left"
    >
      <div className="opacity-85 leading-relaxed">
        <p>
          Aici vom pune informațiile detaliate (cine suntem, misiune, ce ne diferențiază).
        </p>
        <p className="mt-3">
          Momentan e un placeholder elegant, dar cu structură finală.
        </p>
      </div>
    </SectionWrapper>
  );
}