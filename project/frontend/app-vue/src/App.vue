<template>
  <div>
    <!-- nome_funzione(params) -->
    <div line="1" level="0">
      <label>1. </label>
      <input type="text" placeholder="name" v-model="startNameValue" @input="addToJson('start', 'name', startNameValue)" />
      <span>(</span>
      <input v-for="(param, index) in params" :key="index" type="text" :placeholder="'param ' + (index + 1)" v-model="params[index]" @input="updateStartParams(index)" />
      <button @click="addStartParam">+</button>
      <span>)</span>

      <!-- contenuto di nome_funzione(param) -->
      <div>

        <br />

        <!-- nome_var_1 -->
        <div line="2" level="1">
          <label>2. </label>
          <select v-model="dichiarazione1Type">
            <option></option>
            <option @click="addToJson('dichiarazione1', 'type', 'var')">var</option>
            <option @click="addToJson('dichiarazione1', 'type', 'const')">const</option>
          </select>
          <select>
            <option></option>
            <option>str</option>
            <option>int</option>
          </select>
          <input type="text" placeholder="name" v-model="dichiarazione1Value" @input="addToJson('dichiarazione1', 'value', dichiarazione1Value)" />
        </div>

        <br />

        <!-- nome_var_2 -->
        <div line="3" level="1">
          <label>3. </label>
          <select>
            <option></option>
            <option>var</option>
            <option>const</option>
          </select>
          <select>
            <option></option>
            <option>str</option>
            <option>int</option>
          </select>
          <input type="text" placeholder="name" v-model="dichiarazione2Value" @input="addToJson('dichiarazione2', 'value', dichiarazione2Value)" />
        </div>

        <br />

      </div>
    </div>

    <!-- json -->
    <pre>{{ jsonData }}</pre>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup () {
    const state = reactive({
      startNameValue: '',
      params: [''],
      dichiarazione1Value: '',
      dichiarazione2Value: '',
      dichiarazione1Type: '',
      dichiarazione_variabile: 'var',
      dichiarazione_costante: 'const',
      jsonData: []
    })

    const addToJson = (section, key, value, dichiarazioneType) => {
      // Verifica se il valore non è vuoto
      if (value !== '') {
        const index = state.jsonData.findIndex((item) => item.section === section)
        if (index === -1) {
          state.jsonData.push({ section, dichiarazione: dichiarazioneType, [key]: value })
        } else {
          state.jsonData[index][key] = value
        }
      }
    }

    const addStartParam = () => {
      state.params.push('')
    }

    const updateStartParams = (index) => {
      // Aggiorna l'array params in base ai valori delle caselle di testo
      state.params[index] = state.params[index] !== undefined ? state.params[index] : ''
      addToJson('start', 'params', state.params.map((param) => (param !== undefined ? param : '')), '')
    }

    return { ...state, addToJson, addStartParam, updateStartParams }
  }
}
</script>

<!--
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
-->

<style scoped>
[level="1"] {
  margin-left: 16px;
}
[level="2"] {
  margin-left: 32px;
}
[level="3"] {
  margin-left: 46px;
}
</style>
