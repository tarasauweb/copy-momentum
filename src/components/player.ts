import players from "./players";
import { momentumPlayList } from "./players";

const myStorage = window.localStorage;
class Player {
    playerDiv:HTMLElement;
    track : HTMLAudioElement;
    timer:any;
    constructor(playerDiv:HTMLElement) {
        this.timer = null ;
        this.playerDiv = playerDiv;
        this.track = new Audio () ;
        this.renderPlayer ('Momentum');
        this.listenerMenu();

    }

    mixPlayList () {
        clearInterval(this.timer)
        this.track.pause();
        this.track.currentTime = 0.0;
      return this.playerDiv.innerHTML = players.Mix
    }

    phonkPlayList () {
        clearInterval(this.timer)
        this.track.pause();
        this.track.currentTime = 0.0;
        return this.playerDiv.innerHTML = players.Phonk
    }

    deepPlayList () {
        clearInterval(this.timer)
        this.track.pause();
        this.track.currentTime = 0.0;
        return this.playerDiv.innerHTML = players.Deep
    }

    momentumPlayer () {
        clearInterval(this.timer)
        this.track.pause();
        this.track.currentTime = 0.0;
        this.playerDiv.innerHTML = players.Momentum
        this.momentumPlay();
        return this.playerDiv
    }

    momentumPlay () {
        const playBtn = document.querySelector('.player__btn_play') as HTMLElement;
        const prevSongBtn = document.querySelector('.player__btn_prev') as HTMLElement;
        const nextSongBtn = document.querySelector('.player__btn_next') as HTMLElement;
        const playlist = document.querySelector('.player__list') as HTMLElement;
        const playImg = document.querySelector('.player__img_play') as HTMLElement;
        const pauseImg = document.querySelector('.player__img_pause') as HTMLElement;
        const timeSongNow = document.querySelector('.player__time-now') as HTMLElement;
        const timeSongFull = document.querySelector('.player__time-full') as HTMLElement;
        const playerWave = document.querySelector('.player__wave') as HTMLElement;
        const playerWaveNow = document.querySelector('.player__wave-now') as HTMLElement;
        const playerVolume = document.querySelector('.player__volume') as HTMLElement;
        const playerVolumeValue = document.querySelector('.player__volume-value') as HTMLElement;
        const playerBtnVolume = document.querySelector('.player__btn-volume') as HTMLElement;
        const playerBtnVolumeSpan = document.querySelector('.player__btn-volume span') as HTMLElement;
        const playerWaveWidth = playerWave.clientWidth;
        const arrSongName : string[] = [];
        const arrSongLink : string[] = [];
        const arrHTMLElems : Array<HTMLElement> = [];
        let mute : boolean = false;
        let numberSong : number = 0 ;
        let songPlay : boolean = false;
        let track = new Audio ();

        for(let key in momentumPlayList) {
            arrSongName.push(momentumPlayList[key as keyof typeof momentumPlayList].name)
            arrSongLink.push(momentumPlayList[key as keyof typeof momentumPlayList].link)
        }

        arrSongName.forEach((item:string)=>{
            const li = document.createElement('li');
            li.classList.add('player__track');
            li.textContent = item;
            arrHTMLElems.push(li)
            playlist.insertAdjacentElement('beforeend' , li)
        })

        

        track.src = arrSongLink[numberSong];
        myStorage.getItem('volume') !== null ? track.volume = (parseFloat(myStorage.getItem('volume') as string)) : track.volume = playerVolumeValue.clientWidth / 100;
        myStorage.getItem('volume') !== null ? playerVolumeValue.style.width = (parseFloat(myStorage.getItem('volume') as string)*100) + `px` : playerVolumeValue.style.width = playerVolumeValue.clientWidth + 'px';
        playerBtnVolume.addEventListener('click' , ()=>{
            
           if(mute) {
            track.muted = false;
            playerBtnVolumeSpan.style.opacity = `0`;
            return mute = false;
           }
           mute = true;
           playerBtnVolumeSpan.style.opacity = `1`;
           track.muted = true;
        })
        
        playBtn.addEventListener('click' , ()=>{
            this.track = track;
            if(songPlay){
                track.pause();
                arrHTMLElems[numberSong].classList.add('player__track_active');
                playImg.classList.toggle('d-none');
                pauseImg.classList.toggle('d-none');
                clearInterval(this.timer);
                return songPlay = false;
            }
            track.play();
            songPlay = true;
            arrHTMLElems[numberSong].classList.add('player__track_active');
            playImg.classList.toggle('d-none');
            pauseImg.classList.toggle('d-none');

            setTimerSong(track)
            
        })

        playerVolume.addEventListener('click' , (e)=>{
            let volumeValue = e.offsetX;
            playerVolumeValue.style.width = volumeValue + 'px';
            track.volume = volumeValue / 100;
            let volumeStr = `${track.volume}`
            myStorage.setItem('volume' , volumeStr )
            console.log(volumeValue)
        })

        track.addEventListener('ended' , ()=>{
            prevOrNextSongPlay('+');
        })

        const prevOrNextSongPlay = (operation:'-' | `+`) => {
            playImg.classList.add('d-none');
            pauseImg.classList.remove('d-none');
            track.pause();
            songPlay = true;
            track.currentTime = 0.0;
            
            if(operation === '+') {
                numberSong++;
            }
            if(operation === '-'){
                numberSong--;
            }
            if(numberSong <= 0) {
                numberSong = arrSongLink.length - 1;
            }
            if(numberSong>=arrSongLink.length){
                numberSong = 0;
            }
            
            track = new Audio (arrSongLink[numberSong]);
            track.addEventListener('loadeddata' , ()=>{
                track.play();
            })
            arrHTMLElems.forEach(item=>{
                item.classList.remove('player__track_active');
            })
            
            arrHTMLElems[numberSong].classList.add('player__track_active');
            track.addEventListener('loadedmetadata', ()=>{
                setTimerSong(track)
            })
            track.addEventListener('ended' , ()=>{
                prevOrNextSongPlay(`+`);

            })
            
            this.track = track;
        }
        nextSongBtn.addEventListener('click' , ()=>{
            prevOrNextSongPlay(`+`);
        })
        prevSongBtn.addEventListener('click' , ()=>{
            prevOrNextSongPlay(`-`)
        })

        const setTimerSong = (track:HTMLAudioElement) =>{
            clearInterval(this.timer)
            const time = track.duration;
            const timeMinuts = Math.floor(time / 60);
            const timeSeconds = Math.floor(time - (timeMinuts*60));
            
            let fullTime = '' ; 
            timeMinuts < 10 ? fullTime = `0${timeMinuts}:` : fullTime = `${timeMinuts}:`;
            timeSeconds < 10 ? fullTime += `0${timeSeconds}` : fullTime += `${timeSeconds}`;
            timeSongFull.textContent = fullTime;

            // 

            track.addEventListener('timeupdate' , ()=>{
                let length = playerWaveWidth / track.duration * track.currentTime ;
                playerWaveNow.style.width = length + 'px'
            })

            let minutsNow = 0;
            let secondsNow = 0;
            let timeNow = ''

            this.timer = setInterval(()=>{
                const secondsAfterPlayBackStarts = Math.floor(track.currentTime);
                minutsNow = Math.floor((time - (time - secondsAfterPlayBackStarts)) / 60);
                secondsNow = Math.floor((time - (time - secondsAfterPlayBackStarts))%60)
                
                minutsNow < 10 ? timeNow = `0${minutsNow}:` : timeNow = `${minutsNow}:`;
                secondsNow < 10 ? timeNow += `0${secondsNow}` : timeNow += `${secondsNow}`;
                timeSongNow.textContent = timeNow
                
                if(track.currentTime === track.duration) {
                    clearInterval(this.timer)
                    minutsNow = 0;
                    secondsNow = 0;
                    timeNow = '00:00';
                    timeSongFull.textContent = '00:00';
                    playerWaveNow.style.width = 0 + `px`;
                }
            },1000)
            
        }
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