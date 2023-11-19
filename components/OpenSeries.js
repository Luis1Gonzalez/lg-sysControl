import Link from "next/link";
import useControl from "../hooks/useControlProvider";
import { useEffect } from "react";

export default function OpenSeries() {
  const {
    result,
    open,
    closed,
    finder,
    setModalAddSerie,
    setFilterSerieControl,
    datosSeries,
    setStatusGuillotina,
    setStatusDevanado,
    setStatusPunzonado,
    setStatusMarcos,
    setStatusPlegado,
    setStatusPladur,
    setStatusRockbulk,
    setStatusPegamento,
    obtainTime
  } = useControl();

  useEffect(() => {
    setStatusGuillotina(false)
    setStatusDevanado(false)
    setStatusPunzonado(false)
    setStatusMarcos(false)
    setStatusPlegado(false)
    setStatusPladur(false)
    setStatusRockbulk(false)
    setStatusPegamento(false)
  },[])

  const selectingSerie = (id) => {
    const selecting = datosSeries.filter((sele) => sele.id === id);
    setFilterSerieControl(selecting);
    localStorage.setItem("serie", JSON.stringify(selecting[0]));
  };

  return (
    <div className="w-[100%] flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
      <h1 className="text-2xl font-semibold italic mb-4">
        {!open && !closed ? "" : open ? "Series Abiertas" : "Series Cerradas"}
      </h1>
      <div className="w-[100%] flex flex-wrap flex-col sm:flex-row justify-evenly items-center">
        {!open && !closed && !finder ? (
          ""
        ) : open ? (
          <button
            onClick={() => {setModalAddSerie(true); obtainTime()}}
            className="text-xl  bg-sky-500 font-mono font-medium border border-blue-600 w-[90%] sm:w-1/4 my-2 py-2 sm:mx-2 rounded-lg shadow-xl hover:bg-sky-600 text-white md:text-2xl transition-colors"
          >
            Nueva Serie
          </button>
        ) : (
          ""
        )}

        {result.map((seriex) => (
          <Link
            key={seriex.id}
            className={`${
              seriex.status === "Cerrada" ? "text-gray-400" : "text-black"
            } text-xl md:text-2xl bg-neutral-200 font-mono font-medium border ${
              seriex.priority === "Alta" && seriex.status === "Abierta"
                ? "border-red-600"
                : "border-gray-600"
            } w-[90%] sm:w-1/4 my-2 p-2 sm:mx-2 rounded-lg shadow-xl hover:text-black hover:bg-neutral-400 uppercase`}
            href={"/serieControl"}
            onClick={() => selectingSerie(seriex.id)}
          >
            {seriex.numSerie}
          </Link>
        ))}
      </div>
    </div>
  );
}
