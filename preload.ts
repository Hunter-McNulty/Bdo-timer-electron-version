type TimerStates = 'on' | 'off';
let timerIsOn: TimerStates = 'off';
let seconds = 0;
let tens: number = 0;
let minutes: number = 0;

let timer: HTMLElement = document.getElementById('timer')!;
let element: HTMLElement = document.getElementById('zcontainer')!;
let child: HTMLCollection = element.children;