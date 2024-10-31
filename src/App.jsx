import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import IMCCalculator from "./IMCCalculator";
import Index from "./Index";

export default function App() {
  return (
    <div className="App">
      <Header />
      <IMCCalculator />
      <Footer />
      <Index/>
    </div>
  );
}

