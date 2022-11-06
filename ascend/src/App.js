import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Steps from "./Steps";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <Home />
            <Steps />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default App;
