import { Docks } from "./DocksList";

export const DocksList = () => {
  return (
    <>
      <div className="docks-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="all-header">Docks list</div>
        <ul>
          {Docks.map((dock) => {
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
