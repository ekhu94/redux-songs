//? Action Creator
export const selectSong = song => {
    //* Return a new Action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};