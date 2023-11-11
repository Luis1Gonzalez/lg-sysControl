import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function LayoutLobby() {
  return (
    <>
      <Head>
        <title>SysControl - Inicio</title>
        <meta name="description" content="Sistema de control de producción" />
      </Head>

      <div className="p-7 md:p-9 flex justify-end bg-gray-200 w-100">
      <Link href={"/"}        
        className="hover:bg-gray-400 w-12 h-12 flex justify-center items-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </Link>
      </div>

      <div className=" flex flex-col min-w-[320px] w-screen min-h-screen items-center p-3 bg-gray-200">
        <div className="flex w-scrren justify-center mb-7 mt-2">
          <h1 className="text-6xl font-bold text-gray-500 font-mono">
            Sys
            <span className="text-indigo-400 font-black italic text-5xl">
              Control
            </span>
          </h1>
        </div>

        <div className="flex flex-col bg-red-200 h-auto py-3 w-[90%] sm:w-[75%] md:w-2/4 mt-8 sm:mt-4 md:mt-3 rounded-xl shadow-xl justify-evenly items-center  border border-gray-300 italic">
          <h1 className="text-4xl md:text-6xl my-8 font-semibold">Inicio</h1>

          <button className=" bg-gray-200 italic sm:font-semibold hover:bg-gray-300 w-[90%] shadow-xl py-4 sm:py-6 text-gray-600 text-3xl sm:text-4xl rounded-lg my-3 border border-sky-300 transition-colors">
            <Link href={"/series"}>Series</Link>
          </button>

          <button className=" bg-gray-200 italic sm:font-semibold hover:bg-gray-300 w-[90%] shadow-xl py-4 sm:py-6 text-gray-600 text-3xl sm:text-4xl rounded-lg my-3 border border-sky-300 transition-colors">
            <Link href={"/areas"}>Producción</Link>
          </button>

        </div>
      </div>
    </>
  );
}
