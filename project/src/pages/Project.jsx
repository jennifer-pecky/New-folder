import React from 'react';
import { BiLink } from 'react-icons/bi';

const Project = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[3rem] font-black">PROJECTS</h1>
        <p>Below are some of my projects i've worked on</p>
      </div>

      <div className=" lg:text-center mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-7  lg:grid-cols-3">
          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/jewelries">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">Quiz Game</h1>
            <p className="text-zinc-900">A simple game game</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/Quiz-Game-master">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/jewelries">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/jewelries">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/jewelries">
                {' '}
                Here is a link to the source code
              </a>{' '}
            </small>
          </div>

          <div className="space-y-3">
            <h1 className="text-[20px] font-bold text-[#FF6DCD]">
              Jewelry website
            </h1>
            <p className="text-zinc-900">An E-commerce for jewelries</p>

            <small className="flex lg:justify-center text-zinc-900">
              {' '}
              <BiLink />
              <a href="https://github.com/jennifer-pecky/jewelries">
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
