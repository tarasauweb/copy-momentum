import Menu from "./menu";
const settingsImg = '../img/settings.svg' as string;
class Settings {
  footerContainer:HTMLElement;
  constructor (footerContainer:HTMLElement) {
    this.footerContainer = footerContainer;
    this.createSettingsBlock();
    this.createBtnSettings();
  }
  private createSettingsBlock() {
    const settingsBlock = document.createElement('div');
    settingsBlock.classList.add('settings__block')
    const settingsAll = document.createElement('div');
    settingsAll.insertAdjacentHTML('afterbegin' , Menu());
    settingsAll.classList.add('settings__all');
    settingsBlock.insertAdjacentElement('afterbegin' , settingsAll)
    this.footerContainer.insertAdjacentElement('afterbegin' , settingsBlock);
  }
  private createBtnSettings() {
    let openSettings : boolean = false;
    const settingsAll = document.querySelector('.settings__block') as HTMLElement;
    const btnSettings = document.createElement('button');
    const image = document.createElement('img');
    image.setAttribute('alt' , 'settings')
    image.src = settingsImg;
    btnSettings.classList.add('settings');
    settingsAll.insertAdjacentElement('afterbegin' , btnSettings);
    btnSettings.insertAdjacentElement('afterbegin' , image);
    btnSettings.addEventListener('click' , ()=>{
      const allSettings = document.querySelector('.settings__all') as HTMLElement;
      if(openSettings){
        allSettings.style.display = 'none';
        openSettings = false;
      }else{
        allSettings.style.display = 'block';
        openSettings = true;
      }
    })
  }
  returnWidget () {
    const mwnuSettings = document.querySelector('.settings__block');
    return mwnuSettings;
  }
}

export default Settings