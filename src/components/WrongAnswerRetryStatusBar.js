import { VscChromeClose } from 'react-icons/vsc';
import '../css/StatusBar.css';

const WrongAnswerRetryStatusBar = (props) => {
  const title = props.title;
  const onclose = props.onClose;
  return (
    <div className='status-bar'>
      <p style={{fontSize:'20px'}}>{title}</p>
      <div className="status-bar-button">
        <button onClick={onclose}>
          <VscChromeClose />
        </button>
      </div>
    </div>
  );
}

export default WrongAnswerRetryStatusBar;