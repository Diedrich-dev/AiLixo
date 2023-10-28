import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-cover bg-no-repeat">
      {/* <Navbar /> */}
      {/* <div className="max-h-[80%] w-full flex justify-center items-center">
        <img src={PaginaInicial} alt="teste">
        </img>
      </div> */}
      <Container />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
