
module.exports.handler = (evnt, cntxt, done) => {
    //Notice {integration: lambda} in this route's call
    console.log(evnt);
    
    done(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({ "message": "FROM API With Body Params Lambda" })
    });
}