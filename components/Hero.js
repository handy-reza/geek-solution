import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header className="bg-hero h-[900px]">
      <div className="container mx-auto ">
        <Navbar />
        <div>
          <div className="text-center mt-[150px]">
            <h1 className="mx-auto font-semibold font-mono w-8/12 text-white text-4xl leading-relaxed">
              We provide one stop IT Solution services from concepting until
              production for Website, Software, & Mobile Development.
            </h1>
            <Button href="#profile" pill variant="blue" className="mt-14">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
