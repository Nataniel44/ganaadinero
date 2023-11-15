import AboutNotFound from "./AboutNotFound";
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="text-black d-flex  align-items-center  flex-column container-fluid">
        <div className="w-100 bg-light p-3">
          <p className="display-4  font-header-p text-center">
            Pagina no encontrada
          </p>
          <p className="font-header-p text-center">
            Parece que no se ha encontrado nada en esta ubicación.
          </p>
        </div>
        <AboutNotFound />
      </main>
    </>
  );
};

export default NotFound;
