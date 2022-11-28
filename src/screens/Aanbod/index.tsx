import { Route, Routes } from "react-router-dom";
import { Detail } from "./screens/Detail";
import { Overview } from "./screens/Overview";

export const Aanbod = () => {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path=":postslug" element={<Detail />} />
    </Routes>
  );
};
