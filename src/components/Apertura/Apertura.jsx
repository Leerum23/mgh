import { useEffect, useState } from 'react'
import "./Apertura.css"
import { Fade, Zoom } from "react-awesome-reveal";

// import video from "../../assets/video2.mp4";
import { useTranslation } from 'react-i18next'
import Navbar from "../Navbar/Navbar";
import Cuerpo1 from '../Cuerpo1/Cuerpo1';


   const URL1="https://www.youtube.com/embed/aOyNoGprZTg?si=cTebLCeX9CodY383"

   

function Apertura() {
   
    const { t } = useTranslation();
    return (
        <div  className='aper_container'>
            
            {/* <video src={videoBg} autoPlay loop muted playsInline className='background'/> */}
            <div className="content">
                <Navbar />
                <div className='aper_container-two'>
                    <p className='bajada'> {t("Apertura.top")}</p>
                    <div className='title_container'>
                        <Fade>
                            <h1 className='title_desc'>
                                {t("Apertura.title")}
                            </h1>
                            <h1 className='title_desc2'>
                                {t("Apertura.title2")}
                            </h1>
                        </Fade>
                        <Fade>
                            <p className='desc_t'>{t("Apertura.intro")}</p>
                        </Fade>
                    </div>

                    <div className="vid_container">
                       
                            <iframe 
                            width="860" 
                            height="452" 
                            src={URL1} 
                            autoPlay 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"></iframe>
                       
                    </div>
                </div>
                <button className='aper_btn'>
                    
                        <a target='_blank' rel='noreferrer' href="https://wa.me/message/QNF2FJ34NE5DG1">{t("Apertura.button")}</a>
                    
                </button>
            </div>
            
    

        </div>
    )
}

export default Apertura