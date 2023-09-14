import React from 'react';
import Link from 'next/link';
import amazonImg from '../public/assets/projects/fake_amazon.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#387ee1]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Fake Amazon"
            backgroundImg={amazonImg}
            projectUrl="/fake_amazon"
            tech="React JS, NodeJS, MongoDB"
          />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#387ee1]" size={30} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
