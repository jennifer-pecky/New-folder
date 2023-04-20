import React from 'react';
import img from '../assets/images/FB_IMG_1681926556464.jpg';
import image from '../assets/images/facebook.png';
import image2 from '../assets/images/github.png';
import image3 from '../assets/images/linkedin.png';
import image4 from '../assets/images/twitter.png';

const Aboutme = () => {
  return (
    <div>
      <div className="space-y-11">
        <div className="px-20 space-y-12">
          <div className="flex space-x-48">
            <h1 className="font-black text-[3.5rem] mt-28">
              {' '}
              Hello I'm <br /> MADUAGWU <br /> JENNIFER CHIOMA.{' '}
            </h1>
            <img
              src={img}
              alt=""
              className="w-[28%] hidden md:flex rounded-[6rem]"
            />
          </div>
          <p className="mb-32 w-[100%] text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
            In my role as a software developer, I prioritize the development{' '}
            <br /> of software solutions that are efficient, <br /> scalable,
            and user-friend The opportunity to work with experts <br /> like
            project managers, designers, and quality assurance engineers is a
            matter of pride for me, as it empowers us to deliver software
            applications of excellent quality. I am dedicated to continuously
            upgrading my skills and staying up-to-date with the latest
            programming languages and technologies, ensuring that I always
            provide cutting-edge solutions to my clients. My attention to detail
            is one of the qualities that distinguishes me as a software
            developer. I aim to write code that is easy to understand, maintain,
            and debug. Additionally, I value communication and teamwork and
            constantly seek ways to enhance my ability to work collaboratively
            with others.
          </p>

          <p className="mb-32 w-[100%] text-gray-500 dark:text-gray-400">
            Count me in for a challenging day of work, where I transform designs
            into functional websites. I'm capable of delivering this service not
            just to you, but to all clients out there. That said, when I'm not
            engrossed in work or coding my next project, I relish spending
            quality time with my husband and two children. Hiking, biking, and
            soaking up the warm Arizona sun are some of my favorite ways to
            unwind. By the way, have you taken in some vitamin D today?
          </p>
        </div>

        <div className="flex text justify-center text-center ">
          <a
            href="http://www.linkedin.com/in/jennifer-chioma-maduagwu"
            target="_blank"
            id="line"
          >
            <img src={image3} alt="" className="w-[80px]" />
          </a>
          <a
            href="https://web.facebook.com/jennifer.chioma.7771/"
            target="_blank"
            id="line"
          >
            <img src={image} alt="" className="w-[80px]" />
          </a>

          <a
            href="https://twitter.com/pecky_jennifer"
            target="_blank"
            id="line"
          >
            <img src={image4} alt="" className="w-[80px]" />
          </a>

          <a href="https://github.com/jennifer-pecky" target="_blank" id="line">
            <img src={image2} alt="" className="w-[76px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;