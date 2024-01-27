import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import Balance from "../Balance/Balance"
import Dashboard from "../Dashboard/Dashboard";
import Deposit from "../Deposit/Deposit";
import Withdrawer  from "../Withdrawer/Withdrawer";
import Example from "../Components/Example";
import Hooks from "../Components/Hooks";
import Sample from '../Pages/Sample'
const Router = ({greetings}) => {
return (
  <BrowserRouter className="browser">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/sample" element={<Sample />} />
      {/* <Route path="/crypto" element={<CryptoComponent />} /> */}
      <Route path="/balance" element={<Balance greetings={greetings} />} />
      <Route path="/example" element={<Example greetings={greetings} />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/withdrawer" element={<Withdrawer />} />
      <Route path="*" element={<Navigate to="/notfound" />} />
      <Route path="/notfound" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
};

export default Router;
