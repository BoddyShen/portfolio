import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#387ee1]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="p-4 text-gray-600 text-justify">
            I come from Taiwan and I am currently pursuing a{' '}
            <b className="text-[#387ee1]">
              Master of Science in Computer Science at the University of
              Massachusetts Amherst
            </b>
            , starting in the Fall of 2023. My area of expertise lies in{' '}
            <b className="text-[#387ee1]">web backend development</b>, and I
            have experience working with various frameworks such as{' '}
            <b className="text-[#387ee1]">
              Flask, Django, Node.js connected with SQL and NoSQL databases
            </b>
            , and I have also implemented several side projects by{' '}
            <b className="text-[#387ee1]">React</b> for frontend interfaces. In
            addition to frontend and backend development, I also interested in
            various aspects of software engineering, including testing, CI/CD
            (Continuous Integration/Continuous Deployment), and infrastructure
            setup. I look forward to applying these diverse skills to create
            even better products.
          </p>
          <p className="p-4 text-gray-600 text-justify">
            <b className="text-[#387ee1]">
              I am actively seeking a summer internship opportunity for 2024. If
              there are any internship opportunities available, please feel free
              to contact me.
            </b>
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
