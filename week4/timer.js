let intervalId = null;
let remaining = 0;

const display = document.getElementById('display');
const input = document.getElementById('seconds');

// 시작 버튼
const start = () => {
  if (intervalId) return; // 이미 실행 중이면 무시
  remaining = parseInt(input.value, 10);

  if (isNaN(remaining) || remaining <= 0) {
    alert('양의 정수를 입력하세요.');
    return;
  }

  display.textContent = remaining + '초 남음';

  // ✅ 여기에 setInterval을 사용해 카운트다운 로직 구현
  intervalId = setInterval(() => {
    remaining--;
  // 1초마다 remaining을 1씩 줄이고 화면에 표시
  // remaining이 0 이하가 되면 clearInterval로 종료하고 "시간 종료!" 표시
    if (remaining <= 0) {
      clearInterval(intervalId); // 0 이하에 타이머 종료
      intervalId = null; // 초기화
      display.textContent = '시간 종료!';
    } else {
      display.textContent = remaining + '초 남음';
    }
  }, 1000);
};

// 일시정지 버튼
const pause = () => {
  // ✅ clearInterval을 이용해 멈추는 기능을 구현
  // 멈춘 시점의 남은 시간을 화면에 표시
  clearInterval(intervalId);
  intervalId = null;
  
  if (remaining > 0) {
    display.textContent = remaining + '초 남음 (일시정지)';
  }
};

// 재개 버튼
const resume = () => {
  // ✅ pause로 멈춘 상태에서 다시 setInterval을 실행해 이어서 카운트다운
  if (intervalId || remaining <= 0) return; 

  intervalId = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      display.textContent = '시간 종료!';
    } else {
      display.textContent = remaining + '초 남음';
    }
  }, 1000);
  
};

// 초기화 버튼
const reset = () => {
  clearInterval(intervalId);
  intervalId = null;
  remaining = 0;
  display.textContent = '대기 중';
  input.value = '';
};

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('resume').addEventListener('click', resume);
document.getElementById('reset').addEventListener('click', reset);
