import React from 'react';
import { BiLink } from 'react-icons/bi';

const Project = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[3rem] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          PROJECTS
        </h1>
        <p>Below are some of my projects i've worked on</p>
      </div>

      <div className="text-center mt-20 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20  lg:grid-cols-3">
          <div className="bg-white space-y-3 hover:bg-[#bca7b5] text-black hover:text-red-500  p-6">
            <h1 className="lg:text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex justify-center text-zinc-900">
              {' '}
              <a href="https://jeweriesecommerce.netlify.app/">
                {' '}
                Here is a link to the website
              </a>{' '}
            </small>
          </div>

          <div className="bg-white space-y-3 hover:bg-[#bca7b5] text-black hover:text-red-500  p-6">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">Quiz Game</h1>
            <p className="text-zinc-900">A simple game game</p>

            <small className="flex justify-center text-zinc-900">
              {' '}
              <a href="https://github.com/jennifer-pecky/Quiz-Game-master">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3 bg-white  hover:bg-[#bca7b5] text-black hover:text-red-500  p-6">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              NFT Website
            </h1>
            <p className="text-zinc-900">A simple NFT website</p>

            <small className="flex justify-center text-zinc-900">
              {' '}
              <a href="https://chipper-crepe-2a50d4.netlify.app">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3 bg-white hover:bg-[#bca7b5] text-black hover:text-red-500 p-6">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              portfolio website
            </h1>
            <p className="text-zinc-900">My simple portfolio website</p>

            <small className="flex justify-center text-zinc-900 italic">
              {' '}
              <a href="https://maduagwu.netlify.app">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="bg-white space-y-3 hover:bg-[#bca7b5] text-black hover:text-red-500 p-6">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Loan website
            </h1>
            <p className="text-zinc-900 text-[15px] leading-tight">
              A website where you can register and borrow loan
            </p>

            <small className="flex justify-center text-zinc-900 italic">
              {' '}
              <a href="https://www.olhomes.ng">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
