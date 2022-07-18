import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
// import ListDiscover from './components/ListDiscover';
import Routing from "./routing/appRoutes";

function App() {
  return (
   <> 
    <Header />
    <Routing />
    {/* <ListDiscover /> */}
    <Footer />
  </>
  );
}
export default App;
