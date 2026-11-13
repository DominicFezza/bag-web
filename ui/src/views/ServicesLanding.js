import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import { PiBuildingOfficeBold, PiStudent } from "react-icons/pi";
import { formatMoney, formatMoneyShorten } from "../Helpers";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { getInlineLoader } from "../Helpers";

import Footer from "../ones/Footer";
import ServiceBanner1 from "../ones/ServicesBanner1";
import HomeBanner3 from "../ones/HomeBanner3";

export default function View(props) {

  const appContext = useContext(AppContext);

  /* Place states here */
  const [ ready, setReady ] = useState(false);

  async function init() {
    //run initializations here
    setReady(false);
    //..
    
    setReady(true);
  }

  useEffect(() => {
    init();
  }, [ ])

  if(ready) {
    return (
      <>
        <ServiceBanner1/>
        <HomeBanner3/>
        <Footer/>
      </>
    )
  } else {
    return ( 
      <div 
        className="container mSupportLoading"
      >
        {getInlineLoader()}
      </div>
    );
  }

  
}