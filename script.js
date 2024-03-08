// Elevator constants
const FLOOR_HEIGHT = 100;
const FLOOR_TRANSITION_TIME = {
  1: 5000, // 5 seconds
  2: 10000, // 10 seconds
};

let currentLevel = 0;
let requestedLevel = null;

function requestUp(level) {
  if (level === 0 && requestedLevel === null) {
    
    requestedLevel = level;
    moveElevator();
  }
}

function requestDown(level) {
  if (level === 2 && requestedLevel === null) {
    requestedLevel = level;
    moveElevator();
  }
}

function moveElevator() {
  if (requestedLevel !== null && requestedLevel !== currentLevel) {
    const targetLevel = requestedLevel;
    const duration =
      FLOOR_TRANSITION_TIME[Math.abs(targetLevel - currentLevel)];

    setTimeout(() => {
      const elevatorElement = document.querySelector(".elevator");
      elevatorElement.style.top = targetLevel * FLOOR_HEIGHT + "px";
      currentLevel = targetLevel;
      requestedLevel = null; 

     
      if (currentLevel === 1 && (targetLevel === 0 || targetLevel === 2)) {
        console.log(`Elevator skipped Level 1`);
      } else {
        console.log(`Elevator reached Level ${targetLevel}`);
      }
    }, duration);
  }
}
