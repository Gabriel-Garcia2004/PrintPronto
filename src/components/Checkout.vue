<template>
<section class="container">

  <div v-if="!sendImage" class="wrapper">
  <div class="bar">
    <div class="number">
      <span>1</span>
    </div>
    <span class="title">Carregue a Foto Predileta do seu Pet</span>
  </div>
  
    <Upload @loadImage="loadImage($event)"/>
  </div>
  
  <div v-if="sendImage">
    <div class="bar">
      <div class="number">
        <span>2</span>
      </div>
      <span class="title">Escolha o fundo para o seu quadro</span>
    </div>

    <Picker :image="sendImage" />  

    <div class="bar">
      <div class="number">
        <span>3</span>
      </div>
      <span class="title">sIMULAÇÃO DO PEDIDO</span>
    </div>
  
    <Summary />
       <div class="bar">
      <div class="number">
        <span>4</span>
      </div>
      <span class="title">Escolha o fundo para o seu quadro</span>
    </div>
   <Choice />
  </div>
</section>

</template>

<script>
import Upload from './Upload'
import Picker from './Picker'
import Summary from './Summary'
import Choice from './Choice'

export default {
  components: { 
    Upload,
    Picker,
    Summary,
    Choice
  },

  data () {
    return {
      sendImage: 'true'
    }
  },
  
  head: {
    script: [
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.5/glider.min.js', async: true, body: true }
    ],
    style: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.5/glider.min.css' }
    ]
  },

  methods: {
    loadImage (imageUrl) {
      this.sendImage = imageUrl
    }
  }
}
</script>

<style >

html, body {
  margin: 0;
  padding: 0;
  font-family: Arial;
}

* {
  box-sizing: border-box;
}
.container{
  margin: 20px auto;
}

.wrapper {
  width: 750px;
}

.bar{
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 45px 1fr;
  text-align: left;
  font-size: 1.4375rem;
  border-radius: 4px;
  
  color: rgb(40, 40, 40);
  
background: linear-gradient(180deg, rgb(255,255,255) 80%, rgb(220,220,220) 60%);
}
.number {
  width: 30px;
  height: 30px;
  margin: 5px;
  
  text-align: center;
  
  background-color: #98c7f7;
  color: rgb(40, 40, 40);
  border-radius: 3.125rem;
  font-family: Arial;
}
.number > span {
  font-size: 1.0625rem;
  margin: auto 0;
  font-weight: bold;
}
.title {
  margin: auto 0;
  font-size: 1rem;
  font-weight: 600;
}

.redh3 {
  font-size: 0.8125rem;
  padding: 0.625rem 0.625rem;
  text-align: center;
  color: green;
  text-transform: uppercase;
  background: rgb(255,255,255);
  margin: 10px 30px; 
  
background: linear-gradient(180deg, rgb(255,255,255) 35%, rgb(234,252,141) 35%, rgb(234,252,141) 65%, rgb(255,255,255) 65%);
}

.content {
  margin: 20px;
  display: flex;
}

</style>