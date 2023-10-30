import { DocksList } from "../lists/DocksList";
import { HaulersList } from "../lists/HaulersList";
import { ShipsList } from "../lists/ShipsLists";

export const Homepage = () => {
  return (
    <div className="homepage-container bg-slate-800 flex flex-col self-center items-center text-white flex-1">
      <h1 className="homepage-header text-4xl p-10 font-bold">Homepage</h1>
      <div className="lists-container flex flex-row justify-center p-2 space-x-10 p-5">
        <div className="">{<ShipsList />}</div>
        <div>{<HaulersList />}</div>
        <div>{<DocksList />}</div>
      </div>
    </div>
  );
};
