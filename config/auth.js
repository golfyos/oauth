// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1220751207996602', // your App ID
        'clientSecret'  : 'f700d414aa13ddded24edd473cd12d68', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'FVe4QJYBmYTNhlGMkEwYeWwqd',
        'consumerSecret'    : 'tFI7glsQknGuC1iWbtUm4GqvMNs6rkRrz84PfYk0dSB5yiN08o',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '491509167174-c5dbi2r8cro4u11d22ln97i9l61bvgj7.apps.googleusercontent.com',
        'clientSecret'  : 'q8hgsGRa34pej_yYhGaT7qdS',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};