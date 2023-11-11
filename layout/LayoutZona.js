import React, { useEffect, useState } from "react";
import Head from "next/head";
import useControl from "../hooks/useControlProvider";
import Link from "next/link";
import AlertCerrarSerieZona from "../components/AlertCerrarSerieZona";

export default function LayoutZona() {
  const {
    seleArea,
    datosSeries,
    setDatosSeries,
    selectionShowSerie,
    setSelectionShowSerie,
    takingIdStatusArea,
    preChangingSerie,
    upSelectionShowSerie
  } = useControl();

  useEffect(() => {
    const dataSeries = upSelectionShowSerie.length > 0 ? upSelectionShowSerie : datosSeries
    setDatosSeries(dataSeries)
  },[datosSeries, upSelectionShowSerie])


  useEffect(() => {
    switch (seleArea) {
      case "guillotina":
        const showGuillotina = datosSeries.filter(
          (show) => show.guillotina === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showGuillotina);
        break;

      case "devanado":
        const showDevanado = datosSeries.filter(
          (show) => show.devanado === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showDevanado);
        break;

      case "punzonado":
        const showPunzonado = datosSeries.filter(
          (show) => show.punzonado === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showPunzonado);
        break;

      case "marcos":
        const showMarcos = datosSeries.filter(
          (show) => show.marcos === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showMarcos);
        break;

      case "plegado":
        const showPlegado = datosSeries.filter(
          (show) => show.plegado === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showPlegado);
        break;

      case "pladur":
        const showPladur = datosSeries.filter(
          (show) => show.pladur === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showPladur);
        break;

      case "rockbulk":
        const showRockbulk = datosSeries.filter(
          (show) => show.rockbulk === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showRockbulk);
        break;

      case "pegamento":
        const showPegamento = datosSeries.filter(
          (show) => show.pegamento === true && show.status === "Abierta"
        );
        setSelectionShowSerie(showPegamento);
        break;
    }
  }, []);

  return (
    <>
      <Head>
        <title>SysControl - Produicción</title>
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
          {selectionShowSerie.length > 0 ? (
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-500 font-mono capitalize text-center">
              {`Control de ${seleArea}`}
            </h1>
          ) : (
            <p className="text-2xl text-yellow-600 mt-5 font-semibold">
              No hay Series Pendientes
            </p>
          )}

          <div className="flex flex-col flex-wrap sm:flex-row w-[90%] text-center items-center mt-5 justify-evenly">
            {selectionShowSerie.length > 0
              ? selectionShowSerie.map((seleShow) => (
                  <div
                    key={seleShow.id}
                    onClick={() => {{takingIdStatusArea(seleShow.id); preChangingSerie(seleShow.id)}}}
                    className={`text-xl md:text-2xl bg-neutral-200 font-mono font-medium border border-black w-[90%] sm:w-1/4 my-2 p-2 sm:mx-2 rounded-lg shadow-xl hover:text-black hover:bg-neutral-400 uppercase`}
                  >
                    {seleShow.numSerie}
                  </div>                   
                ))
              : ""}
          </div>
        </div>
      </div>
      <AlertCerrarSerieZona
      msg={`Has terminado con la Serie:`}
      msg2={`Cliente:`}
      />

    </>
  );
}
