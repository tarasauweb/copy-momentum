import TypeApiSlider from "./typesApiSlider";
class Slider {
  btnPrev: HTMLElement;
  btnNext: HTMLElement;
  body: HTMLElement;
  menuBackGround:HTMLElement;
  api: object;
  numberSlide:number;
  timeOfDay:string;
  arrayImage : Array<string>;
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
    this.numberSlide = 0;
    this.timeOfDay = '';
    this.arrayImage = [];
    this.menuBackGround = menuBackGround;
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
  private setBackground (apiSlider:TypeApiSlider) {
    this.numberSlide = 0;
    apiSlider === 'flickr' ? this.listenerSlider(this.getFlickrApi()) : apiSlider === 'unsplash' ? this.listenerSlider(this.getUnspleshApi()) : false;
    
  }
  private async getFlickrApi () : Promise<Array<string>> {
    this.clearArrayImage(this.arrayImage);
    console.log(this.arrayImage)
    this.timeOfDay = this.getTimeOfDay();
    const getUrl = (this.api as any).flickr[`${this.timeOfDay}`];
    const data = await fetch(getUrl);
    const response = await data.json();
    response.photos.photo.find((element : any) => {
        if(element.url_h){
            this.arrayImage.push(element.url_h);
        }
    });
    this.body.style.background = this.returnUrlSlider(this.arrayImage[this.numberSlide]);
    return this.arrayImage;
  }
  private async listenerSlider (data : Promise<Array<string>>) {
    data.then((res)=>{
      this.btnPrev.addEventListener('click' , ()=>{
        --this.numberSlide;
        if(this.numberSlide <= 0) {
          this.numberSlide = res.length-1;
        }
        return this.body.style.background = this.returnUrlSlider(res[this.numberSlide]);
      })
      this.btnNext.addEventListener('click' , ()=>{
        ++this.numberSlide;
        if(this.numberSlide >= res.length) {
          this.numberSlide = 0;
        }
        return this.body.style.background = this.returnUrlSlider(res[this.numberSlide]);
      })
      
    })
    
  }
  private async getUnspleshApi () : Promise<Array<string>> {
    this.clearArrayImage(this.arrayImage);
    console.log(this.arrayImage)
    this.timeOfDay = this.getTimeOfDay();
    const data = await fetch((this.api as any).unsplash[`${this.timeOfDay}`]);
    const response = await data.json();
    response.forEach((element : any) => {
      this.arrayImage.push(element.urls.regular)
    });
     this.body.style.background = this.returnUrlSlider(this.arrayImage[this.numberSlide]);
    return this.arrayImage
  }
  private clearArrayImage (array:Array<string>) : Array<string> {
    if(array.length !== 0) {
      array.splice(0,array.length)
    }
    return array;
  }
  private returnUrlSlider (linkImg : string) : string {
    return `url(${linkImg}) no-repeat center center /cover`;
  }
}

export default Slider;
