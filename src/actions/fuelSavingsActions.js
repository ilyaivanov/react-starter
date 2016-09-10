import * as types from '../constants/actionTypes';
import ArtistsAPI from './../api/ArtistsAPI';
import dateHelper from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function thunkSample(settings) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        // in this case at this point we could call a service that would persist the fuel savings
        return dispatch({
            type: types.SAVE_FUEL_SAVINGS,
            dateModified: dateHelper.getFormattedDateTime(),
            settings
        });
    };
}


export function searchForArtist(term) {
    var api = new ArtistsAPI();
    return function (dispatch) {
        //set app state to show loading is in progress
        dispatch({type: types.SEARCH_ARTIST, term});

        api.searchForArtists(term)
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
