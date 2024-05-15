import { VscChromeClose } from 'react-icons/vsc';
import '../css/StatusBar.css';
import WrongAnswer from './WrongAnswer';

export default function WrongAnswerRetryStatusBar({ onClose }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <p>오답노트</p>
      <button onClick={onClose}>
        <VscChromeClose />
      </button>
      {/* X버튼 누르면 이전 페이지로 이동 */}
    </div>
  );
}
