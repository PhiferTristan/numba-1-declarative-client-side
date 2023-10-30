import { useEffect, useState } from "react";
import { getAllHaulers } from "../../services/haulersService";
import { useNavigate } from "react-router-dom";

export const HaulingShips = () => {
  const [allHaulers, setAllHaulers] = useState([]);

    const navigate = useNavigate()

  useEffect(() => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  }, []);

  return (
    <>
      <div className="haulers-list-container flex flex-col bg-slate-800 text-white mx-auto w-[400px]">
        <h2 className="haulers-list-header text-4xl text-center p-10 underline">Haulers List</h2>
        <ul>
          {allHaulers.map((hauler) => {
            return (
                <div className="hauler-container flex justify-between p-5" key={hauler.id}>
                    <div className="flex" key={hauler.id}>{hauler.name}</div>
                    <button className="btn-edit flex bg-blue-500 text-white font-bold py-2 px-4 rounded self-center justify-center"
                    onClick={() => {
                        navigate(`/haulingships/${hauler.id}/edit`)
                    }}>Edit Hauler?</button>
                </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};