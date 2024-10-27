import { useState } from "react";
import Link from "../Link/link";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const NAvbar = () => {
const [open,setOpen]=useState(false)
        const routes = [
            { id: 1, name: "Home", path: "/" },
            { id: 2, name: "About", path: "/about" },
            { id: 3, name: "Services", path: "/services" },
            { id: 4, name: "Contact", path: "/contact" },
            { id: 5, name: "FAQ", path: "/faq" }
          ];
          
  
          
   
    return (
        <nav className="p-2 m-2">
     
          
                <div className="text-2xl  md:hidden" onClick={()=>setOpen(!open)}>
                {!open?  <FaBars  />:<IoClose />}
                </div>
   <ul className={`bg-yellow-50 bg-yellow-200 p-4 m-4  rounded-xl absolute md:static duration-1000  md:flex justify-between ${open?'top-10':'-top-96'}`}>
   {
        routes.map(route=><Link route={route} key={route.id}> </Link>)
       }
   </ul>
         
        </nav>
    );
};

export default NAvbar;