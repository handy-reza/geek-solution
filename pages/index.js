import Hero from "../components/Hero"
import Profile from "../components/ProfileSection"
import Competencies from "../components/SectionCompetencies"
import Services from "../components/SectionServices"
import Button from "../components/Button";
export default function Home() {
  return (
    <>
      <Hero/>
      <Profile/>
      <Competencies/>
      <Services/>
    </>
  );
}
