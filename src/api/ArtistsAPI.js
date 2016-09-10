export default class ArtistsAPI {
    searchForArtists(term) {
        //track if there are any pending requests
        //if there are - abot old and trigger new
        return new Promise(function (resolve) {
            let delay = 1000;

            let id = 0;
            let artists = [
                {name: "Asura " + term, id: ++id},
                {name: "Carbon " + term, id: ++id},
                {name: "Sync23 " + term, id: ++id}
            ];

            setTimeout(() => resolve(artists), delay);
        });
    }
}