import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form/Form";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Product from "./components/product/Product";
// import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<ErrorBoundary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
