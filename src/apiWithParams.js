
module.exports.handler = (evnt, cntxt, done) => {
   // console.log(evnt);

    console.log('\nParams captured: ' + JSON.stringify(evnt.pathParameters));
    done(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({ "message": "FROM API With Query Params Lambda" })

    })

}