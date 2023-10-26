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
      <div className="haulers-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="haulers-header text-4xl">Haulers List</div>
        <ul>
          {allHaulers.map((hauler) => {
            return (
              <div className="flex" key={hauler.id}>
                {hauler.name}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
