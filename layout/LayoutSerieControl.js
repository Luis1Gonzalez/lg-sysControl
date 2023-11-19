import Head from "next/head";
import useControl from "../hooks/useControlProvider";
import Link from "next/link";
import EditSerieModal from "../components/EditSerieModal";
import AlertCerrarSerieZona from "../components/AlertCerrarSerieZona";
import { useEffect } from "react";

export default function LayoutSerieControl() {
  const {
    setModalEditSerie,
    modalEditSerie,
    filterSerieControl,
    setFilterSerieControl,
    setOpen,
    setClosed,
    setFinder,
    editSerieControl,
    identifierDeleteSereieControl,
    guillotinaZona,
    statusGuillotina,
    statusDevanado,
    statusPunzonado,
    statusMarcos,                
    statusPlegado,
    statusPladur,
    statusRockbulk,
    statusPegamento,
  } = useControl();

  const backMain = () => {
    setOpen(false);
    setClosed(false);
    setFinder(true);
  };
  const idFilterSerieControlId = filterSerieControl[0]?.id;

  useEffect(() => {
    const array = [JSON.parse(localStorage.getItem("serie"))];
    if (!filterSerieControl[0]) {
      setFilterSerieControl(array);
    }
  }, []);

  return (
    <>
      <Head>
        <title>SysControl - Admin</title>
        <meta name="description" content="Sistema de control de producción" />
      </Head>

      {filterSerieControl ? (
        <div className=" flex flex-col min-w-[320px] w-[100%] min-h-screen items-center bg-gray-200 p-3">
          <div className="flex w-scrren justify-center mb-7 mt-16">
            <h1 className="text-6xl font-bold text-gray-500 font-mono">
              Sys
              <span className="text-indigo-400 font-black italic text-5xl">
                Control
              </span>
            </h1>
          </div>

          <div className="flex justify-evenly w-[100%] items-center">
            <Link
              className="hover:bg-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
              href={"/series"}
              onClick={backMain}
            >
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
                  d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                />
              </svg>
            </Link>

            <div
              className="hover:bg-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
              onClick={() => editSerieControl(filterSerieControl[0].id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>

            <div
              className="hover:bg-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
              onClick={() =>
                identifierDeleteSereieControl(
                  filterSerieControl,
                  idFilterSerieControlId
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="mt-0 w-full flex flex-col justify-center items-center">
            {filterSerieControl.map((filtered) => (
              <div key={filtered.id} className="my-10 w-[100%] px-4">
                {/* ------------------------------Serie---------------------- */}
                <div className="mb-5 flex justify-center items-center p-2">
                  <label
                    htmlFor="num-serie"
                    className="font-bold text-4xl md:text-5xl w-2/4 text-center"
                  >
                    Serie:
                  </label>

                  <p className="text-indigo-400 font-semibold text-4xl md:text-5xl w-2/4 text-star">
                    {filtered.numSerie}
                  </p>
                </div>
                <div className="flex flex-col items-end mb-3 p-3">
                  <p className="text-xl font-semibold">Creada:</p>
                  <p>{filtered.day}</p>
                  <p>{filtered.hour}</p>
                </div>
                {/* ------------------------------Client---------------------- */}
                <div className="mb-5 flex justify-around items-center border rounded-md border-black border-2xl p-2">
                  <label
                    htmlFor="client"
                    className="font-semibold text-2xl md:text-3xl  w-[50%] text-center p-2"
                  >
                    Cliente:
                  </label>

                  <p className="bg-slate-300 text-center px-2 py-2 text-black text-xl md:text-2xl font-semibold w-[40%]">
                    {filtered.client}
                  </p>
                </div>

                {/* ------------------------------Status---------------------- */}

                <div className="mb-5 flex justify-around items-center border rounded-md border-black border-2xl p-2">
                  <label className="font-semibold text-2xl md:text-3xl w-[50%] text-center p-2">
                    Status:
                  </label>

                  <p className=" bg-slate-300 text-center px-2 py-2 text-black text-xl md:text-2xl font-semibold w-[40%]">
                    {filtered.status}
                  </p>
                </div>

                {/* ------------------------------Priority---------------------- */}

                <div className="mb-5 flex justify-around items-center border rounded-md border-black border-2xl p-2">
                  <label className="font-semibold text-2xl md:text-3xl w-[50%] text-center p-2">
                    Prioridad:
                  </label>

                  <p
                    className={`${
                      filtered.priority === "Alta"
                        ? "from-slate-300 to-red-400 bg-gradient-to-br"
                        : "bg-slate-300"
                    } text-center px-2 py-2 text-black text-xl md:text-2xl font-semibold w-[40%]`}
                  >
                    {filtered.priority === "Alta" ? "Alta" : "Baja"}
                  </p>
                </div>

                {/* ------------------------------Comment---------------------- */}

                <div className="mb-5 flex flex-col items-center border rounded-md border-black border-2xl p-2 word-break: break-all">
                  <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                    Comentarios
                  </label>

                  <p className="min-w-[100%] min-h-[40px] break-words bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold overflow-clip">
                    {filtered.comment}
                  </p>
                </div>

                {/* ------------------------------Others---------------------- */}
                <div className=" flex flex-col sm:flex-row flex-wrap sm:justify-evenly">
                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.guillotina === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Guillotina
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusGuillotina === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.devanado === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Devanado
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusDevanado === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.punzonado === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Punzonado
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusPunzonado === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.marcos === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Marcos
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusMarcos === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.plegado === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Hojas
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusPlegado === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.pladur === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Pladur
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusPladur === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.rockbulk === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Rockbulk
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusRockbulk === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>

                  <div
                    className={`mb-5 flex flex-col items-center sm:w-[40%] md:w-[30%] ${
                      filtered.pegamento === false ? "hidden" : "block"
                    }`}
                  >
                    <label className="text-gay-700 font-semibold text-2xl md:text-3xl">
                      Pegamento
                    </label>
                    <p className="w-full bg-slate-300 text-center p-2 mt-2 text-black text-md md:text-xl font-semibold">
                      {filterSerieControl[0]?.statusPegamento === true
                        ? "Listo"
                        : "Pendiente"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <EditSerieModal
            modalEditSerie={modalEditSerie}
            setModalEditSerie={setModalEditSerie}
          />
        </div>
      ) : (
        "Esta Serie No Exite"
      )}
      <AlertCerrarSerieZona
        msg={`Estas seguro de eliminar la Serie:`}
        msg2={`Cliente:`}
      />
    </>
  );
}
