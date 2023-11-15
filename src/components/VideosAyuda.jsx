const VideosAyuda = () => {
  return (
    <section className="container-fluid">
      <h3 className="text-center font-header-p fs-1 text-light">
        <span className="text-green">Comprensión</span>
        <br />
        Vídeos IMPORTANTES!
      </h3>
      <article className="row align-items-center justify-content-center gap-3">
        <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7TjTouO5rZU?si=G8Mt4qfjecv8bZWv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-ZFrgd9_VS8?si=9aG8VUPMp4YIL6K1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-12 col-md-5 col-lg-3 d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CGWMZM0OvMA?si=wFn1oh57i2DpV1mx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default VideosAyuda;
