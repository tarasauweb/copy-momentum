enum players {
    'Mix' = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1E39HnSOC4Gw4A?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    'Phonk' = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EIgYfmEYKmd2h?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    'Deep' = '<iframe width="100%" height="352" src="https://www.youtube.com/embed/0tTO-JiGKw0?si=WOL1TAWz_yQrNgY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    'Momentum' = `<div class="iframe">
                    <div class="player__subblock">
                        <div class="player__main">
                            <div class="player__times">
                                <div class="player__time-full">
                                    00:00
                                </div>
                                <div class="player__time-now">
                                    00:00
                                </div>
                            </div>
                            <div class="player__wave">
                                <div class="player__wave-now">
                                
                                </div>
                            </div>
                        </div>
                        <div class="player__other">
                            <div class="player__btn-volume">
                                <span>
                                    /
                                </span>
                                <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M832 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-36 12-56.5-12-56.5-29-36-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142zm256 0q0 153-85 282.5t-225 188.5q-13 5-25 5-27 0-46-19t-19-45q0-39 39-59 56-29 76-44 74-54 115.5-135.5t41.5-173.5-41.5-173.5-115.5-135.5q-20-15-76-44-39-20-39-59 0-26 19-45t45-19q13 0 26 5 140 59 225 188.5t85 282.5zm256 0q0 230-127 422.5t-338 283.5q-13 5-26 5-26 0-45-19t-19-45q0-36 39-59 7-4 22.5-10.5t22.5-10.5q46-25 82-51 123-91 192-227t69-289-69-289-192-227q-36-26-82-51-7-4-22.5-10.5t-22.5-10.5q-39-23-39-59 0-26 19-45t45-19q13 0 26 5 211 91 338 283.5t127 422.5z" fill="#fff"></path>
                                </svg>
                            </div>
                            <div class="player__volume">
                                <div class="player__volume-value">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="player__controls">
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
                    
                </ul>
            </div>`
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

export default players



