import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../src/Context/UserContext";
import Home from "./Pages/Home";
import PageCrypto from "./Pages/PageCrypto";
import Welcome from "./Pages/Welcome";

const Application = styled.div`
  height: 100vh;
  width: 100%;
`;

function App() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  });

  const submit = (name, price, image) => {
    setValue([{ text: name, tarif: price, img: image }]);
  };
  return (
    <UserContext.Provider value={{ data, modal, setModal, value, submit }}>
      <Application>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/pageCrypto" element={<PageCrypto />} />
        </Routes>
      </Application>
    </UserContext.Provider>
  );
}

export default App;
