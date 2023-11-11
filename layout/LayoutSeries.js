import Head from "next/head";
import OpenSeries from "../components/OpenSeries";
import useControl from "../hooks/useControlProvider";
import SeriesFinder from "../components/SeriesFinder";
import AddSerieModal from "../components/AddSerieModal";
import Link from "next/link";


export default function LayoutSeries() {
  const { handleOpen, handleClosed, handleFinder, finder, modalAddSerie, setModalAddSerie } = useControl();

  return (
    <>
      <Head>
        <title>SysControl - Admin</title>
        <meta name="description" content="Sistema de control de producción" />
      </Head>

      <div className="p-7 md:p-9 flex justify-end bg-gray-200 w-screen lg:pr-20">
        <Link
          href={"/"}
          className="hover:bg-gray-400 w-12 h-12 flex justify-center items-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-8 lg:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </Link>

        <Link
          href={"/lobby"}
          className="hover:bg-gray-400 w-12 h-12 flex justify-center items-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-8 lg:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </div>

      <div className=" flex flex-col min-w-[320px] w-screen min-h-screen items-center bg-gray-200 p-3">
        <div className="flex w-scrren justify-center mb-7 mt-2">
          <h1 className="text-6xl font-bold text-gray-500 font-mono">
            Sys
            <span className="text-indigo-400 font-black italic text-5xl">
              Control
            </span>
          </h1>
        </div>

        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold text-gray-500 font-mono">
            Control
          </h1>

          <div className="mt-5 sm:mt-7 bg-neutral-300 flex flex-col sm:flex-row w-full md:w-[80%] items-center py-2 text-center justify-evenly rounded-lg shadow-xl mb-5">
            <button
              onClick={handleOpen}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-2/4 md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              Abiertas
            </button>

            <button
              onClick={handleClosed}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-2/4 md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              Cerradas
            </button>

            <button
              onClick={handleFinder}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-2/4 md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              Buscar
            </button>

          </div>
          <div className="flex flex-col w-[90%] text-center items-center">
            {finder ? <SeriesFinder /> : <OpenSeries />}
            <AddSerieModal
            modalAddSerie = {modalAddSerie}
            setModalAddSerie = {setModalAddSerie}
            />
          </div>
        </div>
      </div>
    </>
  );
}
