const CLIENT_ID = '9306b82e051d4cee8b874d307e9296ad';
const REDIRECT_URI = 'http://localhost:3000';

let accessToken, expiresIn; 


const Spotify = {
    getAccessToken() {
        if(accessToken) {
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');  
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/); 
        if (accessTokenMatch) {
            accessToken = accessTokenMatch[1];
            expiresIn = Number(expiresInMatch[1]);
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessUrl;
        } 
    },
    
    search(term) {
        const accessToken = Spotify.getAccessToken();
        console.log('accessToken in spotify is: ', accessToken);
        console.log('expires in in spotify is: ', expiresIn);
        console.log('term in spotify is: ', term);
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => {
            console.log('tracks: ', response.json());
            // if(response.tracks) {
            //     return response.tracks.map(track => {
            //         console.log('track is: ', track);
            //         return {
            //             track: track.id,
            //             name: track.name,
            //             artist: track.artists[0].name,
            //             album: track.album.name,
            //             uri: track.uri
            //         }
            //     })
            // }
        })
    }
}
export default Spotify;