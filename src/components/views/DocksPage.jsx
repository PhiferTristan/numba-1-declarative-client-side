import { useEffect, useState } from "react";
import { getAllDocksEmbedHaulers } from "../../services/docksService";

export const DocksPage = () => {
  const [allDocks, setAllDocks] = useState([]);

  useEffect(() => {
    getAllDocksEmbedHaulers().then((docksArray) => {
      setAllDocks(docksArray);
    });
  }, []);

  return (
    <>
      <div className="dock-page-container flex flex-col self-center items-center bg-slate-800 text-white">
        <div className="dock-list flex flex-col self-center items-center">
          <h2 className="dock-page-header p-10 text-4xl underline">Docks List</h2>
          <ul>
            {allDocks.map((dock) => {
                console.log(dock)
              return (
                <div className="dock-container flex justify-between space-x-20 p-5" key={dock.id}>
                  <div className="dock-location flex justify-center w-[200px]">{dock.location}</div>
                  <div className="dock-capacity flex justify-center w-[200px]">
                    Tonnage Capacity: {dock.capacity}
                  </div>
                  <div className="dock-haulers-container flex justify-center w-[200px]">Haulers:</div>
                  <ol className="list-disc list-inside">
                    {dock.haulers.map((hauler) => (
                      <li className="" key={hauler.id}>{hauler.name}</li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
