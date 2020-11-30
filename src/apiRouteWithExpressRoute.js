const express = require('express');
const http = require('serverless-http');

const app = express();
app.get('/apiRouteWithExpressRoute', (req, res) => {
    console.log('base route');

    res.json({
        message: 'Message from Base route'
    })
})



app.get('/apiRouteWithExpressRoute/foobar', (req, res) => {
    console.log('foobar route');
    res.json({
        message: 'Message from fooBar route'
    })
})


// Prefix '/apiRouteWithExpressRoute' is required in all paths above because our serverless.yml file
// has other routes as well. 
// If we want to remove the prefix from above routes, we have to remove all other routes from serverless.yml
//and have to start this route from '/' in serverless.yml


module.exports.handler = http(app);