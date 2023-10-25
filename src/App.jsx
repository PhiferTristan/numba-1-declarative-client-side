import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import { Ships } from "./components/Ships";
import { Haulers } from "./components/Haulers";
import { Docks } from "./components/Docks";

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
            <Route path="shippingships" element={<Ships />} />
            <Route path="haulingships" element={<Haulers />} />
            <Route path="docks" element={<Docks />} />
            <Route path="home" element={<Homepage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
