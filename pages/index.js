import Hero from "../components/Hero"
import Profile from "../components/ProfileSection"
import Competencies from "../components/SectionCompetencies"
import Services from "../components/SectionServices"
import Contact from "../components/ContactSection";
import Footer from "../components/Footer"
export default function Home() {
  return (
    <>
      <Hero/>
      <Profile/>
      <Competencies/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
