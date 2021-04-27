import Title from "./SectionTitle";
import ServiceItems from "./ServiceItems";
export default function Services() {
  return (
    <section className="bg-redpatrick">
      <div className="container mx-auto text-center pt-10 h-auto pb-20 " id="services">
        <Title>Our Services</Title>
        <div className="flex flex-wrap">
          <ServiceItems
            name="Web-Based Application Solutions."
            description="Our company building web application for public and private organization. We used the latest technology to give the best solution for your web application. We have great and experienced team in the development of web application."
            image="/Web2x.png"
          />

          <ServiceItems
            name="System Integration."
            description="One stop IT Procurement services for your whole IT infrastructure such as network solution, data center, security system, system integration with high quality performance."
            image="/System2x.png"
          />

          <ServiceItems
            name="Mobile-Based Application Solutions."
            description="Nowadays mobile application becomes the fastest place for marketing strategy in Indonesia. Our company able to create user experience through mobile application system that was oriented by iOS and android system."
            image="/mobile2x.png"
          />

          <ServiceItems
            name="Experience Design."
            description="We can design and build all your creative needs. We always ensure our clients satifisfied with our creative and strategic approach with passion for excellent customer experience."
            image="/Design2x.png"
          />
        </div>
      </div>
    </section>
  );
}
