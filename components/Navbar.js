import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
export default function Navbar() {
  return (
    <header className="flex items-center py-10">
      <Logo>Geek</Logo>
      <div className="w-6/12 ">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button pill variant="outline-blue">
          Contact
        </Button>
      </div>
    </header>
  );
}
