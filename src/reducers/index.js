import { combineReducers } from 'redux';

const songListReducer = () => {
    return [
        { title: '白日', duration: '4:36' },
        { title: 'まちがいさがし', duration: '3:43' },
        { title: 'たぶん', duration: '4:18' },
        { title: '仮病', duration: '4:43' },
        { title: '僕が君に出来ること', duration: '3:27' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
});