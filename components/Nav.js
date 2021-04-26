import NavItem from "./NavItems";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10">
      <NavItem>Profile</NavItem>
      <NavItem>Competencies</NavItem>
      <NavItem>Services</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
