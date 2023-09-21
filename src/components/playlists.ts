enum playList {
    'Mix' = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E39HnSOC4Gw4A?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    'Phonk' = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIgYfmEYKmd2h?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    'Deep' = '<iframe width="100%" height="352" src="https://www.youtube.com/embed/0tTO-JiGKw0?si=WOL1TAWz_yQrNgY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    'Momentum' = `<div class="player__controls">
                    <button class="player__btn player__btn_prev">
                        <img src="./img/play-prev.svg" alt="song prev" class="player__img">
                    </button>
                    <button class="player__btn player__btn_play">
                        <img src="./img/play.svg" alt="play" class="player__img player__img_play">
                        <img src="./img/pause.svg" alt="pause" class="player__img player__img_pause d-none">
                    </button>
                    <button class="player__btn player__btn_next">
                        <img src="./img/play-next.svg" alt="song next" class="player__img">
                    </button>
                </div>
                <ul class="player__list">
                    
                </ul>`
}

interface IMomentumPlayList {
    'Test1' : ITrack,
    'Test' : ITrack,
    'Linkin Park' : ITrack ,
   'Mr.Kitty' : ITrack , 
    'Skeler' : ITrack,
}

interface ITrack {
    name : string,
    link : string,
}
export const momentumPlayList : IMomentumPlayList = {
    'Test1' : {
        name : 'Test1 - tack1',
        link: '../music/korotkaya - test.mp3',
    },
    'Test' : {
        name : 'Test - tack',
        link: '../music/otkryitie - test.mp3',
    },
    'Linkin Park' : {
        name : 'Linkin Park - Lost',
        link: '../music/Linkin Park – Lost.mp3',
    },
    'Mr.Kitty' : {
        name: 'Mr.Kitty - After Dark',
        link : '../music/Mr.Kitty - After dark.mp3',
    },
    'Skeler' : {
        name: `Skeler - Tokio`,
        link : '../music/Skeler - Tokyo.mp3',
    },
}

export default playList



