import React from 'react'


const About = (props) => {
  return (
    <div className="aboutMain">
      <div className="foto">
        <div className="row">
          <div className="col">
            <section className="parallax">
              <div className="parallax-inner">
                <h1 className="aboutText">RecruIt</h1>
                <h3 className="aboutText">Conectando personas con oportunidades</h3>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="about">
        <div class="row">
          <div class="col aboutus">
            <h1>Acerca de RecruIt</h1>
          </div>
        </div>
        <div className="row who">
          <div className="col">
            <h3>QUIENES SOMOS ?</h3>
            <hr />

              Recruit es un sitio de empleos Online para personas que buscan su primer trabajo y empresas que que necesitan personal capacitado. Somos una startup que busca innovar en lo que respecta a búsqueda de empleos, buscando cambiar la forma en la que las personas piensan en relación al trabajo, tratando de ayudarlos activamente a mejorar sus vidas incorporando nuevas tecnologías y herramientas.

          </div>
          <div className="col">

            <h3>POR QUE RECRUIT ?</h3>
            <hr />
Somos el primer y único sitio de empleos que focaliza sus búsquedas en empleos sin experiencia o con minima experiencia. De esta manera buscamos incorporar personal capacitado al mercado laboral. Vemos que independientemente de las capacidades de las personas que buscan empleo, prima en el mercado laboral la experiencia por sobre el conocimiento de los recursos.          </div>
        </div>
      </div>
    </div>

  )
}

export default About
