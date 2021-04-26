import Title from "./SectionTitle";
export default function Services() {
  return (
    <div className="bg-redpatrick">
    <div className="container mx-auto text-center pt-10 ">
      <Title>Our Services</Title>
      <div className="flex">
        <div className="w-6/12 px-4 text-center">
          <article className="w-full rounded-lg shadow bg-gray-100">
            <img src="/Web2x.png" />
            <h3 className="text-4xl text-blue-800 font-semibold mb-1 mt-4">
              Web-Based Application Solutions.
            </h3>
            <p className="text-lg text-gray-400 mb-20 inline-block">
              Our company building web application for public and private
              organization. We used the latest technology to give the best
              solution for your web application. We have great and experienced
              team in the development of web application.
            </p>
          </article>
        </div>
      </div>
    </div>
    </div>
  );
}
