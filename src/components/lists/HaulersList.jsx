import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulersService";

export const HaulersList = () => {
  const [allHaulers, setAllHaulers] = useState([]);

  useEffect(() => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  }, []);

  return (
    <>
      <div className="haulers-container flex flex-col self-center items-center border border-blue-400 bg-slate-800 text-white p-5">
        <div className="haulers-header text-4xl underline">Haulers List</div>
        <ul>
          {allHaulers.map((hauler) => {
            return (
              <div className="flex p-5" key={hauler.id}>
                {hauler.name}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
