import React from "react";
import { FaRegCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <a href="" class="text-3xl font-bold hover:opacity-75 transition-all flex justify-between items-center">OvraAI</a>

        <button
          type='button'
          onClick={() =>
            window.open("https://ovra.ai/", "_self")
          }
          className='black_btn'
        >
          <FaRegCircle />
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='purple_gradient '>OvraAI and GPT-4o</span>
      </h1>
      <h2 className='desc'>
        Summarise articles simply, efficiently and with the latest IA GPT technology even more cheaply with OvraAI.
      </h2>
    </header>
  );
};

export default Hero;
