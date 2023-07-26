class Slider {
  btnPrev: HTMLElement;
  btnNext: HTMLElement;
  body: HTMLElement;
  api: object;
  numberSlide:number;
  constructor(
    btnPrev: HTMLElement,
    btnNext: HTMLElement,
    body: HTMLElement,
    api: object
  ) {
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    this.api = api;
    this.body = body;
    this.numberSlide = 0;
    this.setBackGroundBodyFlickrApi ()
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
  private async setBackGroundBodyFlickrApi () {
    const array : Array<object> = [];
    const timeOfDay:string = this.getTimeOfDay();
    const getUrl = (this.api as any).flickr[`${timeOfDay}`];
    const data = await fetch(getUrl);
    const response = await data.json();
    response.photos.photo.find((element:any) => {
        if(element.url_h){
            array.push(element);
        }
    });
    this.body.style.background = this.returnUrlSlider((array[this.numberSlide] as any).url_h);
    this.btnNext.addEventListener('click' , ()=>{
        ++this.numberSlide
        if(this.numberSlide >= array.length){
            this.numberSlide = 0;
        }
        this.body.style.background = this.returnUrlSlider((array[this.numberSlide] as any).url_h);
    })
    this.btnPrev.addEventListener('click' , ()=>{
        --this.numberSlide
        if(this.numberSlide<=0){
            this.numberSlide = array.length-1;
        }
        this.body.style.background = this.returnUrlSlider((array[this.numberSlide] as any).url_h);
    })
  }

  private returnUrlSlider (linkImg:string) : string {
    return `url(${linkImg}) no-repeat center center /cover`;
  }
}

export default Slider;
