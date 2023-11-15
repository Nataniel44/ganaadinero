const Iframe = ({ url }) => {
  return (
    <div className="col-12 col-md-5">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${url}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
