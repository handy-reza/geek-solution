import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Button from "../components/Button";
export default function Navbar(){
    return(
        <div className="flex items-center py-10">
        <Logo>Geek</Logo>
        <div className="w-6/12 ">
          <Nav />
        </div>
        <div className="w-3/12 text-right">
          <Button pill variant="outline-blue">Contact</Button>
        </div>
      </div>
    )
}