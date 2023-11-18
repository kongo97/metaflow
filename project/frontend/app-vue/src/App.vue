<template>
  <div>

    <p>Hello Jobox</p>

  </div>
</template>

<script>
import { io } from 'socket.io-client'
export default {
  data () {
    return {
      config: require('./config.json'),
      socket: null
    }
  },
  mounted () {
    console.log(this.config.serverSocket)
    this.socket = io(this.config.serverSocket)
    this.socket.emit('start', 'jobox')
    console.log('socket inviato')
    this.socket.on('confirm-start', (data) => {
      if (data) {
        console.log('connection', data)
        return data
      }
      console.log('connection', false)
    })
  }
}
</script>
