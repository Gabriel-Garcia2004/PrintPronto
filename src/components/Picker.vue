<template>
  <section class="container c-white">
    <!-- <v-select :options="options" value="Flores"></v-select> -->
    <div class="wrapper-picker">
      <hooper :settings="hooperSettings" style="height: 300px;" ref="carousel" @slide="updateCarousel">
        <slide v-for="(item, i) in background" :key="i">
          <div class="full" :style="`background: url('${item.url}')`" />
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>

        <div class="pet">
          <img :src="`${image}/no-bg.png`" />
        </div>
      </div>
      <div class="picker">
        <button class="button green" @click.prevent="slidePrev">
          ⇐
        </button>
        <button class="button choice" v-on:click="setPicker">Escolher</button>
        <button class="button green" @click.prevent="slideNext">
          ⇒
        </button>
      </div>
  </section>
</template>

<script>
import {
  Hooper,
  Slide
} from 'hooper'
import 'hooper/dist/hooper.css';
import 'vue-select/dist/vue-select.css';

export default {
  components: {
    Hooper,
    Slide,
  },

  props: {
    image: {
      type: String
    }
  },

  data () {
    return {
      carousel: null,
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        vertical: true,
        infiniteScroll: false
      },

      options: ['Flores'],
      background: [
          { name: 'flower', url: 'https://i.pinimg.com/736x/80/76/91/8076913441130209adcc5e05c8bfb6db.jpg' },
          { name: 'flower', url: 'https://i.pinimg.com/originals/07/de/e1/07dee1bc00490f137675b969a7d5c90a.png' },
          { name: 'flower', url: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-hand-drawn-illustration-of-seamless-floral-pattern-design-png-image_5222431.jpg' }
        ]
    }
  },

  methods: {
    updateCarousel (payload) {
      this.carousel = payload.currentSlide
    },
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    },
    setPicker () {
      this.$emit('setPicker', this.background[this.carousel].url)
    }
  }
}
</script>

<style>
.container{
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.c-white {
  background: rgb(250, 250, 250);
  border-radius: 15px;
}
.v-select {
  margin-bottom: 10px;
  min-width: 250px;
}
.picker {
  display: flex;
}
.choice {
  margin: 15px !important;
}
.pet {
  position: relative;
  top: -275px;
  height: 0px;
}
.full {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .pet { top: -200px; }
}
.pet img {
  width: 100%;
}
.full {
  width: 100%;
  height: 100%;
}
.hooper-prev,
.hooper-next {
  z-index: 9999;
  outline: none;
  padding: 15px;
  margin: 10px;
  background-color: #98c7f7;
}
.hooper-next {
  border-radius: 20px;
}
.hooper-prev {
  border-radius: 20px;
}
.wrapper-picker {
  max-width: 30rem;
  border: 5px solid #1b5168;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px auto;
}
.button-container{
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  margin: 0 auto;
}
.button {
  outline: none;
  max-width: 30rem;
  padding: 15px;
  font-size: 0.9rem;
  font-weight: 600 !important ;
  width: 90%;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  border: 0;
  margin: 20px 0;
  background: linear-gradient(0deg, #1b5168 -10%, #6ec1e4 220%);

  transition: .6s ease-in-out;
}
.button-cart {
  background: #b3e7c8ff !important;
  color: rgb(80, 80, 80);
  margin: 20px auto !important;
  width: 100% !important;
}
.button:hover{
  border: 1px solid rgba(0,0,0, .2);
    background: linear-gradient(0deg, #1b5168 -500%, #6ec1e4 100%);

}
.green {
  background-color: #b3e7c8ff;
}
</style>