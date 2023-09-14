import Image from 'next/image';
import React from 'react';
import amazonImg from '../public/assets/projects/fake_amazon.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={amazonImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Fake Amazon</h2>
          <h3>React JS / Node JS / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            I recently built an e-commerce service using the MERN stack
            (MongoDB, Express, ReactJS, and Node.js). This marketplace-style
            service allows registered users to browse and purchase products from
            other sellers, as well as upload and sell their own products. When
            an order is placed, it is displayed on both the buyer&apos;s and
            seller&apos;s pages. The application is a single page application
            (SPA) built with ReactJS and uses Hooks (such as useState,
            useEffect, useContext, and useReducer) to manage state and perform
            various tasks. I used React-Bootstrap to style the user interface
            and make it responsive for different devices. <br />
            <br />
            For the back-end, I used Express to build a RESTful API that allows
            the front-end to communicate with the MongoDB database. I
            implemented CRUD (Create, Read, Update, Delete) functionality for
            three types of data: users, products, and orders. Users can create
            an account, log in, and browse and purchase products. They can also
            view and update their personal information and view their order
            history. Overall, it was a challenging but rewarding project that
            allowed me to apply my knowledge of the MERN stack and learn new
            skills along the way. We welcome users to create an account and
            start using the service.
          </p>
          <a
            href="https://github.com/BoddyShen/Shen-Ecommerce"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://boddy-shopping-cart.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
