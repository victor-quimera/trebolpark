import videoSV2 from './assets/videos/wor.mp4';
import videoSV1 from './assets/videos/slick.mp4';
import './App.css';
import { gsap } from 'gsap';
import { useIdleTimer } from 'react-idle-timer';
import React, { useState, useEffect, useRef} from 'react';
import SplitType from 'split-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {

  const container = useRef();
  let timeline = gsap.timeline();

  const onAction = (event, idleTimer) => {
    setShowScreenSaver(false);
  }
  
  const onActive = (event, idleTimer) => {
  }
  
  const onPrompt = () => {
    setShowScreenSaver(true);
  }
  
  const onIdle = () => {
    setShowScreenSaver(true);
  }

  const onClickHere = () => {
    let sPrincpial = container.current.querySelector(".seccion_principal");
    let sDirectorio = container.current.querySelector(".seccion_directorio");
    timeline.to(sPrincpial, {top: "-2500px", ease: "power2.in", duration: 1});
    timeline.to(sDirectorio, {left: "0%", ease: "expo.out", duration: 1});
    timeline.play();
  }

  const onRegresar = (quien) => {
    let sCorporativo = container.current.querySelector(".seccion_corporativo");
    let sDirectorio = container.current.querySelector(".seccion_directorio");
    let sComercial = container.current.querySelector(".seccion_comercial");
    let sHotel = container.current.querySelector(".seccion_hotel");
    let sPrincpial = container.current.querySelector(".seccion_principal");
    if (quien==='corporativo') {
      timeline.to(sCorporativo, {left: "2000px", ease: "power2.in", duration: 0.25});
      timeline.to(sDirectorio, {left: "0%", ease: "power2.out", duration: 1.25});
    }
    if (quien==='comercial') {
      timeline.to(sComercial, {top: "-2000px", ease: "Elastic.powerOut(1)", duration: 0.25});
      timeline.to(sDirectorio, {left: "0%", ease: "Elastic.powerOut(1)", duration: 1.25});
    }
    if (quien==='hotel') {
      timeline.to(sHotel, {left: "-2000px", ease: "Elastic.powerOut(1)", duration: 0.25});
      timeline.to(sDirectorio, {left: "0%", ease: "Elastic.powerOut(1)", duration: 1.25});
    }
    if (quien==='directorio') {
      timeline.to(sDirectorio, {left: "-100%", ease: "power2.in", duration: 0.25});
      timeline.to(sPrincpial, {top: "373.84px", ease: "bounce.out", duration: 1.25});
    }
    
    timeline.play();
  }

  const onShowCorporativo = () => {
    let sCorporativo = container.current.querySelector(".seccion_corporativo");
    let sDirectorio = container.current.querySelector(".seccion_directorio");
    timeline.to(sDirectorio, {left: "-100%", ease: "power2.out", duration: 0.5});
    timeline.to(sCorporativo, {left: "0%", ease: "circ.in", duration: 1});
    timeline.play();
  }
  
  const onShowComercial = () => {
    let sComercial = container.current.querySelector(".seccion_comercial");
    let sDirectorio = container.current.querySelector(".seccion_directorio");
    timeline.to(sDirectorio, {left: "-100%", ease: "power2.out", duration: 0.5});
    timeline.to(sComercial, {top: "283px", ease: "expo.out", duration: 1});
    timeline.play();
  }  

  const onShowHotel = () => {
    let sHotel = container.current.querySelector(".seccion_hotel");
    let sDirectorio = container.current.querySelector(".seccion_directorio");
    timeline.to(sDirectorio, {left: "-100%", ease: "power2.out", duration: 0.5});
    timeline.to(sHotel, {left: "0%", ease: "circ.in", duration: 1});
    timeline.play();
  }

  useIdleTimer({ 
    timeout: (1000 * 2),
    promptBeforeIdle: 0,
    onAction,
    onActive,
    onPrompt,
    onIdle 
  });

  const [showScreenSaver, setShowScreenSaver] = useState(false);
  const [vidIndex, setVidIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (showScreenSaver && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex, showScreenSaver]);

  useEffect(() => {
    const bienvenido = new SplitType('p.trebolpark', { types: 'chars' }).chars;
      gsap.fromTo(bienvenido,
      { 
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: 'power4.out',
      }
    );
    if (!showScreenSaver) {
      let link1 = container.current.querySelector(".link1");
      let bola1 = container.current.querySelector(".bola1");
      let link2 = container.current.querySelector(".link2");
      let bola2 = container.current.querySelector(".bola2");
      let link3 = container.current.querySelector(".link3");
      let bola3 = container.current.querySelector(".bola3");

      let timelineLink1 = gsap.timeline();
      let timelineLink2 = gsap.timeline();
      let timelineLink3 = gsap.timeline();
      timelineLink1.pause();
      timelineLink2.pause();
      timelineLink3.pause();
      timelineLink1.to(bola1, {width: "calc(100% + 1.2em)", ease: "Elastic.easeOut(0.5)", duration: 0.5});
      timelineLink1.to(bola1, {width: "1.2em", left: "calc(100% - 1.15em)", ease: "Elastic.easeOut(0.5)", duration: 0.5});
      timelineLink2.to(bola2, {width: "calc(100% + 1.2em)", ease: "Elastic.easeOut(0.5)", duration: 0.25});
      timelineLink2.to(bola2, {width: "1.2em", left: "calc(100% - 1.15em)", ease: "Elastic.easeOut(0.5)", duration: 0.5});
      timelineLink3.to(bola3, {width: "calc(100% + 1.2em)", ease: "Elastic.easeOut(0.5)", duration: 0.5});
      timelineLink3.to(bola3, {width: "1.2em", left: "calc(100% - 1.15em)", ease: "Elastic.easeOut(0.5)", duration: 0.5});
      link1.addEventListener("mouseenter", () => timelineLink1.play());
      link1.addEventListener("mouseleave", () => timelineLink1.reverse());    
      link2.addEventListener("mouseenter", () => timelineLink2.play());
      link2.addEventListener("mouseleave", () => timelineLink2.reverse());    
      link3.addEventListener("mouseenter", () => timelineLink3.play());
      link3.addEventListener("mouseleave", () => timelineLink3.reverse());    
    }
  });

  return (
    <>
    {
      showScreenSaver && (
        <div className="screensaver">
            <video id="video1"
              className="screensaver"
              style={{ display: vidIndex === 0 ? "block" : "none" }}
              src={videoSV1}
              autoPlay
              muted
              onEnded={() => {document.getElementById("video2").play();setVidIndex((idx) => idx + 1)}}
            />
            <video id="video2"
              className="screensaver"
              style={{ display: vidIndex === 1 ? "block" : "none" }}
              src={videoSV2}
              muted
              autoPlay
              onEnded={() => {document.getElementById("video1").play();setVidIndex(0)}}
            />
        </div>
      )
    }
    {
      !showScreenSaver && (
        <div className="App slick" ref={container}>
          <header className="App-header">
            <div className='logo'>
                a<span className='logo_text'>e</span>
            </div>
          </header>
          <section className="seccion_principal">
            <section>
              <p className="trebolpark">
                  Directorio
              </p>
              <p className="espaciador">&nbsp;</p>
              <div className="bg-blue panel">
                <p className="boton" onClick={onClickHere} ><div className='manita'>&nbsp;</div>Click here</p>
              </div>
            </section>
          </section>
          <section className="seccion_directorio">
            <div style={{textAlign: 'left', paddingTop: '30px', paddingLeft: '400px'}}>
              <div className='link1' onClick={onShowCorporativo}>
                <div className='bola1'></div>
                <span>Corporativo</span>
                <i>-&gt;</i>
              </div>
            </div>
            <div style={{textAlign: 'left', paddingTop: '50px', paddingLeft: '400px'}}>
              <div className='link2' onClick={onShowComercial}>
                <div className='bola2'></div>
                  <span>Comercial</span>
                  <i>-&gt;</i>
              </div>
            </div>
            <div style={{textAlign: 'left', paddingTop: '50px', paddingLeft: '400px'}}>
              <div className='link3' onClick={onShowHotel}>
              <div className='bola3'></div>
                <span>Hotel</span>
                <i>-&gt;</i>
              </div>
            </div>
            <div className="bottomright" onClick={() => onRegresar('directorio')}>
              Regresar
            </div>
          </section>
          <section className="seccion_corporativo">
              <p className="trebolpark_secciones">
                  Corporativo
              </p>
            <div className="listado-corporativo">
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Oficinas Canavati - N 3, 4</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://canavati.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Forza - N 5, 19</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>TEITER - N 6-03, 04</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://teiter.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>THG - N 6-01</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://thg.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Maria E Subierbe Cortina - N 6-02</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Ingeniería y Abastecimiento - N 7-03</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://ingyabas.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>ROVIDAMEX - N 7-02</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://rovidamex.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>FPZ Proyectos - Piso 7-01</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://fpz.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Wor - N 8-01</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://wor.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_slicksticky' />
                  <h3>SlickSticky - N 8</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://slicksticky.com.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Inversiones Jame - N 9-01</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Diseño e Innovación inmobiliaria del norte - N 9-02</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Servo consultores fiscales - N9-03</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>SAN-MEX de norte - N9-04</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://sanmex.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Servo consultores fiscales - N9-03</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>DIP9 - N10, 14</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>TERRANUMA SERVICIOS INMOBILIARIOS - N11-01</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>SOXTEC - N11-02</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Copperwolf - N11-03</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>INVERSIONES 2324 - N11-04</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>JACKTUR CONSORCIO EMPRESARIAL - N11-05</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>B-PRIME - N12</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Torres Lindsey - N15</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>NORTEC - N16</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>Harbor - N17-03</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>JAVIER GONZÁLEZ GALVÁN - N17-02</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>ARCELORMITTAL MEXICO - N18</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>SEPICLA - N20</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>TRX-TREBOL PH - N21, 22, 23</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item'>
                  <img className='logo_temp' />
                  <h3>ARCELORMITTAL MEXICO - N24-PH, N25 MZPH</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://forza.mx</a>
                </p>
              </div>
            </div>
            <div className="bottomright" onClick={() => onRegresar('corporativo')}>
              Regresar
            </div>
          </section>
          <section className="seccion_comercial">
            <p className="trebolpark_secciones">
                Comercial
            </p>
            <div className="listado-comercial">
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>LOS FRESNOS - L 1, 2</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://losfresnos.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>DON CARBON- L 3</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>PANGO - L 4, 5, 6</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>FUSIBLES DEL NORTE - L 8</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>TANKROOM - L 9</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>YAKITORI UME - L 10</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>GOMIPEPE - ACS1</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>CNSF - L 11</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>GRUPO EQUINOCCIAL - L 12,13</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>SALON EVENTOS HOTEL - L14, 15, 16</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>TULU-MN - L 17, 18</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>9 FUEGOS - L 19 T12</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>MARISCOS EL GORDO - L 20, 21, 22, 23</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>JC MOTORS - L 24</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>GRUPO EQUINOCCIAL - L 12,13</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>QUIROPRACTICO LR - L 25</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>AR GRUPO INMOBILIARIO - L 27</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>CLÍNICA DE MAXILOFACIAL, MEDICINA ESTÉTICA Y TRASPLANTE CAPILAR - L 28, 29</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>SUSY SALÓN - L 31, 32</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>DERMA MF - L 33</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>PODCAST HOUSE & STUDIO - L 34</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>GRUPO POSADAS - L 35, 36</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>CYELZA MEXICO - L 38</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>SALUD Y MEDICINA - L 39</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>SANTÉ - L 40, 41</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>CHEZ - L 42, 43</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>DIINSA  - L 48, Terraza 48</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>TORRE VO  - L 49A</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
              <hr className='divisor'/>                                                                                                  
              <div className='listado_item_comercial'>
                <img className='logo_temp' />
                <h3>BPLR MEXICO - L 49B</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="#">https://susy.mx</a>
                </p>
              </div>
            </div>
            <div className="bottomright" onClick={() => onRegresar('comercial')}>
              Regresar
            </div>
          </section>
          <section className="seccion_hotel">
              <p className="trebolpark_secciones">
                  Hotel
              </p>
              <div className='listado_item'>
                <img className='logo_temp' />
                <h3>Grand Fiesta Americana</h3>
                <p>
                  <FontAwesomeIcon className="icon" icon={faPhone} /> (81) 8888.8888
                </p>
                <p>
                  <FontAwesomeIcon className="icon" icon={faGlobe} /> <a href="https://www.fiestamericanatravelty.com/grand-fiesta-americana/hoteles/grand-fiesta-americana-monterrey-valle">fiesta americana</a>
                </p>
              </div>
            <div className="bottomright" onClick={() => onRegresar('hotel')}>
              Regresar
            </div>
          </section>
        </div>
      )
    }
    </>
  );
}

export default App;

