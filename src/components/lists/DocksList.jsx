import { useEffect, useState } from "react";
import { getAllDocks } from "../../services/docksService";

export const DocksList = () => {
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getAllDocks().then((docksArray) => {
      setAllDocks(docksArray);
    });
  }, []);

  return (
    <>
      <div className="docks-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="docks-header text-4xl">Docks list</div>
        <ul>
          {allDocks.map((dock) => {
            return (
              <div className="flex" key={dock.id}>
                {dock.location}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
