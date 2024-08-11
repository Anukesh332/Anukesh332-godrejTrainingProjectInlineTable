import "./App.css";
import Home from "../src/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Details from "./Pages/Details";
import Addpost from "./Pages/Addpost";
import Editpost from "./Pages/Editpost";
import ComState from "./Context/comState";
import Comments from "./Pages/Comments";

function App() {
  return (
    <>
    <ComState>
     <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/add" element={<Addpost />} />
            <Route path="/edit/:id" element={<Editpost />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </ComState>
    </>
  );
}

export default App;
