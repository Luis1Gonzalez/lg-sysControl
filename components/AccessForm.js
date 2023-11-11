import React from "react";
import useControl from "../hooks/useControlProvider";
import Alert from "./Alert";


const AccessForm = () => {
const { setPassword, verifyAccess, alert, msg, } = useControl()

  return (
    <div className="flex flex-col bg-red-200 min-h-[180px] md:min-h-[200px] py-3 w-[90%] sm:w-[75%] md:w-1/3 mt-16 rounded-xl shadow-xl justify-evenly items-center border-white italic">
      <label
        htmlFor="password"
        className="flex justify-center items text-2xl font-semi-bold"
      >
        Contraseña:
      </label>
      <input
        type="password"
        className="text-gray-400 rounded-md h-[30px] w-[90%] my-1 md:my-2 p-6"
        onChange={e => setPassword(e.target.value)}
        autoComplete="off"
      />

      <button
      onClick={verifyAccess}
      className=" bg-sky-500 italic  hover:bg-indigo-600 shadow-xl py-2 w-[90%] text-xl text-white rounded-lg transition-colors">
        Entrar
      </button>

      {alert && <Alert msg={msg} />}

    </div>
  );
};

export default AccessForm;
