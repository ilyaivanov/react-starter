import * as types from '../constants/actionTypes';
import ArtistsAPI from './../api/ArtistsAPI';

export function searchForArtist(searchTerm) {
    var api = new ArtistsAPI();
    return function (dispatch) {
        //set app state to show loading is in progress
        dispatch({type: types.SEARCH_ARTIST, searchTerm});

        api.searchForArtists(searchTerm)
        //loading is done, show results
            .then(artists => dispatch({
                    type: types.SEARCH_ARTIST,
                    status: 'done',
                    artists: artists
                }),
                error => dispatch({
                    type: types.SEARCH_ARTIST,
                    status: 'error',
                    error
                }));
    };
}
