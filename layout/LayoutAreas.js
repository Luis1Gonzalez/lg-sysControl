import Head from "next/head";
import useControl from "../hooks/useControlProvider";
import Link from "next/link";

export default function LayoutAreas() {
  const { setSeleArea } = useControl();

  const handleGuillotina = () => {
    setSeleArea("guillotina");
  };

  const handleDevanado = () => {
    setSeleArea("devanado");
  };

  const handlePunzonado = () => {
    setSeleArea("punzonado");
  };

  const handleMarcos = () => {
    setSeleArea("marcos");
  };

  const handlePlegado = () => {
    setSeleArea("plegado");
  };

  const handlePladur = () => {
    setSeleArea("pladur");
  };

  const handleRockbulk = () => {
    setSeleArea("rockbulk");
  };

  const handlePegamento = () => {
    setSeleArea("pegamento");
  };

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

      <div className=" flex flex-col min-w-[320px] w-[100%] min-h-screen items-center bg-gray-200 p-3">
        <div className="flex w-scrren justify-center mb-7 mt-2">
          <h1 className="text-6xl font-bold text-gray-500 font-mono">
            Sys
            <span className="text-indigo-400 font-black italic text-5xl">
              Control
            </span>
          </h1>
        </div>

        <div className="mt-10 w-full flex flex-col justify-center items-center flex-wrap">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-500 font-mono">
            Area de Máquinas
          </h1>

          <div className="mt-5 sm:mt-7 bg-neutral-300 flex flex-col flex-wrap sm:flex-row w-full md:w-[80%] items-center py-2 text-center justify-evenly rounded-lg shadow-xl mb-5">
            <button
              onClick={handleGuillotina}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Guillotina</Link>
            </button>

            <div
              onClick={handleDevanado}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Devanado</Link>
            </div>

            <div
              onClick={handlePunzonado}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Punzonado</Link>
            </div>

            <div
              onClick={handleMarcos}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Marcos</Link>
            </div>

            <div
              onClick={handlePlegado}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Hojas</Link>
            </div>

            <div
              onClick={handlePladur}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Pladur</Link>
            </div>

            <div
              onClick={handleRockbulk}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Rockbulk</Link>
            </div>

            <div
              onClick={handlePegamento}
              className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] sm:w-[45%] md:w-1/3 lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg shadow-xl hover:bg-indigo-400 text-white transition-colors"
            >
              <Link href="/production">Pegamento</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
