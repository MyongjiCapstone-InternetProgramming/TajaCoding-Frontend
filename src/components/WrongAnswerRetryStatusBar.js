
import { VscChromeClose } from 'react-icons/vsc';
import '../css/StatusBar.css';

export default function WrongAnswerRetryStatusBar({ onClose }) {
  return (
    <div className='status-bar'>
      <p>오답노트</p>
      <div className="status-bar-button">
        <button onClick={onClose}>
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
}
