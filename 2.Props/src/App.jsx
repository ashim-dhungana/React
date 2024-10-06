import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // Can only return 1 element

  return (
    <>
      <Navbar/>

      <main>
        This is the main content.
      </main>

      <div className="cards">
        
      </div>

      <Footer/>
    </>
  );
}

export default App;
