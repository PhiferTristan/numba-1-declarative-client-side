import { useEffect, useState } from "react";
import {
  getAllShips,
  getAllShipsWithHaulers,
} from "../../services/shipsService";

export const ShipsList = () => {
  const [allShips, setAllShips] = useState([]);

  useEffect(() => {
    getAllShips().then((shipsArray) => {
      setAllShips(shipsArray);
    });
  }, []);

  return (
    <>
      <div className="ships-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="ships-header text-4xl">Ships List</div>
        <ul>
          {allShips.map((ship) => {
            return (
              <div className="flex" key={ship.id}>
                {ship.name}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export const ShippingShipsList = () => {
  const [allShips, setAllShips] = useState([]);

  useEffect(() => {
    getAllShipsWithHaulers().then((shipsArray) => {
      setAllShips(shipsArray);
    });
  }, []);

  return (
    <>
      <div className="ships-list-container flex flex-col self-center items-center bg-slate-950 text-white">
        <div className="ships-header text-4xl">Ships List</div>
        <ul>
          {allShips.map((ship) => {
            return (
              <div className="flex fex-row justify-items-center space-x-20" key={ship.id}>
                <div className="ship-name flex">{ship.name}</div>
                <div className="hauler-name flex" key={ship.hauler.haulerId}>Hauler:
                  {ship.hauler.haulerName}
                </div>
                <button className="btn-delete flex bg-blue-500 text-white font-bold py-2 px-4 rounded">delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
