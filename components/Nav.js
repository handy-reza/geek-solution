import NavItem from "./NavItems";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10">
      <NavItem href="#profile">Profile</NavItem>
      <NavItem href="#competencies">Competencies</NavItem>
      <NavItem href="#services">Services</NavItem>
      <NavItem href="#contact">Login</NavItem>
    </ul>
  );
}
