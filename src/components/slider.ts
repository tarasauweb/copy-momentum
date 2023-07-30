import { resolve } from "../../webpack.config";

class Slider {
  btnPrev: HTMLElement;
  btnNext: HTMLElement;
  body: HTMLElement;
  api: object;
  numberSlide:number;
  timeOfDay:string;
  arrayImage : Array<string>;
  constructor(
    btnPrev: HTMLElement,
    btnNext: HTMLElement,
    body: HTMLElement,
    api: object,
    
  ) {
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    this.api = api;
    this.body = body;
    this.numberSlide = 0;
    this.timeOfDay = '';
    this.arrayImage = [];
    this.setBackGroundBodyFlickrApi ();
    // this.setBackGroundBodyUnspleshApi();
    // this.setBackGroundBodyGitHubApi();
    // this.listenerSlider(this.setBackGroundBodyUnspleshApi());
    // this.listenerSlider(this.setBackGroundBodyFlickrApi());
    this.listenerSlider(this.setBackGroundBodyGitHubApi());
  }
  private getTimeOfDay():string {
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
    return timeOfDay
  }
  private async setBackGroundBodyFlickrApi ():Promise<Array<string>> {
    this.timeOfDay = this.getTimeOfDay();
    const getUrl = (this.api as any).flickr[`${this.timeOfDay}`];
    const data = await fetch(getUrl);
    const response = await data.json();
    response.photos.photo.find((element:any) => {
        if(element.url_h){
            this.arrayImage.push(element.url_h);
        }
    });
    return this.arrayImage
  }
  private listenerSlider (data:Promise<Array<string>> | Promise<string>) {

    data.then((res)=>{
      console.log(res)
      // this.btnPrev.addEventListener('click' , ()=>{
      //   --this.numberSlide;
      //   if(this.numberSlide <= 0) {
      //     this.numberSlide = res.length-1;
      //   }
      //   this.body.style.background = this.returnUrlSlider(res[this.numberSlide]);
      // })
      // this.btnNext.addEventListener('click' , ()=>{
      //   ++this.numberSlide;
      //   if(this.numberSlide >= res.length) {
      //     this.numberSlide = 0;
      //   }
      //   this.body.style.background = this.returnUrlSlider(res[this.numberSlide]);
      // })
      // this.body.style.background = this.returnUrlSlider(res[this.numberSlide]);
    })
    
  }
  private setBackGroundBodyGitHubApi () : Promise<string> {
    this.timeOfDay = this.getTimeOfDay();
    return Promise.resolve((this.api as any).gitHub[`${this.timeOfDay}`])
    
  }

  private async setBackGroundBodyUnspleshApi () : Promise<Array<string>> {
    this.timeOfDay = this.getTimeOfDay();
    const data = await fetch((this.api as any).unsplash[`${this.timeOfDay}`]);
    const response = await data.json();
    response.forEach((element : any) => {
      this.arrayImage.push(element.urls.regular)
    });
    return this.arrayImage
  }

  private returnUrlSlider (linkImg:string) : string {
    return `url(${linkImg}) no-repeat center center /cover`;
  }
}

export default Slider;
