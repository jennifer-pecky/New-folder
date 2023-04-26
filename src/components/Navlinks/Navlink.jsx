import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = () => {
  return (
    <>
      <nav>
        <div className=" p-3 font-bold  flex justify-center">
          <ul className="flex p-[5px] w-72 justify-center  space-x-6 rounded-[30px] text-[#fff] backdrop-blur-md bg-[#FF6DCD]/60  backdrop-grayscale-0">
            <li>
              <Link to="/aboutme">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/apicall"> Api_call</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navlink;
