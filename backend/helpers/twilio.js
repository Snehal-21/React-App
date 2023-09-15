
import tw from "twilio";

async function sendSms(number,message){
    try {
        const client=tw(process.env.accountSid,process.env.authToken);
        const response=await client.messages.create({
            body:message,
            from:'+13203320409',
            to:`+91${number}`
        })
        return response.sid;
    } catch (error) {
        return error;
    }
}

export default sendSms;


// const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
// const authToken = 'your_auth_token';

// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello from twilio-node',
//     to: '+12345678901', // Text your number
//     from: '+12345678901', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));