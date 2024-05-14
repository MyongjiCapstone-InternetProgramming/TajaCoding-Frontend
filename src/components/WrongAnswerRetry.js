import { useState, useRef } from 'react';
import WrongAnswerRetryStatusBar from './WrongAnswerRetryStatusBar';

export default function WrongAnswerRetry() {
  return (
    <div
      style={{
        width: '30%',
        height: '50%',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <WrongAnswerRetryStatusBar />
      {/* 상태바 */}
      {
        <div
          style={{
            backgroundColor: 'yellow',
            height: '100%',
            color: 'black',
            textAlign: 'center',
          }}
        >
          <p>모달 구현부분</p>
        </div>
      }
    </div>
  );
}
