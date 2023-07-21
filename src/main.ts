import './style.scss'
import Weather from './components/weather'


const weatherInput = document.querySelector('.weather__input') as HTMLInputElement;
const weatherImg = document.querySelector('.weather__img') as HTMLImageElement;
const weatherTemp = document.querySelector('.weather__temp') as HTMLElement;
const weatherWind = document.querySelector('.weather__wind') as HTMLElement;
const weatherHumidity = document.querySelector('.weather__humidity') as HTMLElement;


const weather = new Weather(weatherInput,weatherImg,weatherTemp,weatherWind,weatherHumidity);