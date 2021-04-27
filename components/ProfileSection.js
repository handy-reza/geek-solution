import Title from "./SectionTitle";
export default function Profile() {
  return (
    <section id="profile">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center my-30">
          <div className=" w-full md:w-5/12">
            <img src="/Profile.png" className="w-full" />
          </div>
          <div className="w-full md:w-6/12 ml-[50px] ">
            <Title>Who we are ?</Title>
            <p className="text-[30px] leading-relaxed text-blue-800">
              Geek solution was established in 2021 with the vision of becoming
              a Information and Technology company competing with the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
