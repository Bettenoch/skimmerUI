import { Link } from "react-router-dom";
import { mainLinks } from "@/constants"; 
import Cliptext from "./Cliptext";

const DesktopNav = () => {
  return (
    <header className="flex  w-full fixed z-50">
      <nav className="flex gap-6 justify-between w-full mx-10 py-6 mt-2 bg-light1 rounded-full">
        <Link to="/" className="flex cursor-pointer items-center gap-1 pl-4">
          <Cliptext text="DocuChat" img="/background/goldbg2.png" />
        </Link>
        <ul className="flex items-center gap-4 pr-8">
          {mainLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.route} className=" flex text-lg font-bold text-stone-950">
                {link.label}        
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNav;
