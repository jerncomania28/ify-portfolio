import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Home from "./views/Home";
import Moboclinic from "./views/Moboclinic";
import Error from "./views/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="mobiclinic" element={<Moboclinic />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
