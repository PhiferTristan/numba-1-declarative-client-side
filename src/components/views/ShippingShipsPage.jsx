import { useEffect, useState } from "react";
import { deleteShip, getAllShipsWithHaulers } from "../../services/shipsService";

export const ShippingShipsList = () => {
    const [allShips, setAllShips] = useState([]);
  
    useEffect(() => {
      getAllShipsWithHaulers().then((shipsArray) => {
        setAllShips(shipsArray);
      });
    }, []);
  
    const fetchShips = () => {
      getAllShipsWithHaulers().then((shipsArray) => {
        setAllShips(shipsArray);
      });
    };
  
    const deleteClick = (ship) => {
      deleteShip(ship).then(() => {
        fetchShips();
      })
    };
  
    return (
      <>
        <div className="ships-list-container flex flex-col self-center items-center bg-slate-800 text-white">
          <div className="ships-header text-4xl p-10 underline">Ships List</div>
          <ul>
            {allShips.map((ship) => {
              return (
                <div
                  className="flex justify-between space-x-20 p-5"
                  key={ship.id}
                >
                  <div className="ship-name flex">{ship.name}</div>
                  <div className="hauler-name flex justify-center w-[200px]" key={ship.hauler.haulerId}>
                    Hauler:
                    {ship.hauler.haulerName}
                  </div>
                  <button
                    className="btn-delete-ship flex bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteClick(ship)}
                  >
                    Delete Ship?
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  };