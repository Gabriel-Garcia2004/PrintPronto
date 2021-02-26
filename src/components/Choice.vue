<template>
  <section class="choice">
    <p class="is-center frame-title">Resultado {{ frame.orientation }}</p>
    <div class="frame-container">
      <div v-if="frame.orientation === 'Horizontal'" class="frame">
        <figure class="container-img u-h">
          <div class="frame-img-H" :style="`background: url(${pattern})`">
            <img class="animal-frame-h" :src="`${sendImage}/no-bg.png`"  alt="Seu pet em exemplo de um quadro" />
          </div>
        </figure>
      </div>
      <div v-if="frame.orientation === 'Vertical'" class="frame">
        <figure class="container-img u-v">
        <div class="frame-img-V" :style="`background: url(${pattern})`">
            <img class="animal-frame-v" :src="`${sendImage}/no-bg.png`" alt="Seu pet em exemplo de um quadro" />
          </div>
        </figure>
      </div>
    </div>
    <div class="picker" style="gap: 10px">
      <button class="button green" @click="frame.orientation = 'Horizontal'"> Horizontal </button>  
      <button class="button green" @click="frame.orientation = 'Vertical'"> Vertical </button>
    </div>
    <div>
    <img class="choice-dog" src="../assets/images/dog.png">
    <button class="button-center button-cart" @click="addToCart"> Adicionar ao Carrinho</button>
    </div>
    <a href="#" class="link-choice">Fazer Novamente</a>
  </section>
</template>

<script>
export default {
  props: {
    pattern: {
      type: String,
      default: 'https://i.pinimg.com/736x/80/76/91/8076913441130209adcc5e05c8bfb6db.jpg'
    },
    sendImage: {
      type: String,
      default: '/img/no-bg.5c94ee35.png'
    }
  },

  data () {
    return {
      frame: {
        sendImage: null,
        pattern: null,
        orientation: 'Horizontal'
      },
    }
  },

  methods: {
    addToCart () {
      this.frame.sendImage = this.sendImage
      this.frame.pattern = this.pattern
      alert(JSON.stringify(this.frame))
    }
  }
}
</script>

<style>
.choice-title {
  max-width: 500px;
  text-align: center;
  margin: 10px auto;
  padding: 10px;
  color: rgb(20, 190, 20);
  font-size: 1.25rem;
    text-shadow: 1px 2px 0 rgb(0 0 0 / 30%);
  /* color: #6ec1e4; */
 color: #448cab;
}
.choice-dog {
  width: 100%;
  max-width: 550px;
  margin: 40px auto;
  display: grid;
}
.is-center {
  margin: 0 auto !important;
  text-align: center;
}
.frame-container {
  /* display: grid; */
  gap: 20px;
}
.frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  width: 100%;
}
.frame-title {
  border-radius: 40px;
  background: #1b5168;
  padding: 11px;
  font-weight: 800;
  font-size: 1.125rem;
  margin: 10px;
  text-align: center;
  max-width: 300px;
}

.container-img {
  max-width: 300px;
  width: 100%;
  height: 500px;
}
.container-img.u-h {
  background-image: url("../assets/images/Horizontal.png");
  background-repeat: no-repeat;
  background-color: #cccccc;
  background-size: cover;
  background-position: 38%;
  border-radius: 0.625rem;
  position: relative;

}
.frame-img-H{
  background-repeat: no-repeat;
  background-size: cover;
  width: 255px;
  height: 207px;
  position: relative;
  top: 23px;
  left: 7px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
  margin: 0;
}
.animal-frame-h{
  max-width: 100%;
  align-self: end;
  align-self: end;
  justify-content: center;
  z-index: 200;

}
.container-img.u-v {
  background-image: url("../assets/images/Vertical.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 0.625rem;
  position: relative;
}
.frame-img-V {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 208px;
  height: 254px;
  position: relative;
  top: 22px;
  left: 36px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
}
.animal-frame-v{
  max-width: 100%;
  align-self: end;
  justify-content: center;
  z-index: 200;

}
.button-center {
  display: block;
  outline: transparent;
  max-width: 30rem;
  padding: 15px;
  font-size: 1.125rem;
  font-weight: 700;
  width: 70%;
  border-radius: 0.625rem;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 20px auto;
    background: linear-gradient(0deg, #1b5168 -70%, #6ec1e4 100%);

  transition: 0.3s ease;
  
}
.button-center:hover {
  border: 1px solid rgba(0, 0, 0, 0.2);
    background: linear-gradient(0deg, #1b5168 -50%, #6ec1e4 100%);

}
.link-choice{
  color: #fff;
  font-size: 0.9375rem;
  display: block;
  margin: 5px auto;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease;

}
.link-choice:hover{
  color: #1b5168;

}
@media (min-width: 330px) {
  .frame-img-H{
  background-repeat: no-repeat;
  background-size: cover;
  width: 258px;
  height: 207px;
  position: relative;
  top: 23px;
  left: 15px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
  margin: 0;
}
}
@media (min-width: 375px) {
  .frame-img-H{
  background-repeat: no-repeat;
  background-size: cover;
  width: 252px;
  height: 207px;
  position: relative;
  top: 23px;
  left: 22px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
  margin: 0;
}
  .frame-img-V {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 199px;
  height: 254px;
  position: relative;
  top: 22px;
  left: 50px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
}
}
@media (min-width: 650px) {
  .container-img {
  max-width: 400px;
  width: 100%;
  height: 500px;
}
.frame-img-H{
  background-repeat: no-repeat;
  background-size: cover;
  width: 252px;
  height: 200px;
  position: relative;
  top: 30px;
  left: 60px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
  margin: 0;
}
.frame-img-V {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 245px;
  height: 254px;
  position: relative;
  top: 22px;
  left: 63px;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

}

</style>