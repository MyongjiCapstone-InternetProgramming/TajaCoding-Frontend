// 담당자 : 정준
// 개념퀴즈 시작 누르면 여기로 이동

import { useParams } from 'react-router-dom';

export default function WordQuizStart() {
  const { selectedOption } = useParams();

  return (
    <div>
      <h1>Word Quiz Start</h1>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}
