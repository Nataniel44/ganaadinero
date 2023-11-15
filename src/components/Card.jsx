const Card = ({ img, p }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 card-main">
        <img loading="lazy" src={img} className="width-card" alt="Imagen 1" />
        <div className="card-body">
          <p className="font-header-p m-0 fs-4">{p}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
