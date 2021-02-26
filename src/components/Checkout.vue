<template>
  <section class="container checkout">
    <div v-if="Step >= 1" class="wrapper">
      <!-- <div class="bar">
        <div class="number">
          <span>1</span>
        </div>
        <span class="title">Carregue a Foto Predileta do seu Pet</span>
      </div> -->
      <Upload @loadImage="loadImage($event)" />
    </div>

    <div v-if="Step >= 2"> 
      <!-- <div class="bar">
        <div class="number">
          <span>2</span>
        </div>
        <span class="title">Escolha o fundo para o seu quadro</span>
      </div> -->
      <Picker :image="sendImage" @setPicker="setPicker($event)" />
    </div>

    <div v-if="Step >= 3"> 
      <!-- <div class="bar">
        <div class="number">
          <span>3</span>
        </div>
        <span class="title">Escolha o fundo para o seu quadro</span>
      </div> -->
      <Choice :sendImage="sendImage" :pattern="pattern" />
    </div>

    <div v-if="Step >= 4"> 
      <!-- <div class="bar">
        <div class="number">
          <span>4</span>
        </div>
        <span class="title">SIMULAÇÃO DO PEDIDO</span>
      </div> -->
      <Summary />
    </div>
  </section>
</template>

<script>
import Upload from "./Upload";
import Picker from "./Picker";
import Summary from "./Summary";
import Choice from "./Choice";

export default {
  components: {
    Upload,
    Picker,
    Summary,
    Choice,
  },

  data() {
    return {
      Step: 1,
      pattern: null,
      sendImage: false,
    };
  },

  head: {
    script: [
      {
        type: "text/javascript",
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.5/glider.min.js",
        async: true,
        body: true,
      },
    ],
    style: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/glider-js/1.7.5/glider.min.css",
      },
    ],
  },

  methods: {
    loadImage(imageUrl) {
      this.Step++
      this.sendImage = imageUrl;
    },
    setPicker (background) {
      this.Step++
      this.pattern = background
    }
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap");
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: white;
}

* {
  box-sizing: border-box;
}
.container {
  margin: 20px auto;
}
.checkout {
  background: linear-gradient(180deg,#6EC1E4 0%,#1B5168 300%);
}
.mb-0 {
    margin-bottom: 0;
}
.bar {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  border-radius: 4px;

  color: rgb(40, 40, 40);
}
.number {
  padding: 15px;
  display: grid;
  align-items: center;

  /* background: linear-gradient(200deg, #6ec1e4 20%, #1b5168 100%); */
  /* background: linear-gradient(0deg, #1b5168 -70%, #6ec1e4 100%);
  background-size: 200% 200%; */
  background: linear-gradient(-45deg,  #6ec1e4,#6ec1e4, #23a6d5,#1b5168 );
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  color: #333;
  border-radius: 3.125rem;
  font-family: "Raleway", sans-serif;
}
.number > span {
  font-size: 1.0625rem;
  font-weight: 800;
}
.title {
  align-self: center;
  font-size: 1.7rem;
  padding: 15px;
  font-weight: 800;
  font-family: "Raleway", sans-serif;
  text-shadow: 1px 2px 0 rgb(0 0 0 / 30%);
 color: #6ec1e4;
 /* color: #448cab; */
}

.redh3 {
  font-size: 0.8125rem;
  padding: 0.625rem 0.625rem;
  text-align: center;
  color: green;
  text-transform: uppercase;
  background: rgb(255, 255, 255);
  margin: 10px 30px;

  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 35%,
    rgb(234, 252, 141) 35%,
    rgb(234, 252, 141) 65%,
    rgb(255, 255, 255) 65%
  );
}

.content {
  margin: 20px;
  display: flex;
}
@keyframes gradient{
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 80% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>