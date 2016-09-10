export default class ArtistsAPI {
    searchForArtists(term) {
        //track if there are any pending requests
        //if there are - abot old and trigger new
        return new Promise(function (resolve) {
            var delay = 1000;

            var id = 0;
            var artists = [
                {name: "Asura " + term, id: ++id},
                {name: "Carbon " + term, id: ++id},
                {name: "Sync23 " + term, id: ++id}
            ];

            setTimeout(() => resolve(artists), delay)
        });
    }
}