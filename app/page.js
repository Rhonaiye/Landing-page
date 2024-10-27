import Image from "next/image";
import Navbar from "./components/Navbar";
import Dashboards from "./components/Dashboard";
import Payplan from "./components/Payplan";


export default function Home() {
  return (
   <>
   
   <Navbar/>
   <Dashboards/>
   
   <Payplan/>
   
   </>
  );
}
