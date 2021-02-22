<template>
  <section class="container">
    <v-select :options="options" value="Flores"></v-select>
    <div class="wrapper-picker">
      <hooper :settings="hooperSettings" style="height: 300px;">
        <slide v-for="(item, i) in background.flowers" :key="i">
          <div class="full" :style="`background: url('${item.url}')`" />
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>

        <div class="pet">
          <img :src="`${image}/unchanged.png`" />
        </div>
      </div>
    <button class="button green" v-on:click="submitFile()">Eu quero esse!</button>
  </section>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css';
import 'vue-select/dist/vue-select.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },

  props: {
    image: {
      type: String
    }
  },

  data () {
    return {
      verticalClass: '',
      horizontalClass: '',
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        vertical: true,
        infiniteScroll: true
      },

      options: ['Flores'],

      background: {
        flowers: [
          { name: 'flower', url: 'https://i.pinimg.com/736x/80/76/91/8076913441130209adcc5e05c8bfb6db.jpg' },
          { name: 'flower', url: 'https://i.pinimg.com/originals/07/de/e1/07dee1bc00490f137675b969a7d5c90a.png' },
          { name: 'flower', url: 'https://png.pngtree.com/png-clipart/20200224/original/pngtree-hand-drawn-illustration-of-seamless-floral-pattern-design-png-image_5222431.jpg' }
        ]
      }
    }
  },

  methods: {
    setOrientation (orientation) {
      if (orientation === 'vertical') {
        this.verticalClass = ''
        this.horizontalClass = ''
      } else {
        this.horizontalClass = ''
        this.verticalClass = ''
      }
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
.v-select {
  margin-bottom: 10px;
  min-width: 250px;
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
  width: 90%;
}
.full {
  width: 100%;
  height: 100%;
}
.hooper-prev,
.hooper-next {
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
  border: 5px solid #98c7f7;;
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
  font-size: 1.125rem;
  font-weight: 700;
  width: 50%;
  border-radius: 10px;
  font-weight: 500;
  border: 1px solid rgba(0,0,0, .0);
  margin: 20px 0;
  background-color: #98c7f7;
  transition: .3s ease;
}
.button:hover{
  border: 1px solid rgba(0,0,0, .2);

}
.green {
  background-color: #b3e7c8ff;
}
</style>