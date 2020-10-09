// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var SpotifyWebApi = require("spotify-web-api-node");

export default (req, res) => {
  var clientId = process.env.SPOTIFY_CLIENT_ID,
    clientSecret = process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  // Create the api object with the credentials
  var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  });

  console.log(req.query);

  spotifyApi.refreshAccessToken().then(
    function (data) {
      console.log("The access token has been refreshed!");
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi
        .searchTracks(
          `track:${req.query.song} ${
            req.query.artist[1] ? "artist:" + req.query.artist : ""
          }`
        )
        .then(
          function (data) {
            if (!data.body.tracks.items[0]) {
              res.redirect("/notfound");
            } else if (!data.body.tracks.items[0].explicit) {
              spotifyApi
                .addTracksToPlaylist(process.env.SPOTIFY_PLAYLIST, [
                  data.body.tracks.items[0].uri,
                ])
                .then(
                  function (data) {
                    res.redirect("/success");
                  },
                  function (err) {
                    console.log("Something went wrong!", err);
                    res.redirect("/bug");
                  }
                );
            } else {
              res.redirect("/rejected");
            }
          },
          function (err) {
            res.send("Something went wrong! Search tracks", err);
            res.redirect("/bug");
          }
        );
    },
    function (err) {
      console.log("Auth failed.");
      res.redirect("/bug");
    }
  );
  // Retrieve an access token.
};
