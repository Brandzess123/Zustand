import React, { useEffect, useState } from "react";
import useBearStore from "../../component/store";

// ... (store creation code)

export function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

export function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

const ListPage = () => {
  useEffect(() => {
    const test = 100;
  });

  return (
    <div>
      <BearCounter />
      <Controls />
      <h1>giá trị test là: {useBearStore((state) => state.test)}</h1>
    </div>
  );
};

export default ListPage;
