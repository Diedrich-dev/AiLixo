import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col scrollbar scrollbar-thumb-red-700">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
