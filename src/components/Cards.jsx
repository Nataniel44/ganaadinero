import Card from "./Card";

const Cards = () => {
  return (
    <section className="text-center">
      <h3 className="text-green font-header-p fs-1">
        ¿Qué nos hace diferentes?
        <br />
        <span className="text-light">¿Por qué deberías iniciar?</span>
      </h3>
      <article>
        <div className="row text-light gap-3 justify-content-center p-5 ">
          <Card img={"./img/legal.png"} p={"Es Legal"} />
          <Card img={"./img/p2pmm.png"} p={"P2P"} />
          <Card img={"./img/minimo.png"} p={"Riesgo Mínimo"} />
          <Card img={"./img/invit.png"} p={"Por Invitación"} />
          <Card img={"./img/global.png"} p={"Globalizado"} />
        </div>
      </article>
    </section>
  );
};

export default Cards;
