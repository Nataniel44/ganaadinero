import CardText from "./CardText";
import Cards from "./Cards";
import Table from "./Table";
import VideosAyuda from "./VideosAyuda";

const Main = () => {
  return (
    <>
      <main className="bg-black pt-5 container-fluid d-flex flex-column align-items-center gap-4">
        <Cards />
        <Table />
        <VideosAyuda />
        <CardText />
      </main>
    </>
  );
};

export default Main;
