import { useEffect, useState } from "react";
import { getAllShips } from "../../services/shipsService"

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


