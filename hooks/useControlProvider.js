import { useContext } from "react";
import ControlContext from "../context/controlProvider";

const useControl = () => {
  return useContext(ControlContext);
};
export default useControl;
