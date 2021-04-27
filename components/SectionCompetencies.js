import CompetenciesCard from "./CompetenciesCard";

import Title from "./SectionTitle";
export default function Competencies() {
  return (
    <section className="bg-gray-100 h-auto pt-10 mt-20 pb-32" id="competencies">
      <div className="container text-center mx-auto">
        <Title>Our Competencies.</Title>
        <div className="container mx-auto text-center pt-10 h-auto pb-20 ">
          <div className="md:flex md:flex-wrap">
          <CompetenciesCard
            name="IT Solution."
            desc=" Software development, Mobile application, Web application."
            descClassName="mt-9"
            nameClassName="mt-16"
            image="/1.png"
          />

          <CompetenciesCard
            name="System Integration. "
            desc="System Integration, IT Infrastructure, IT Pocurement & ERP "
            descClassName="mt-5"
            image="/2.png"
          />
          <CompetenciesCard
            name="Experience Design."
            desc="Integrated Advertising, Integrated Branding, Digital Marketing."
            descClassName="mt-5"
            image="/3.png"
          />
          </div>

        </div>
      </div>
    </section>
  );
}
