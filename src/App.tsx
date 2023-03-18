import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Error from "./views/Error";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
