import useStore from './useStore'; // 스토어 파일 임포트

function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
