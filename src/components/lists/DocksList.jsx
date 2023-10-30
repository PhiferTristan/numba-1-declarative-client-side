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
      <div className="docks-container flex flex-col self-center items-center border border-blue-400 bg-slate-800 text-white p-5">
        <div className="docks-header text-4xl underline">Docks list</div>
        <ul>
          {allDocks.map((dock) => {
            return (
              <div className="flex p-5" key={dock.id}>
                {dock.location}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
