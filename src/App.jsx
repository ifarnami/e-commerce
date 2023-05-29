import { Routes, Route } from "react-router-dom";

import Home from "./Components/routes/home/home";
import Navigation from "./Components/routes/navigation/Navigation";
import SignIn from "./Components/routes/sign-in/SignIn";

const Shop = () => {
  return <h1>I am the Shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
