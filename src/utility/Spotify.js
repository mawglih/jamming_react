const CLIENT_ID = '9306b82e051d4cee8b874d307e9296ad';
const CLIENT_SECRET = '17f91fb036ae4aedb710bfa540e70aeb';
const REDIRECT_URI = 'http://localhost:3000/';
const RESPONSE_TYPE = 'token';
const SCOPES = 'playlist-modify-publi';
let accessToken, expiresIn;
export const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        return fetch(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`, { method: 'GET', mode: 'no-cors'})
            .then(response => {
                if(response.ok){
                    console.log('response', response);
                    // window.location.href = response.url;
                    // accessToken = response.url.match(/access_token=([^&]*)/);
                    // expiresIn = response.url.match(/expires_in=([^&]*)/);
                    // console.log(accessToken);
                }
                throw new Error('Request failed');
            }).catch(error => {
                console.log('Request failed: ', error);
            })
    }
}
