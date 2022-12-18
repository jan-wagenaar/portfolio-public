// get DOM elements
const instructionsOpen = document.getElementById('instructions-open');
const instructionsWrapper = document.getElementById('instructions-wrapper');
const instructionsClose = document.getElementById('instructions-close');
const wireImage1 = document.getElementById('wire1');
const wireImage2 = document.getElementById('wire2');
const wireImage3 = document.getElementById('wire3');
const explosionObj = document.getElementById('explosion');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const timer = document.getElementById('timer-text');
const currentStreakObj = document.getElementById('score-winning');
const bestStreakObj = document.getElementById('score-best');

// define Bomb
let numWires = 3;
const wire1 = {
  isBomb: false,
  isClicked: false
};

const wire2 = {
  isBomb: false,
  isClicked: false
};

const wire3 = {
  isBomb: false,
  isClicked: false
};


// define Timer
function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
  this.stopped = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  let start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    if(!that.stopped) {
      diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
    } else {
      that.running = false;
    }
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
  };

CountDownTimer.prototype.stop = function() {
    this.stopped = true;
};

CountDownTimer.prototype.restart = function() {
  this.stopped = false;
  this.start();
}

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};

function format(minutes, seconds) {
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timer.innerHTML = `<text x='180' y='237' class='clock__text'> ${minutes}:${seconds}</text>`;
}

function clockExpired() {
  if(this.expired()) {
    gameOver();
  }
}


// Create timer instance
const timerCount = new CountDownTimer(30),
    timeObj = CountDownTimer.parse(30);

format(timeObj.minutes, timeObj.seconds);

timerCount.onTick(format).onTick(clockExpired);
  

//Define gaming mechanics
let currentlyPlaying = true;
let currentStreak = 0;
let bestStreak = 0;

const randomWireGenerator = () => {
  const bombWire = Math.floor(Math.random() * numWires);

  if(bombWire === 0) {
    wire1.isBomb = true;
    wire2.isBomb = false;
    wire3.isBomb = false;
  } else if(bombWire === 1) {
    wire1.isBomb = false;
    wire2.isBomb = true;
    wire3.isBomb = false;
  } else {
    wire1.isBomb = false;
    wire2.isBomb = false;
    wire3.isBomb = true;
  }
}

const playWire = wire => {
  numWires -= 1;
  if(numWires === 0) {
    gameOver('win');
  } else if(wire.isBomb) {
    gameOver();
  }
}

const updateStreak = (status) => {
  if(status ==='win') {
    currentStreak += 1;
    currentStreakObj.innerHTML = currentStreak;
    if(currentStreak > bestStreak) {
      bestStreak = currentStreak;
      bestStreakObj.innerHTML = bestStreak;
    }
  } else {
    currentStreak = 0;
    currentStreakObj.innerHTML = currentStreak;
  }
}

const startRound = () => {
  wireImage1.isBomb = false;
  wireImage1.isClicked = false;
  wireImage1.style.visibility = 'visible';
  wireImage2.isBomb = false;
  wireImage2.isClicked = false;
  wireImage2.style.visibility = 'visible';
  wireImage3.isBomb = false;
  wireImage3.isClicked = false;
  wireImage3.style.visibility = 'visible';
  explosionObj.classList.remove('open');
  numWires = 3;
  startButton.classList.add('game__inactive');
  startButton.classList.remove('game__accent');
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomWireGenerator(); 
  timerCount.restart();
}


// eventListeners

instructionsOpen.onclick = () => {
  instructionsWrapper.classList.add('open');
  timerCount.stop();
}

instructionsClose.onclick = () => {
  instructionsWrapper.classList.remove('open');
  startRound();
}

wireImage1.onclick = () => {
  if(!wire1.isClicked && currentlyPlaying) {
    wireImage1.style.visibility = 'hidden';
    playWire(wire1);
  }
};

wireImage2.onclick = () => {
  if(!wire2.isClicked && currentlyPlaying) {
    wireImage2.style.visibility = 'hidden';
    playWire(wire2);
  }
};

wireImage3.onclick = () => {
  if(!wire2.isClicked && currentlyPlaying) {
    wireImage3.style.visibility = 'hidden';
    playWire(wire3);
  }
};

startButton.onclick = () => {
  if(!currentlyPlaying) {
    startRound();
  } else {
    timerCount.stop();
  }
}

resetButton.onclick = () => {
    startRound();
}

// Game mechanics part 2

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    timerCount.stop();
    startButton.classList.add('game__accent');
    startButton.classList.remove('game__inactive');
    updateStreak('win');
  } else {
    triggerExplosion();
    timerCount.stop();
    updateStreak();
  }
  currentlyPlaying = false;
}

const triggerExplosion = () => {
  explosionObj.classList.add('open');
}
startRound();