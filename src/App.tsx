import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from './components/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
