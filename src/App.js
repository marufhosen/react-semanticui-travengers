import "./App.css";
import TopNav from "./Components/TopNav/TopNav";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <TopNav />
      <NavBar />
      <Banner />
      <Services />
      <WhyChooseUs />
    </div>
  );
}

export default App;
