import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./components/navigation/NavBar";
import { Homepage } from "./components/views/Homepage"
import { ShippingShipsList } from "./components/views/ShippingShipsPage";
import { HaulingShips } from "./components/views/HaulingShips";
import { EditHaulerForm } from "./components/forms/EditHaulerForm"
import { DocksPage } from "./components/views/DocksPage";


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
            <Route path="docks" element={<DocksPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
