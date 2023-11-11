import Link from "next/link";
import useControl from "../hooks/useControlProvider";

export default function SeriesFinder() {
  const {
    setByNumber,
    setByClient,
    byNumber,
    byClient,
    findResult,
    setFilterSerieControl,
    datosSeries,
  } = useControl();

  const selectingSerie = (id) => {
    const selecting = datosSeries.filter((sele) => sele.id === id);
    setFilterSerieControl(selecting);
  };

  return (
    <div className="mt-5 sm:mt-7 bg-neutral-300 flex flex-col w-full md:w-[90%] items-center py-5 text-center justify-evenly rounded-lg shadow-xl mb-5 px-2 text-xl uppercase">
      <h1 className="text-xl font-semibold italic mb-4">Buscar Ordenes</h1>

      <div className="w-full md:w-[100%] flex flex-col sm:flex-row items-center justify-evenly">
        <input
          type="text"
          onChange={(e) => setByNumber(e.target.value)}
          value={byNumber}
          placeholder="Buscar por Número"
          className="my-3 w-[90%] sm:w-[45%] md:w-1/3 rounded-md p-2 text-center"
        />

        <input
          type="text"
          onChange={(e) => setByClient(e.target.value)}
          value={byClient}
          placeholder="Buscar por Cliente"
          className="my-3 w-[90%] sm:w-[45%] md:w-1/3 rounded-md p-2 text-center"
        />
      </div>

      <div className="w-[100%] flex flex-col sm:flex-row flex-wrap items-center justify-center mt-6">
        {findResult.map((resp) => (
          <Link
            key={resp.id}
            href={"/serieControl"}
            onClick={() => selectingSerie(resp.id)}
            className={`${
              resp.status === "Cerrada" ? "text-gray-400" : "text-black"
            } text-xl md:text-2xl bg-neutral-200 font-mono font-medium border ${
              resp.priority === "Alta" && resp.status === "Abierta"
                ? "border-red-600"
                : "border-gray-600"
            } w-[90%] sm:w-1/4 my-2 p-2 sm:mx-2 rounded-lg shadow-xl hover:text-black hover:bg-neutral-400 uppercase`}
          >
            {resp ? resp.numSerie : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}
