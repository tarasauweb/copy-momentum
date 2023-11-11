import TypeApiSlider from "./typesApiSlider";
import frameViddeoFone from "./video";
class Slider {
  btnPrev: HTMLElement;
  btnNext: HTMLElement;
  body: HTMLElement;
  menuBackGround:HTMLElement;
  api: object;
  timeOfDay:string;
  arrayImage : Array<string>;
  activeVideoFone:boolean;
  constructor(
    btnPrev: HTMLElement,
    btnNext: HTMLElement,
    body: HTMLElement,
    api: object,
    menuBackGround:HTMLElement,
  ) {
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    this.api = api;
    this.body = body;
    this.timeOfDay = '';
    this.arrayImage = [];
    this.menuBackGround = menuBackGround;
    this.activeVideoFone = false;
    this.setBackground('flickr');
    this.listenerMenu ();
  }
  private getTimeOfDay() : string {
    const date = new Date();
    let timeOfDay = '';
    if (date.getHours() > 5 && date.getHours() < 12) {
        timeOfDay = `morning`;
    }
    if (date.getHours() > 11 && date.getHours() < 18) {
        timeOfDay = `afternoon`;
    }
    if (date.getHours() > 17 && date.getHours() < 24) {
        timeOfDay =`evening`;
    }
    if (date.getHours() >= 0 && date.getHours() < 6) {
        timeOfDay =`night`;
    }
    return timeOfDay;
  }
  private listenerMenu () {
    this.menuBackGround.addEventListener('click' , (e)=>{
      const api = (e.target as HTMLElement).textContent?.trim() as TypeApiSlider;
      this.setBackground(api);
    })
  }
  private getVideoFone () : Array<string>{
    this.activeVideoFone = true;
    this.arrayImage = Object.values(frameViddeoFone);
    this.body.style.backgroundColor = `rgb(41, 36, 36)`;
    return this.arrayImage;
  }
  private setBackground (apiSlider:TypeApiSlider) {
    this.clearArrayImage(this.arrayImage);
    apiSlider === 'flickr' ? this.listenerSlider(this.getFlickrApi()) : apiSlider === 'unsplash' ? this.listenerSlider(this.getUnspleshApi()) : apiSlider === 'animation' ? this.listenerSlider(this.getVideoFone ()) : false ;
  }
  private listenerSlider (data : Array<string>) {
    this.removeVideo ();
    let numberSlide = 0;
    if(this.activeVideoFone) {
      this.body.insertAdjacentHTML('afterbegin' , this.arrayImage[numberSlide])
    }
    this.btnPrev.addEventListener('click' , ()=>{
      this.removeVideo();
      --numberSlide;
      if(numberSlide <= 0) {
        numberSlide = data.length-1;
      }
      if(this.activeVideoFone) {
        if(this.arrayImage[numberSlide]){
          this.body.insertAdjacentHTML('afterbegin' , this.arrayImage[numberSlide])
        }
        
      }
      else{
        this.body.style.background = this.returnUrlSlider(data[numberSlide]);
      }
    })
    this.btnNext.addEventListener('click' , ()=>{
      this.removeVideo();
      ++numberSlide;
      if(numberSlide >= data.length) {
        numberSlide = 0;
      }
      if(this.activeVideoFone) {
        
        this.body.insertAdjacentHTML('afterbegin' , this.arrayImage[numberSlide])
      }
      else{
        this.body.style.background = this.returnUrlSlider(data[numberSlide]);
      }
    })
  }
  private removeVideo () {
    const videoHTML = document.querySelector('.video-fone') as HTMLElement;
      if(videoHTML){
        videoHTML.remove();
    }
  }
  private getFlickrApi () : Array<string> {
    this.activeVideoFone = false;
    this.timeOfDay = this.getTimeOfDay();
    const getUrl = (this.api as any).flickr[`${this.timeOfDay}`];
    async function flickr () {
      const data = await fetch(getUrl);
      const response = await data.json();
      return response;
    }
    flickr().then(response=>{
      response.photos.photo.find((element : any) => {
        if(element.url_h){
            this.arrayImage.push(element.url_h);
        }
      });
      this.body.style.background = this.returnUrlSlider(this.arrayImage[0]);
      return this.arrayImage;
    })
    return this.arrayImage;
  }
  private getUnspleshApi () : Array<string> {
    this.activeVideoFone = false;
    this.timeOfDay = this.getTimeOfDay();
    const getUrl = (this.api as any).unsplash[`${this.timeOfDay}`];
    async function unsplash () {
      const data = await fetch(getUrl);
      const response = await data.json();
      return response; 
    }
    unsplash().then(response=>{
      response.forEach((element : any) => {
        this.arrayImage.push(element.urls.regular)
      });
      this.body.style.background = this.returnUrlSlider(this.arrayImage[0]);
      return this.arrayImage;
    })
    return this.arrayImage;
  }
  private clearArrayImage (array:Array<string>) : Array<string> {
    if(array.length !== 0) {
      array.splice(0,array.length);
    }
    return array;
  }
  private returnUrlSlider (linkImg : string) : string {
    return `url(${linkImg}) no-repeat center center /cover`;
  }
}

export default Slider;

