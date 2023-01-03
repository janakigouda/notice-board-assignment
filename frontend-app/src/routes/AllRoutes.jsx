import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Notices } from "../components/Notices";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </>
  );
};
