export default (req, res) => {
  var clientId = process.env.SPOTIFY_CLIENT_ID,
    clientSecret = process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  res.json({
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  });
};
