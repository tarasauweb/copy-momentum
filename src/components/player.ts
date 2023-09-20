import playList from "./playlists";
import { momentumPlayList } from "./playlists";
class Player {
    playerDiv:HTMLElement;
    track : HTMLAudioElement;
    constructor(playerDiv:HTMLElement) {
        
        this.playerDiv = playerDiv;
        this.track = new Audio () ;
        this.renderPlayer ('Momentum');
        this.listenerMenu();

    }

    mixPlayList () {
        this.track.pause();
        this.track.currentTime = 0.0;
      return this.playerDiv.innerHTML = playList.Mix
    }

    phonkPlayList () {
        this.track.pause();
        this.track.currentTime = 0.0;
        return this.playerDiv.innerHTML = playList.Phonk
    }

    deepPlayList () {
        this.track.pause();
        this.track.currentTime = 0.0;
        return this.playerDiv.innerHTML = playList.Deep
    }

    momentumPlayer () {
        this.track.pause();
        this.track.currentTime = 0.0;
        this.playerDiv.innerHTML = playList.Momentum
        this.momentumPlay();
        return this.playerDiv
    }

    momentumPlay () {
        const playBtn = document.querySelector('.player__btn_play') as HTMLElement;
        const prevSongBtn = document.querySelector('.player__btn_prev') as HTMLElement;
        const NextSongBtn = document.querySelector('.player__btn_next') as HTMLElement;
        const playlist = document.querySelector('.player__list') as HTMLElement;
        const playImg = document.querySelector('.player__img_play') as HTMLElement;
        const pauseImg = document.querySelector('.player__img_pause') as HTMLElement;
        const arrSongName : string[] = [];
        const arrSongLink : string[] = [];
        const arrHTMLElems : Array<HTMLElement> = [];
        let numberSong : number = 0 ;
        let songPlay : boolean = false;
        let track = new Audio ();

        for(let key in momentumPlayList) {
            arrSongName.push(momentumPlayList[key as keyof typeof momentumPlayList].name)
            arrSongLink.push(momentumPlayList[key as keyof typeof momentumPlayList].link)
        }
        console.log(arrSongLink)

        arrSongName.forEach((item:string)=>{
            const li = document.createElement('li');
            li.classList.add('player__track');
            li.textContent = item;
            arrHTMLElems.push(li)
            playlist.insertAdjacentElement('beforeend' , li)
        })

        console.log(arrHTMLElems)
        track.src = arrSongLink[numberSong];
        this.track = track;
        playBtn.addEventListener('click' , ()=>{
            if(songPlay){
                track.pause();
                arrHTMLElems[numberSong].classList.add('player__track_active');
                playImg.classList.toggle('d-none');
                pauseImg.classList.toggle('d-none');
                return songPlay = false;
            }
            track.play();
            songPlay = true;
            arrHTMLElems[numberSong].classList.add('player__track_active');
            playImg.classList.toggle('d-none');
            pauseImg.classList.toggle('d-none');
        })
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
        playListName === 'Mix' ?  this.mixPlayList () : playListName === 'Phonk' ? this.phonkPlayList() : playListName === 'Deep' ?  this.deepPlayList() : playListName === 'Momentum' ? this.momentumPlayer() : false;
    }
}


export default Player