import {SEARCH_ARTIST, ARTISTS_FOUND} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case SEARCH_ARTIST:
            newState = objectAssign({}, state);

            newState.isLoadingArtists = !action.status;

            //request has been initiated
            if(newState.isLoadingArtists)
            {
                newState.artists = [];
                newState.searchTerm = action.term;
                var counter = newState.counter ? newState.counter + 1 : 1;
                newState.counter = counter;
            }
            else{
                newState.artists = action.artists;
            }
//TODO: add error handling
            newState.artistsSearchResults = newState.counter + " requests made (" + newState.searchTerm + ")";

            return newState;
        default:
            return state;
    }
}
