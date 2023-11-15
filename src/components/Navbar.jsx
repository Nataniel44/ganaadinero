import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100; // Ajusta este valor según tus necesidades

      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const navbarStyle = scrolling ? "bg-transparent" : "bg-black scrolling";

  return (
    <>
      <nav className="p-0 navbar navbar-expand-lg fixed-top">
        <div
          className={`container-fluid d-flex justify-content-center pe-4 ${navbarStyle}`}
        >
          <a className="navbar-brand p-0" href="#"></a>
          <img src="./img/logo-b.png" className="f" alt="" />
        </div>
      </nav>
      <aside className="bg-black d-flex align-items-center justify-content-center text-light font-header pt-5">
        <div className="d-flex flex-column justify-content-center align-items-center pt-4">
          <h3 className="fs-5 font-header text-center">
            REGALAR nunca fue tan PLACENTERO!
          </h3>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
