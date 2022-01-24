const { sms } = require('../config')
const client = require('twilio')(sms.sid, sms.token)

class SMSService {
    constructor() {
    }
    
    sendConfirmation(number) {
        client.messages.create({
            to: 'whatsapp:+57'+number,
            body: 'Se ha confirmado tu servicio',
            from: 'whatsapp:+14155238886'
        }).then(msg => console.log(msg.sid)).catch(err => (console.log(err)))
    }
    sendPayment(number) {
        client.messages.create({
            to: 'whatsapp:+57'+number,
            body: 'Tu pago se ha realizado exitosamente',
            from: 'whatsapp:+14155238886'
        }).then(msg => console.log(msg.sid)).catch(err => (console.log(err)))
    }
}

module.exports = SMSService;
