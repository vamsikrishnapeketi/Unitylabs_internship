import { useContext } from "react";
import { Selitem } from "../context/Selitem";

export const Postdetail = () => {
  const { selObj } = useContext(Selitem);
  return (
    <div>
      <h1>{selObj.title}</h1>
      <p>{selObj.points}</p>
    </div>
  );
};
