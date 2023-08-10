import Menu from "./menu";
const settingsImg = '../img/settings.svg' as string;
import TypeApiSlider from "./typesApiSlider";
import Slider from "./slider";
class Settings {
  footerContainer:HTMLElement;
  constructor (footerContainer:HTMLElement) {
    this.footerContainer = footerContainer;
    this.createBtnSettings();
    this.createSettingsBlock();
  }
  private createSettingsBlock() {
    const settingsDiv = document.createElement('div');
    settingsDiv.insertAdjacentHTML('afterbegin' , Menu());
    settingsDiv.classList.add('settings__block');
    this.footerContainer.insertAdjacentElement('afterbegin' , settingsDiv);
  }
  private createBtnSettings() {
    let openSettings : boolean = false;
    const btnSettings = document.createElement('button');
    const image = document.createElement('img');
    image.src = settingsImg;
    btnSettings.classList.add('settings');
    this.footerContainer.insertAdjacentElement('afterbegin' , btnSettings);
    btnSettings.insertAdjacentElement('afterbegin' , image);
    btnSettings.addEventListener('click' , ()=>{
      const allSettings = document.querySelector('.settings__block') as HTMLElement;
      if(openSettings){
        allSettings.style.display = 'none';
        openSettings = false;
      }else{
        allSettings.style.display = 'block';
        openSettings = true;
      }
    })
  }
  
}

export default Settings