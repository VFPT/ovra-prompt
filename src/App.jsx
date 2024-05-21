import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Accordion from "./components/Accordion"
import Footer from "./components/Footer"

import "./App.css";

const App = () => {
  return (
    <NextUIProvider>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='app'>
          <Hero />
          <Demo />
          <Accordion />
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
};

export default App;
