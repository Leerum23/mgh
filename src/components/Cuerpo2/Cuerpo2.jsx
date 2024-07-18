import "./Cuerpo2.css"

import foto1 from "../../assets/foto1.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import foto5 from "../../assets/foto5.png";
import foto6 from "../../assets/foto6.png";
import foto7 from "../../assets/foto7.png";
import { Fade, Zoom } from "react-awesome-reveal"
import { useTranslation } from "react-i18next";
import image from "../../assets/libro3.png";
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';


const URL1="https://img.freepik.com/foto-gratis/especialista-contenido-que-trabaja-compania-medios-diseno-grafico-que-selecciona-mejores-imagenes-editoriales-publicaciones-redes-sociales-experto-edicion-fotos-oficina-agencia-publicidad_482257-73457.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"
const URL2="https://img.freepik.com/fotos-premium/pantalla-computadora-pantalla-que-dice_1236212-10436.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user";
const URL3="https://img.freepik.com/foto-gratis/hombre-editando-fotos-computadora_53876-46864.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"
const URL4="https://img.freepik.com/foto-gratis/fotografo-que-utiliza-herramientas-profesionales-edicion-fotos-primer-plano-pantalla-pc_482257-82193.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"
const URL5="https://img.freepik.com/foto-gratis/experto-que-utiliza-tecnicas-postproduccion-editar-imagenes-clips-bruto-monitor-pantalla-aislado_482257-82230.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"
const URL6="https://img.freepik.com/foto-gratis/persona-trabajando-proyecto-animacion_23-2149269941.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"
const URL7="https://img.freepik.com/foto-gratis/retrato-mujer-adulta-estilo-arte-digital_23-2151122849.jpg?ga=GA1.1.1698604554.1709570910&semt=ais_user"

function Cuerpo2() {
    const { t } = useTranslation();
  return (
    <>
         
    <div className="program">

    <div className="program_background-image"></div>

    <div className="program_content">
        
        <h2 className="card_main_title">{t("prog.title")}</h2>
        <p className="card_main_subtitle">{t("prog.subtitle")}</p>
        
        <div className="card_container">
            <Fade  damping={0.1}>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto1} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module1")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title1")}</h4>
                <p className="card_p">
                {t("prog.card_text1")}
                </p>
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto2} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module2")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title2")}</h4>
                <p className="card_p">
                {t("prog.card_text2")}
                </p>
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto3} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module3")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title3")}</h4>
                <p className="card_p">
                {t("prog.card_text3")}
                </p>
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto4} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module4")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title4")}</h4>
                <p className="card_p">
                {t("prog.card_text4")}
                </p>
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto5} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module5")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title5")}</h4>
                <p className="card_p">
                {t("prog.card_text5")}
                </p>
                </div>

                <div className="card" >
                <div className="program_image_container">
                    <img src={foto6} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module6")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title6")}</h4>
                <p className="card_p">
                {t("prog.card_text6")}
                </p>
                </div>

                
                <div className="card_gris" >
                <div className="program_image_container">
                    <img src={foto7} alt="image" className="program_image"/>
                </div>
                <h3 className="card_title">{t("prog.card_module7")}</h3>
                <h4 className="card_subtitle">{t("prog.card_title7")}</h4>
                <p className="card_p">
                {t("prog.card_text7")}
                </p>
                </div>
            </Fade>

        </div>
        </div>
    </div>
       
    </>
  )
}

export default Cuerpo2