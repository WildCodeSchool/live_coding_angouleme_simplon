export default function Button({ count, setCount }) {
  const increment = () => setCount(count + 1);
  const decrement = () => (count <= 0 ? setCount(0) : setCount(count - 1));
  console.log("count :>> ", count);
  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
}
