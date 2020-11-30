//READ ME
//Instead of running this funciton using SLS Invoke commmand, we will hook this up with the http event
// so that it can work like an API URL.
//We are gonna use serverless-offline to actually start a server offline for us to execute our function using URL.
//So basically using SLS-Offline, we are emulating AWS API GAteway(that sits between client and Lambda) on our 
//local machine

//<Client> <=> <API Gateway>  <=>  <Lambda>
//In order for API Gateway to respond to the client in a predictable way, Lambda has to respond to the API Gateway 
//in a predictable way, that is why we have to return in a proper format like below:

//Using "AWS gateway AWS proxy" event with Lambda  is a better option rather than using API gateway service becuase 
//latter is only a 'forwarding' service, but with former( proxy) option you get to format the request before it is 
//sent to the client, you have more control

// Documentation: https://www.serverless.com/framework/docs/providers/aws/events/apigateway/#lambda-integration

module.exports.handler = (evnt, cntxt, done) => {
done(null, {
    statusCode:200,
    headers:{},
    body:JSON.stringify({"message": "FROM API Lambda"})

})

}