export default class ArtistsAPI {
    searchForArtists(term) {
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