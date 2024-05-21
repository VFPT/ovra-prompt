import React from "react";
import { GoHomeFill } from "react-icons/go";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <a href="" class="text-3xl font-bold hover:opacity-75 transition-all flex justify-between items-center">OvraAI</a>

        <button
          type='button'
          onClick={() =>
            window.open("https://vicvenpet.xyz/", "_self")
          }
          className='black_btn'
        >
          <GoHomeFill />
        </button>
      </nav>

      <h1 className='head_text'>
        Resume artículos con <br className='max-md:hidden' />
        <span className='purple_gradient '>OvraAI & GPT-4o</span>
      </h1>
      <h2 className='desc'>
        Hazlo simple, eficiente y con la última tecnología IA GPT, completamente gratis con OvraAI.
      </h2>
    </header>
  );
};

export default Hero;
