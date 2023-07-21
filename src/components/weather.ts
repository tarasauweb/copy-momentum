class Weather {
  input:HTMLInputElement;
  imgWeather:HTMLImageElement;
  divTemperature:HTMLElement;
  divWind:HTMLElement;
  divHumidity:HTMLElement;
  city : string;
  constructor (input:HTMLInputElement,imgWeather:HTMLImageElement,divTemperature:HTMLElement,divWind:HTMLElement,divHumidity:HTMLElement) {
    this.input = input;
    this.imgWeather = imgWeather;
    this.divTemperature = divTemperature;
    this.divWind = divWind;
    this.divHumidity = divHumidity
    this.city = ''
    this.handlerInput()
  }
  private handlerInput ():void {
    this.city === '' ? this.getWeather(this.input.value) : this.getWeather(this.city)
    this.input.addEventListener('change' , ()=>{
      this.getWeather(this.input.value)
    })
  }
  private async getWeather (value:string) {
    const urlWather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=ru&appid=0a150ef70c52f948a15ad635e3700be9&units=metric`;
    const response = await fetch(urlWather);
    const data = await response.json()
    console.log(urlWather)
  }
}

export default Weather