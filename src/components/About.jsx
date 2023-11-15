const About = ({ number, email, ubi }) => {
  return (
    <>
      <article className="row info-section  justify-content-center text-light">
        <div className="col-md-6">
          <h2 className="font-header fs-1 p-3 pb-3">Sobre Nosotros</h2>
          <p className="font-header-p fs-5">
            Gift of Legacy es un esfuerzo filantrópico que facilita el
            intercambio mundial de regalos entre individuos.
            <br />
            No hay límites geográficos, ya que nuestros miembros se extienden
            por más de 100 países, con más de un millón de participantes.
            <br />
            Actualmente, nuestra comunidad ha compartido colectivamente más de
            $45 millones de dólares!
          </p>
        </div>
        <div className="col-md-6 fs-8">
          <h5 className="font-header fs-1 p-3 pb-3">Contáctanos</h5>
          <p className="font-header-p">
            <img src="img/phone.png" className="p-2" alt="" />
            {number}
          </p>
          <p className="font-header-p link">
            <img src="img/icon-mail.png" className="p-2" alt="" />
            {email}
          </p>
          <p className="font-header-p">
            <img src="img/icon-location.png" className="p-2" alt="" />
            {ubi}
          </p>
          <p className="font-header-p">
            <img src="img/icon-time.png" className="p-2" alt="" />
            24 horas 7 días a la semana
          </p>
        </div>
      </article>
    </>
  );
};

export default About;
