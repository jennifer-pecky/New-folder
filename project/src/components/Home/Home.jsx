import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <nav>
        <div className=" p-3 font-bold  flex justify-center">
          <ul className="flex p-[15px] bg-[#FF6DCD] space-x-3 rounded-[30px] text-[#fff]">
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

export default Home;
