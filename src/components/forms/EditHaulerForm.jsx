import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editHauler, getHaulerById } from "../../services/haulersService";
import { getAllDocks } from "../../services/docksService";

export const EditHaulerForm = () => {
  const [hauler, setHauler] = useState({});
  const [docks, setDocks] = useState([]);

  const { haulerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAllDocks().then((docksArray) => {
      setDocks(docksArray);
    });
  }, [haulerId]);

  useEffect(() => {
    getHaulerById(haulerId).then((haulerObj) => {
      setHauler(haulerObj);
    });
  }, [haulerId]);

  const handleUpdateClick = (event) => {
    event.preventDefault();

    const updatedHauler = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };
    console.log(updatedHauler);

    editHauler(updatedHauler).then(() => {
      navigate(`/haulingships`);
    });
  };

  return (
    <>
      <div className="edit-form-container flex flex-col self-center items-center bg-slate-900 text-white space p-10">
        <h2 className="edit-hauler-header flex text-4xl">Edit Hauler Form</h2>
        <form className="edit-hauler-form flex flex-col items-center p-10">
          <fieldset>
            <div className="form-group space-x-5 ">
              <label>Hauler Name</label>
              <input
                value={hauler.name ? hauler.name : ""}
                name="name"
                type="text"
                required
                className="form-control text-black"
                placeholder="Hauler Name"
                onChange={(event) => {
                  const haulerCopy = { ...hauler };
                  haulerCopy.name = event.target.value;
                  setHauler(haulerCopy);
                }}
              />
            </div>
          </fieldset>
          <fieldset className="field-container">
            <div className="form-group p-5 space-x-5">
              <label>Dock</label>
              <select
                name="dockId"
                value={hauler.dock_id || 0}
                className="form-control text-black"
                onChange={(event) => {
                  const haulerCopy = { ...hauler };
                  haulerCopy.dock_id = parseInt(event.target.value);
                  setHauler(haulerCopy);
                }}
              >
                <option value={0}>Please select a dock</option>
                {docks.map((dockObj) => {
                  return (
                    <option key={dockObj.id} value={dockObj.id}>
                      {dockObj.location}
                    </option>
                  );
                })}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="edit-btn flex bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleUpdateClick}>
                Update
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

// onClick={handleUpdateClick}
