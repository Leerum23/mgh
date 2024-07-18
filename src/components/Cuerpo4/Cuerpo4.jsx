import "./Cuerpo4.css"

import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpeg";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpeg";
import image10 from "../../assets/image10.jpeg";
import image11 from "../../assets/image11.jpeg";
import image12 from "../../assets/image12.jpeg";
import image13 from "../../assets/image13.jpeg";
import image14 from "../../assets/image14.jpeg";
import image15 from "../../assets/image15.jpeg";
import image16 from "../../assets/image16.jpeg";

import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';


const URL1="https://img.freepik.com/foto-gratis/especialista-contenido-que-trabaja-compania-medios-diseno-grafico-que-selecciona-mejores-imagenes-editoriales-publicaciones-redes-sociales-experto-edicion-fotos-oficina-agencia-publicidad_482257-73457.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"


function Cuerpo4() {
    const { t } = useTranslation();
  return (
    <>
         
    <div className="about">

        <div className="about_background-image"></div>

        <div className="about_content">
                          
                      <h2 className="about_title">{t("about.title")}</h2>
                      <p className="about_subtitle">{t("about.subtitle")}</p>
                      <div className="about_p">
                      <p className="about_p1">{t("about.text1")}</p><p className="about_p2">{t("about.text2")}</p><p className="about_p3">{t("about.text3")}</p>
                      </div>
          
          
        <div className="image_container">

         
                    
                      <img src={image1} alt="image" className="image"/>
                      <img src={image2} alt="image" className="image"/>
                      <img src={image11} alt="image" className="image"/>
                      <img src={image3} alt="image" className="image"/>
                      <img src={image16} alt="image" className="image no-mobile"/>
                      <img src={image15} alt="image" className="image no-mobile"/>
                      <img src={image12} alt="image" className="image"/>
                      <img src={image8} alt="image" className="image "/>
                      <img src={image13} alt="image" className="image no-mobile"/>
                      <img src={image14} alt="image" className="image no-mobile"/>
                      <img src={image9} alt="image" className="image no-mobile"/>
                      <img src={image10} alt="image" className="image no-mobile"/>
                      <img src={image6} alt="image" className="image"/>
                      <img src={image5} alt="image" className="image"/>
                      <img src={image7} alt="image" className="image"/>
                      <img src={image4} alt="image" className="image"/>
              
             
          
          
          </div>
                              
                                   
              
                </div>
    </div>
       
    </>
  )
}

export default Cuerpo4