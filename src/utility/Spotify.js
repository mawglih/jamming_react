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
            //console.log('tracks in spotify are: ', response.json());
             return response.json();
        })
        .then(res => {
            return res.tracks.items.map(track => {
                console.log('track is: ', track.name );
                return {
                    track: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }
            });
        });
    },

    savePlayList(name, uris) {
        console.log(name);
        console.log(uris);
        if(!name || uris.length) {
            return;
        } else {
            const token = Spotify.getAccessToken();
            const headers = {Authorization: `Bearer ${token}`};
            let userId;
            return fetch(`https://api.spotify.com/v1/me`, {
                headers: headers
            }).then(res => res.json()
            ).then(jsonRes => {
                userId = jsonRes.id;
                console.log('UserId on Post is: ', userId);
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({name: name})
                }).then(res => res.json()
                ).then(jsonRes => {
                    const playListId = jsonRes.id;
                    console.log("playlist id is: ", playListId);
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks,`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: uris})
                    });
                });

            });
        }
    }
};
export default Spotify;

