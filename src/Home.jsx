import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header url={"3755538503"} />
      <Main />
      <Footer
        number={"+54 15-3755-538503"}
        email={"josenatanielsoto@gmail.com"}
        ubi={"San Vicente, Misiones 🇦🇷"}
      />
    </>
  );
};

export default Home;
