const Header = ({ url }) => {
  return (
    <>
      <span className="bg vh-80"></span>
      <header className="vh-80 bg-dark text-light p-5 d-flex flex-column justify-content-center">
        <div className="d">
          <h1 className="display-5 font-header-p">Economía Colaborativa</h1>
          <section className="">
            <h2 className="mt-4 text-green font-header">GIFT OF LEGACY</h2>
            <h2 className="mb-4 font-header">Regala y haz Feliz!</h2>
            <p className="font-header-p fs-5 w">
              Cumple tus SUEÑOS y ayuda a los demás a cumplir los suyos,
              Construye tu LEGADO, apóyate en la COMUNIDAD.
            </p>
            <a
              href={`https://wa.me/${url}`}
              rel="noreferrer"
              target="blank"
              className="btn-header fs-5 mt-4 "
            >
              Comienza Hoy!
            </a>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
