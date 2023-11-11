import Head from "next/head";
import AccessForm from "../components/AccessForm";

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <title>SysControl - Inicio</title>
        <meta name="description" content="Sistema de control de producción" />
      </Head>

      <div className=" flex flex-col min-w-[320px] w-screen h-screen items-center bg-gray-200 p-3">
        <div className="flex w-scrren justify-center mb-7 mt-16">
          <h1 className="text-6xl font-bold text-gray-500 font-mono">
            Sys
            <span className="text-indigo-400 font-black italic text-5xl">
              Control
            </span>
          </h1>
        </div>
         <AccessForm />

        <div>{children}</div>
      </div>
    </>
  );
}
