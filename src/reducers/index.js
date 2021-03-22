//? Reducers
const songsReducer = () => {
    return [
        { title: 'Amazing!', duration: '3:19' },
        { title: 'Time Warp', duration: '2:54' },
        { title: '白日', duration: '4:36' },
        { title: 'Who I Am', duration: '4:13' },
        { title: 'まちがいさがし', duration: '3:43' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};