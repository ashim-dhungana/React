import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
 
  // Can only return 1 element
  return (
    <>
      <Navbar/>

      <main>
        This is the main content.
      </main>

      <div className="cards">

        <Card title="First card" description="This is a card" />
        <Card title="Second card" description="This is another card" />
        <Card/>
        
      </div>

      <Footer/>
    </>
  );
}

export default App;
