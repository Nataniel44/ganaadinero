import About from "./About";
import Iframe from "./Iframe";

const Footer = ({ email, number, ubi }) => {
  return (
    <>
      <section className="sni-section text-center p-5 font-header text-light d-flex align-items-center justify-content-center flex-column">
        <p className="fs-3 font-header-p">
          Avanzamos de la mentalidad del CONSUMO a la CONTRIBUCIÓN
        </p>
        <h4 className="display-3 font-header text-green m-3">
          ¿Te identificas con esta actividad?
        </h4>
        <h3 className="font-header-p">Solicita tu ENLACE de INVITACIÓN</h3>
        <button className="btn-header fs-5 mt-4">
          Participa con Nuestro Equipo
        </button>
      </section>
      <section className="bg-black text-center">
        <h3 className="text-center font-header-p fs-1 text-light pt-5">
          <span className="text-green">Ayuda</span>
          <br />
          Vídeos de SOPORTE
        </h3>
        <div className="d-flex align-items-center flex-column">
          <div className="w-info-section justify-content-center align-items-center gap-4 container-fluid">
            <div
              id="video-container"
              className="row gap-3 justify-content-center p-2"
            >
              <Iframe url={"D5B4DiAdwHY"} />
              <Iframe url={"g7s9vFQM51U"} />
              <Iframe url={"e_9FRJa8SwE"} />
              <Iframe url={"RCBHwx1UyVQ"} />
              <Iframe url={"-C2YGz3ZUjA"} />
              <Iframe url={"yYkTv0Gaobg"} />
              <Iframe url={"nT2VtAz6fWM"} />
              <Iframe url={"50U_1bqmRjA"} />
              <Iframe url={"s7EfMPQ23OM"} />
            </div>
          </div>
        </div>
      </section>
      <section className="text-light bg-black container-fluid">
        <article className="p-4 info-section w-info-section m-auto">
          <h3 className="fs-1 text-green text-center font-header pt-4">
            Orientación
          </h3>
          <p className="m-0 font-header display-5 pb-3 text-center">
            Preguntas Frecuentes
          </p>
          <p className="fs-4 pt-3 font-header text-start">
            ¿Cómo hago para contactar con la Leyenda de mi Tablero?
          </p>
          <li className="fs-5 font-header-p">
            💬 Una vez te encuentres dentro del tablero, pulsas encima del
            círculo central que dice Leyenda y te aparecerá toda su información:
            nombre, nombre de usuario, numero de contacto y correo electrónico.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Qué pasarelas de pago se utilizan para realizar y recibir los
            regalos?
          </p>
          <li className="fs-5 font-header-p">
            💬 El método para enviar y recibir las donaciones, se establece con
            la persona en el momento de contactarla. Puedes usar Wester Union,
            PayPal, Trasferencia bancaria, Crypto, Revolut, entre otras.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Qué es Gift of Legacy?
          </p>
          <li className="fs-5 font-header-p">
            💬 Es un sistema económico basado en los regalos incondicionales, de
            persona a persona, en el que comienzas con $100 (único apote que
            saldrá de tu bolsillo) para luego recibir $800 en el primer tablero,
            $3200 en el segundo tablero, $12800 en el tercer tablero y $40.000
            en el ultimo tablero.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Cómo se ingresa a Gift of Legacy?
          </p>
          <li className="fs-5 font-header-p">
            💬 Se hace mediante una invitación de alguien que pertenezca a
            cualquier tableros, en esta página encontrarás el enlace, pero
            recuerda que solo es válido por 48 horas.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Recibiré apoyo al unirme a Gift of Legacy?
          </p>
          <li className="fs-5 font-header-p">
            💬 Sí, detrás de esta actividad hay personas que están igual que tu,
            tuvieron dudas y muchas preguntas sobre la plataforma. Encontrarás
            vídeos en nuestro Canal de YouTube @ganandoando3000, también
            realizamos video conferencias en Zoom y los Grupos de Telegram.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Cuál es el origen de Gift of Legacy?
          </p>
          <li className="fs-5 font-header-p">
            💬 Los creadores de la plataforma fueron un grupo de persona
            conocidas como el “Core 5” los cuales decidieron realizarla para
            fomentar una economía de regalos, descentralizada, sin
            intermediarios, solo de persona a persona.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Gift of Legay es totalmente legal?
          </p>
          <li className="fs-5 font-header-p">
            💬 Sí, es totalmente legal en todos los países, de igual forma debes
            ser responsable y revisar las leyes tributarias del país donde te
            encuentres.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿En qué países existe Gift of Legacy?
          </p>
          <li className="fs-5 font-header-p">
            💬 La plataforma de Gift of Legacy existe en todo el mundo,
            recordemos que es un movimiento global que esta en expansión, por
            ahora en más de 100 países.
          </li>
          <p className="fs-4 pt-5 font-header text-start">
            ¿Puedo recibir donaciones de miembros que se encuentren en otros
            países?
          </p>
          <li className="fs-5 font-header-p">
            💬 Por supuesto, la manera de hacer y recibir las donaciones depende
            de usted y los demás usuarios, puede hacerlas por Revolut,
            Trasnsferencia bancaria, Wise, PayPal, Wetern Union, etc.
          </li>
        </article>
        <About number={number} ubi={ubi} email={email}></About>
      </section>
    </>
  );
};

export default Footer;
