const clientId = '9306b82e051d4cee8b874d307e9296ad';
const clientSecret = '17f91fb036ae4aedb710bfa540e70aeb';
const redirectURI = 'http://localhost:3000/callback';
var scopes = 'user-read-private user-read-email';
let accessToken;
export const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        return fetch(`https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize/?client_id=${clientId}&response_type=json&redirect_uri=${redirectURI}&scope=${scopes}&state=34fFs29kd09`, { method: 'GET'})
            .then(response => {
                console.log(response);
            })
    }
}
