import './style.scss'
import Weather from './components/weather';
import Greeting from './components/greeting';

// HTML Elements for weather block
const weatherInput = document.querySelector('.weather__input') as HTMLInputElement;
const weatherImg = document.querySelector('.weather__img') as HTMLImageElement;
const weatherTemp = document.querySelector('.weather__temp') as HTMLElement;
const weatherWind = document.querySelector('.weather__wind') as HTMLElement;
const weatherHumidity = document.querySelector('.weather__humidity') as HTMLElement;
const weatherdescription = document.querySelector('.weather__description') as HTMLElement;
// Class for starting Weather 
const weather = new Weather(weatherInput,weatherdescription,weatherImg,weatherTemp,weatherWind,weatherHumidity);
// 

// HTML ELEments for Time,Day,Greeting (main)
const time = document.querySelector('.time') as HTMLElement;
const day = document.querySelector('.day') as HTMLElement;
const greeting = document.querySelector('.greeting') as HTMLElement;
const greetingInput = document.querySelector('.subblock__input') as HTMLInputElement;

const myGreeting = new Greeting(time,day,greeting,greetingInput)