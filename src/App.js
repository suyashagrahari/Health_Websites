import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Disease from './Components/Disease/disease';
import Articles from './Components/Articles/articles';
import Ejournal from "./Components/ejournal/ejournal";
import Books from "./Components/BooksPage/books";
import Diseases from "./Components/diseases/diseases";
import Pathy from "./Components/Pathy/pathy"
import Members from "./Components/Members/members";
import Teams from "./Components/Teamleader/Teams";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/teamleaders" exact element = {<Teams/>}> </Route>
        <Route path="/" exact element={<Home />}></Route> 
        <Route path="/about-us" exact element={<Home />}></Route>
        {/* Need to create child pages routes for diseases */}
        <Route path="/diseases" exact element={<Diseases/>}></Route>
        <Route path="/share-experience" exact element={<Articles />}></Route>
        <Route path="/ask-suggestion" exact element={<Home />}></Route>
        <Route path="/pathy" exact element={<Pathy />}></Route>
        <Route path="/clinics-hospitals" exact element={<Home />}></Route> 
        <Route path="/books" exact element={<Books />}></Route> 
        <Route path="/ejournal" exact element={<Ejournal />}></Route>
        <Route path="/members" exact element={<Members />}></Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
