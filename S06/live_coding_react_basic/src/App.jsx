import React, { lazy, Suspense, useEffect, useState } from "react";
import Imput from "./components/Imput";
// import Button from "./components/Button";
const Button = lazy(() => import("./components/Button"));
// const Imput = lazy(() => import("./components/Imput"));
export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://api.blablagues.net/?rub=blagues");
        const dataJson = await data.json();
        setData(dataJson);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    getData();
  }, []);
  console.log("data :>> ", data);

  return (
    <Suspense fallback={<div>chargement ...</div>}>
      {count < 5 ? <Button count={count} setCount={setCount} /> : <Imput />}
    </Suspense>
  );
}
