import './style.scss';
import { apiObjects } from './components/api-slider';
import Weather from './components/weather';
import Greeting from './components/greeting';
import Slider from './components/slider';
import Settings from './components/settings';
import Quotes from './components/quotes';
import Todo from './components/todo';
import CloseWidget from './components/close_widget';
// HTML Elements for weather block
const weatherInput = document.querySelector('.weather__input') as HTMLInputElement;
const weatherImg = document.querySelector('.weather__img') as HTMLImageElement;
const weatherTemp = document.querySelector('.weather__temp') as HTMLElement;
const weatherWind = document.querySelector('.weather__wind') as HTMLElement;
const weatherHumidity = document.querySelector('.weather__humidity') as HTMLElement;
const weatherdescription = document.querySelector('.weather__description') as HTMLElement;

// Settings 
const footerWrapp = document.querySelector('.footer .container .wrapp') as HTMLElement;
const settings = new Settings(footerWrapp);

// Class for starting Weather 
const weather = new Weather(weatherInput,weatherdescription,weatherImg,weatherTemp,weatherWind,weatherHumidity);
// 

// HTML ELEments for Time,Day,Greeting (main)
const time = document.querySelector('.time') as HTMLElement;
const day = document.querySelector('.date') as HTMLElement;
const greetingSubblock = document.querySelector('.greeting__subblock') as HTMLElement;
const greetingInput = document.querySelector('.greeting__input') as HTMLInputElement;
const myGreeting = new Greeting(time,day,greetingSubblock,greetingInput)
// 

// HTML Elements for Slider
const body = document.body as HTMLEmbedElement;
const btnPrev = document.querySelector('.slider__prev') as HTMLElement;
const btnNext = document.querySelector('.slider__next') as HTMLElement;
const menuBackGround = document.querySelector('.menu__submenu_background') as HTMLElement ; 
const slider = new Slider(btnPrev,btnNext,body,apiObjects,menuBackGround);


// 


const quotes = new Quotes(footerWrapp);
const todo = new Todo(footerWrapp);


// 

const widgetSettigs = settings.returnWidget() as HTMLElement;
const widgetWeather = weather.returnWidget() as HTMLElement;
const widgetTodo = todo.returnWidget() as HTMLElement;
const widgetQuotes = quotes.returnWidget() as HTMLElement;
const widgetGreeting = document.querySelector('.greeting') as HTMLElement;
const menuCLoseWidget = document.querySelector('.menu__submenu_close') as HTMLElement;
const widgetSlider = document.querySelector('.slider') as HTMLElement;
const widgets: HTMLElement[] = [widgetWeather,widgetTodo,widgetSettigs,time,day,widgetGreeting,widgetQuotes,widgetSlider];
const closeWidgets = new CloseWidget (widgets,menuCLoseWidget)

