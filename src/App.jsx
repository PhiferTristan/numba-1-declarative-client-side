import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./components/navigation/NavBar";
import { Homepage } from "./components/Homepage";
import { DocksList } from "./components/lists/DocksList";
import { ShippingShipsList } from "./components/ShippingShips";
import { HaulingShips } from "./components/HaulingShips";
import { EditHaulerForm } from "./components/forms/EditHaulerForm";

export default function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-gray-800">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Outlet />
              </>
            }
          >
            <Route path="home" element={<Homepage />} />
            <Route path="shippingships" element={<ShippingShipsList />} />
            <Route path="haulingships" >
              <Route index element={<HaulingShips />} />
              <Route path=":haulerId/edit" element={<EditHaulerForm />} />
            </Route>
            <Route path="docks" element={<DocksList />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
