import { useRef } from "react";
import "./App.css";

function App() {
  const isInThrottle = useRef(false); // 스로틀링 상태를 추적하기 위한 ref
  const scoreRef = useRef(0); // 스코어를 저장하는 ref
  const inputRef = useRef(null); // input 요소를 참조하는 ref

  const increaseScoreDuringTyping = () => {
    if (isInThrottle.current) return; // 스로틀링 중일 때는 함수 실행을 막음

    isInThrottle.current = true; // 스로틀링 시작

    // 스코어 증가 및 타이머 설정
    setTimeout(() => {
      const i = inputRef.current.value;
      console.log(`Current: ${i}`);
      isInThrottle.current = false; // 스로틀링 해제
    }, 1000); // 1초 동안 스로틀링 적용
  };

  return (
    <div>
      <h1>Throttle</h1>
      <input
        type="text"
        ref={inputRef} // input 요소 참조
        onChange={increaseScoreDuringTyping} // 스로틀링 적용된 이벤트 핸들러 설정
      />
      <p>Score: {scoreRef.current}</p> {/* 실시간 업데이트는 되지 않음 */}
    </div>
  );
}

export default App;