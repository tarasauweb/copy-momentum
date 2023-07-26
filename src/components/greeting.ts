import days from './days';
import month from './month';
class Greeting {
  divTime:HTMLElement;
  divDay:HTMLElement;
  divGreet:HTMLElement;
  greetingInput:HTMLInputElement;
  constructor (divTime:HTMLElement,divDay:HTMLElement,divGreet:HTMLElement,greetingInput:HTMLInputElement) {
    this.divTime = divTime;
    this.divDay = divDay;
    this.divGreet = divGreet;
    this.greetingInput = greetingInput;
    this.getTime();
    this.setName ();
  }
  private getTime () {
    const date = new Date();
    const timer = setInterval(()=>{
      this.divTime.textContent = new Date().toLocaleTimeString();
    },1000)
    this.divDay.textContent = `${days[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;
    if(date.getHours() > 5 && date.getHours() < 12){
      this.divGreet.textContent = `Good morning,`;
    }
    if(date.getHours() > 11 && date.getHours() < 18) {
      this.divGreet.textContent = `Good afternoon,`;
    }
    if(date.getHours() > 18 && date.getHours() < 24 ) {
      this.divGreet.textContent = `Good evening,`;
    }
    if(date.getHours() >= 0 && date.getHours() < 6) {
      this.divGreet.textContent = `Good night,`;
    }
  }
  private setName () {
    this.greetingInput.addEventListener('change' , ()=>{
      localStorage.setItem('name' , this.greetingInput.value);
      this.greetingInput.value = localStorage.getItem('name') || '';
    })
    localStorage.getItem('name') !==null ? this.greetingInput.value = localStorage.getItem('name') || '' : this.greetingInput.value
  }
}


export default Greeting