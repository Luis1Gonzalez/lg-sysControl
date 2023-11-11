import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useControl from "../hooks/useControlProvider";
import Alert from "./Alert";

export default function EditSerieModal({ setModalEditSerie, modalEditSerie }) {
    const {
        setNumSerie,
        setPrimalSerie,
        setClient,
        client,
        setStatus,
        status,
        setComment,
        comment,
        guillotina,
        setGuillotina,
        devanado,
        setDevanado,
        marcos,
        setMarcos,
        plegado,
        setPlegado,
        pladur,
        setPladur,
        rockbulk,
        setRockbulk,
        punzonado,
        setPunzonado,
        pegamento,
        setPegamento,
        setPriority,
        priority,
        alert,
        msg,
        editSerie,
        editingSerie,
        setIdSerieControl
      } = useControl();
    const showSerieActual = editingSerie.numSerie
    
    const handleGuillotina = () => {
        setGuillotina(!guillotina);
      };
    
      const handleDevanado = () => {
        setDevanado(!devanado);
      };
    
      const handlePunzonado = () => {
        setPunzonado(!punzonado);
      };
    
      const handleMarcos = () => {
        setMarcos(!marcos);
      };
    
      const handlePlegado = () => {
        setPlegado(!plegado);
      };
    
      const handlePladur = () => {
        setPladur(!pladur);
      };
    
      const handleRockbulk = () => {
        setRockbulk(!rockbulk);
      };
    
      const handlePegamento = () => {
        setPegamento(!pegamento);
      };
    
      const handleStatus = (e) => {
        setStatus(e.target.value);
      };
      const id = editingSerie.id

useEffect(() => {
  setIdSerieControl(id)
})

      return (
        <Transition.Root show={modalEditSerie} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={() => setModalEditSerie(false)}
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
    
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
    
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => {
                        setModalEditSerie(false),
                          setNumSerie(""),
                          setPrimalSerie(""),
                          setClient(""),
                          setComment(""),
                          setPriority("");
                      }}
                    >
                      <span className="sr-only">Cerrar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
    
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-2xl leading-6 font-bold text-gray-900"
                      >
                        Editar Serie <span className="text-indigo-600">{showSerieActual}</span>
                      </Dialog.Title>



                      
                      <form onSubmit={editSerie} className="my-10">


                    {/* ------------------------------Client---------------------- */}

                    <div className="mb-5">
                      <label
                        htmlFor="client"
                        className="text-gay-700 font-semibold text-xl"
                      >
                        Cliente
                      </label>

                      <input
                        type="text"
                        id="client"
                        onChange={(e) => setClient(e.target.value)}
                        value={client}
                        pattern="[A-Z][a-z]+"
                        placeholder="ej.: Cimesa"
                        title="El primer carácter debe ser una letra en mayuscula."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      />
                    </div>

                    {/* ------------------------------Other---------------------- */}

                    <fieldset className="mb-5 border-2 p-3 flex flex-col flex-wrap sm:flex-row justify-evenly gap-2">
                      <legend className="text-gay-700 font-semibold text-xl mb-2">
                        Selecciona
                      </legend>

                      <div
                        onClick={handleGuillotina}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          guillotina ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="guillotina"
                          className="w-1/2 text-gay-700 font-semibold text-md"
                        >
                          Guillotina
                        </label>

                        <div>
                          {guillotina ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handleDevanado}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          devanado ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="devanado"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Devanado
                        </label>
                        <div>
                          {devanado ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handlePunzonado}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          punzonado ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="punzonado"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Punzonado
                        </label>
                        <div>
                          {punzonado ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handleMarcos}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          marcos ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="marcos"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Marcos
                        </label>
                        <div>
                          {marcos ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handlePlegado}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          plegado ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="plegado"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Hojas
                        </label>
                        <div>
                          {plegado ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handlePladur}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          pladur ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="pladur"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Pladur
                        </label>
                        <div>
                          {pladur ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handleRockbulk}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          rockbulk ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="rockbulk"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Rockbulk
                        </label>
                        <div>
                          {rockbulk ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div
                        onClick={handlePegamento}
                        className={`p-3 sm:p-0 mb-2 flex items-center justify-around sm:w-[45%] bg-gray-200 border ${
                          pegamento ? "border-green-400" : "border-white"
                        } shadow-lg`}
                      >
                        <label
                          htmlFor="pegado"
                          className="w-1/2 text-gay-700 font-semibold text-md sm:m-4"
                        >
                          Pegamento
                        </label>
                        <div>
                          {pegamento ? (
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
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
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
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </fieldset>

                    {/* ------------------------------Comment---------------------- */}

                    <div className="mb-5">
                      <label
                        htmlFor="comment"
                        className="text-gay-700 font-semibold text-xl"
                      >
                        Comentarios
                      </label>

                      <textarea
                        id="comment"
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                        placeholder="Deja algún comentario aqui"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        rows="6"
                        cols="10"
                      />
                    </div>

                    {/* ------------------------------Status---------------------- */}

                    <fieldset className="rounded-lg px-6 sm:py-4 sm:px-2  w-[100%] mb-5 border-2 flex flex-col flex-wrap sm:flex-row  items-center justify-center sm:justify-evenly">
                      <legend className="text-gay-700 font-semibold text-xl mb-2">
                        Status
                      </legend>
                      <div className=" sm:w-1/3 flex justify-evenly items-center font-semibold w-full mb-3">
                        <label htmlFor="status-open" className="mx-3">
                          Abierta
                        </label>
                        <input
                          type="radio"
                          name="valorStatus"
                          id="status-open"
                          value="Abierta"
                          checked={status === "Abierta"}
                          onChange={handleStatus}
                        />
                      </div>
                      <div className=" sm:w-1/3 flex justify-evenly items-center font-semibold w-full mt-3 mb-5 sm:mt-2">
                        <label htmlFor="status-closed" className="mx-3">
                          Cerrada
                        </label>
                        <input
                          type="radio"
                          name="valorStatus"
                          id="status-closed"
                          value="Cerrada"
                          checked={status === "Cerrada"}
                          onChange={handleStatus}
                        />
                      </div>
                    </fieldset>

                    {/* ------------------------------Priority---------------------- */}

                    <div>
                      <label
                        htmlFor="priority"
                        className="text-gay-700 font-semibold text-xl"
                      >
                        Prioridad
                      </label>

                      <select
                        id="priority"
                        className="text-center mb-8 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md shadow-xl md:text-xl"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                      >
                        <option value="">-- Seleccionar --</option>
                        <option value="Baja">Baja</option>
                        <option value="Alta">Alta</option>
                      </select>
                    </div>

                    {alert && <Alert msg={msg} />}

                    {/* ------------------------------Submit---------------------- */}
                    <div className="flex justify-center">
                      <input
                        type="submit"
                        className="text-xl md:text-xl bg-indigo-600 font-mono font-medium border border-blue-600 w-[90%] lg:text-2xl my-2 py-3 sm:mx-2 rounded-lg hover:bg-indigo-400 text-white transition-colors shadow-xl"
                        value="Cargar"
                      />
                    </div>
                  </form>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      );
    }
    
