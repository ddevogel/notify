import mqtt from 'mqtt'

export function createConnectedClient(dispatch){
  const host = 'ws://localhost:7000'
  let client = mqtt.connect(
    host,
    {
      clientId: 'jwtTokenStandInPlusUniquenessForDemo_' + Math.random().toString(16).substr(2, 8) 
    }
  )

  client.on('connect', function() {
      client.subscribe("public/notifications");
      console.log('connected and subscribed')
  })

  client.on('message', function(topic, payload, packet) {
    dispatch('New message: ' + payload.toString() + ' at ' + new Date().toISOString())
  })

  return client
}
