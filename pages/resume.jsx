import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Po | Resume</title>
        <meta
          name="description"
          content="I’m a MSCS Student specializing in building web applications."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Po Heng Shen</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/po-heng-shen-3b9b47226/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/BoddyShen"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <p className="py-2">
            HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <br />
            Python
            <span className="px-2">|</span> Node (Express)
            <span className="px-2">|</span> Django
            <span className="px-2">|</span> Flask
            <span className="px-2">|</span> MySQL
            <span className="px-2">|</span> MongoDB
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">OakMega</span>
            <span className="px-2">|</span>Taipei, Taiwan
          </p>
          <p className="py-1 italic">
            Backend Web Developer Intern (2023/03 - 2023/08)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented unit tests and integration tests in Django CRM service
              across six applications, achieving over 95% test coverage on them
              and identifying over three critical bugs and multiple minor
              issues.
            </li>
            <li>
              Collaborated with the development team to understand the
              system&apos;s functionalities and design test cases to cover
              different scenarios.
            </li>
            <li>
              Included automated testing processes in the CI/CD pipeline on
              Google Cloud Platform.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
