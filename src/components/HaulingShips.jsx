import { useEffect, useState } from "react";
import { getAllHaulers } from "../services/haulersService";

export const HaulingShips = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  }, []);

  return (
    <>
      <div className="haulers-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="haulers-header text-4xl">Haulers List</div>
        <ul>
          {allHaulers.map((hauler) => {
            return (
                <div className="flex fex-row justify-items-center space-x-20" key={hauler.id}>
                    <div className="flex" key={hauler.id}>{hauler.name}</div>
                    <button className="btn-edit flex bg-blue-500 text-white font-bold py-2 px-4 rounded">Edit Hauler?</button>
                </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};