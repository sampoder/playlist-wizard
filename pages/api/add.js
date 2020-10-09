// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var SpotifyWebApi = require("spotify-web-api-node");

export default (req, res) => {
  var clientId = "9e788623cee142f188650d5ef1e51f3a",
    clientSecret = "1a58850bc492457c80ce8b0d82fea244",
    refreshToken =
      "AQAGBrbhYLsNP_s8e8kzzAYhSweUYpkVUuZiSYLgiJf5EX5qRJsKizzIRx0bOOHTb0EEJDAt2ofvB0DObsqEsaTK6ZRiFqMN-HgKDvVvAKJjqHAPdq0aYV5QptYZnHOEzws";

  // Create the api object with the credentials
  var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  });

  console.log(req.query)

  spotifyApi.refreshAccessToken().then(
    function (data) {
      console.log("The access token has been refreshed!");
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.searchTracks(`track:${req.query.song} ${req.query.artist[1]? ('artist:'+req.query.artist) : ''}`).then(
        function (data) {
          if (!data.body.tracks.items[0]){
            res.redirect('/notfound');
          }
          else if (!data.body.tracks.items[0].explicit) {
            spotifyApi
              .addTracksToPlaylist("2fddnU7I4qYwHpo6DrccMj", [
                data.body.tracks.items[0].uri,
              ])
              .then(
                function (data) {
                  res.redirect('/success');
                },
                function (err) {
                  console.log("Something went wrong!", err);
                  res.redirect('/bug');
                }
              );
          } else {
            res.redirect('/rejected');
          }
        },
        function (err) {
          res.send("Something went wrong! Search tracks", err);
          res.redirect('/bug');
        }
      );
    },
    function (err) {
      console.log('Auth failed.')
      res.redirect('/bug');
    }
  );
  // Retrieve an access token.
};
