// pause and play
const music = document.querySelector('audio');
const poster = document.getElementById('poster') 
const play = document.getElementById('play');
const pause = document.getElementById('pause');

const playMusic = () => {
    music.play();
    // play.classList.replace('fa-play', 'fa-pause');
    poster.classList.add('animate');
    play.style.display= 'none';
    pause.style.display= 'inline';

};

const pauseMusic = () => {
    music.pause();
    // play.classList.replace('fa-play', 'fa-pause');
    poster.classList.remove('animate');
    pause.style.display= 'none';
    play.style.display= 'inline';

};

play.addEventListener("click", () =>{
    playMusic();
})

pause.addEventListener("click", () =>{
    pauseMusic();
})


// next and prev

const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const bg = document.getElementById('bg');

const songs = 
[
    {
        title: 'laal ishq',
        artist: 'arjit singh',
    },
    {
        title: 'hamari adhuri kahani',
        artist: 'arjit singh',
    },
    {
        title: 'kaise hua',
        artist: 'vishal mishra',
    },
    {
        title: 've maahi',
        artist: 'arjit singh',
    },
    {
        title: 'jiyein kyun',
        artist: 'mayur singhal',
    },
    {
        title: 'geeta govindam',
        artist: 'radhey goswami ',
    },
    {
        title: 'filhal',
        artist: 'B praak',
    },
    {
        title: 'toh phir aao',
        artist: 'mustafa zahid',
    },
    {
        title: 'phir kabhi',
        artist: 'arjit singh',
    },
    {
        title: 'tujhe kitna chahen',
        artist: 'jubin nautiyal',
    },
]

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'music/' +songs.title+ '.mp3';
    poster.src = 'music/' +songs.title+ '.png';
    bg.src = 'music/' +songs.title+ '.png';
}

let sn = 0;
const nextSong = () => {
    //sn++;     dont use this it will never stop increament.
    sn = (sn + 1) % songs.length;
    loadSong(songs[sn]);
    playMusic();
};

const prevSong = () => {
    //sn--;     dont use this it will never stop decreament.
    sn = (sn - 1 + songs.length) % songs.length;
    loadSong(songs[sn]);
    playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);



// progress bar


let progress = document.getElementById('progress');
const total = document.getElementById('total');
let current = document.getElementById('current');

music.addEventListener('timeupdate', (event) => {
    const {currentTime, duration} = event.srcElement;
    let {ended} = event.target;

    //console.log(event);

    // progress bar
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = progress_time + '%';
    // total time
    let tot_minutes = Math.floor(duration / 60);
    let tot_seconds = Math.floor(duration % 60);
    if(tot_minutes<10)
    {
        tot_minutes='0' + tot_minutes;
    }
    if(tot_seconds<10)
    {
        tot_seconds='0' + tot_seconds;
    }

    let tot_time = tot_minutes + ':' + tot_seconds;
    if(duration)
    {
        total.textContent = tot_time;
    }
    else
    {
        total.textContent = '00:00'; 
    }
    // current time
    let cur_minutes = Math.floor(currentTime / 60);
    let cur_seconds = Math.floor(currentTime % 60);
    if(cur_minutes<10)
    {
        cur_minutes='0' + cur_minutes;
    }
    if(cur_seconds<10)
    {
        cur_seconds='0' + cur_seconds;
    }
    const cur_time = cur_minutes + ':' + cur_seconds;
    current.textContent = cur_time;
    
    // when song ends start new

    if(ended == true)
    {
        nextSong();
    }
});

// clickable progress


progress_bar.addEventListener('click', (event) => {
    const{duration} = music;
    let move_progress = (event.offsetX/event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;

});

// favorite

const fav_o = document.getElementById('fav_o');
const fav = document.getElementById('fav');

fav_o.addEventListener("click", () =>{
    fav_o.style.display= 'none';
    fav.style.display= 'inline';
    //music.muted = true;
    //music.volume = .5; //0-1
});
fav.addEventListener("click", () =>{
    fav.style.display= 'none';
    fav_o.style.display= 'inline';
});



// music target and srcElement

music.addEventListener('timeupdate', (event) => {
let {volume, value, ended, muted, loop, title} = event.target;
// console.log(event)
//console.log(event, volume, ended, muted, loop, title);

// loop

const loop_list = document.getElementById('loop_list');
const loop_song = document.getElementById('loop_song');
const suffle = document.getElementById('suffle');

loop_list.addEventListener("click", () =>{
    loop_list.style.display= 'none';
    loop_song.style.display= 'none';
    suffle.style.display= 'inline';
    music.loop = false;
});
suffle.addEventListener("click", () =>{
    loop_list.style.display= 'none';
    loop_song.style.display= 'inline';
    suffle.style.display= 'none';
    music.loop = true;
});
loop_song.addEventListener("click", () =>{
    loop_list.style.display= 'inline';
    loop_song.style.display= 'none';
    suffle.style.display= 'none';
    music.loop = false;
});
});

// playlist show

const list_up = document.getElementById('list_up');
const player_box = document.getElementById('player_box');
const list_box = document.getElementById('list_box');
const list = document.querySelector('.list');
let rotate = false;

list_up.addEventListener('click' , ()=>
{
    if(rotate==false)
    {
        list_up.style.transform = 'rotate(180deg)';
        list_box.style.height = '93%';
        list.style.display = 'inline';
        return rotate = true;
    }
    else
    {
        list_up.style.transform = 'none';
        list_box.style.height = '40px';
        list.style.display = 'none';
        return rotate = false;
    }

});

function addList()
{
    for(let i = 0; i<songs.length; i++)
    {
        let x = songs[i].title;
        let y = songs[i].artist;
        document.getElementById('li'+ i).innerHTML = x +'</br>'+ y;
    }
}
addList();