class Weather {
  input:HTMLInputElement;
  imgWeather:HTMLImageElement;
  divTemperature:HTMLElement;
  divWind:HTMLElement;
  divHumidity:HTMLElement;
  weatherdescription:HTMLElement;
  city : string ;
  constructor (input:HTMLInputElement,weatherdescription:HTMLElement,imgWeather:HTMLImageElement,divTemperature:HTMLElement,divWind:HTMLElement,divHumidity:HTMLElement) {
    this.input = input;
    this.imgWeather = imgWeather;
    this.divTemperature = divTemperature;
    this.divWind = divWind;
    this.divHumidity = divHumidity;
    this.weatherdescription = weatherdescription
    this.city = '';
    this.handlerInput();
  }
  private handlerInput ():void {
    this.city === '' ? this.getWeather(this.input.value) : this.getWeather(this.city)
    this.input.addEventListener('change' , ()=>{
      this.city = this.input.value
      this.getWeather(this.city)
    })
  }
  private async getWeather (value:string) {
    const urlWather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=ru&appid=0a150ef70c52f948a15ad635e3700be9&units=metric`;
    try{
      const response = await fetch(urlWather);
      const data = await response.json();
      this.imgWeather.classList.add(`owf-${data.weather[0].id}`);
      this.imgWeather.style.display = 'block';
      this.weatherdescription.textContent = `${data.weather[0].main}`
      this.divTemperature.textContent = `Temperature: ${Math.floor(data.main.temp)}°C`;
      this.divWind.textContent = `Wind speed: ${data.wind.speed} m/s`;
      this.divHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
    catch(err){
      this.imgWeather.style.display = 'none';
      this.weatherdescription.textContent = `City not found`
      this.divTemperature.textContent = `Temperature`;
      this.divWind.textContent = `Wind speed:`;
      this.divHumidity.textContent = `Humidity:`;
      return err
    }
  }
}

export default Weather