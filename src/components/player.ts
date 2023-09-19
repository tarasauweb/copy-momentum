import playList from "./playlists";

class Player {
    playerDiv:HTMLElement;
    constructor(playerDiv:HTMLElement) {
        
        this.playerDiv = playerDiv;
        this.renderPlayer ('Mix');
        this.listenerMenu();
    }

    mixPlayList () {
      return this.playerDiv.innerHTML = playList.Mix
    }

    phonkPlayList () {
        return this.playerDiv.innerHTML = playList.Phonk
    }

    deepPlayList () {
        return this.playerDiv.innerHTML = playList.Deep
    }

    private listenerMenu () {
        const itemMenuPlaylist = document.querySelector('.menu__submenu_playlist') as HTMLElement;
        itemMenuPlaylist.addEventListener('click' , (e)=>{
            const playListName = (e.target as HTMLElement).textContent?.trim() as string;
            this.renderPlayer(playListName);
        })
    }

    private renderPlayer (playListName:string) {
        this.playerDiv.innerHTML = '';
        playListName === 'Mix' ?  this.mixPlayList () : playListName === 'Phonk' ? this.phonkPlayList() : playListName === 'Deep' ?  this.deepPlayList() : false;
    }
}


export default Player