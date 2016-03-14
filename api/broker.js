import mqtt from 'mqtt'
import moment from 'moment'

export function createConnectedClient(dispatch){
  const host = 'ws://localhost:7000'
  // let clientId = 'jwtTokenStandInPlusUniquenessForDemo_' + Math.random().toString(16).substr(2, 8);
  let clientId = (Math.floor(Math.random() * 10) + 1).toString()

  let client = mqtt.connect(
    host,
    {
      clientId: clientId
    }
  )

  client.on('connect', function() {
      console.log(client)
      client.subscribe("public/notifications/" + clientId);
      console.log('client ' + clientId + ' - connected and subscribed')
  })

  client.on('message', function(topic, payload, packet) {
    dispatch({'topic': topic, 'payload': payload.toString(), 'time': moment(new Date()).format("YYYY MM DD HH:mm:ss.SSS")})
  })

  return client
}
