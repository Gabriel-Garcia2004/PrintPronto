<template>
  <div class="container">
    <div class="upload">
      <input type="file" @change="uploadFile()" name="file" ref="file" value="Enviar foto" class="upload__button" /> 
    </div>
    <div class="text-container">
      <p class="text">Pode ser pelo celular ou pelo computador.</p>
      <p class="text">
        Faremos o recorte da foto do seu pet para usarmos na arte.
      </p>
    </div>
    <button class="button mb-0" v-on:click="submitFile()">Enviar</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: '',
      api: 'http://192.168.0.116:8080/',
      imageUrl: ''
    }
  },

  methods: {
    submitFile () {
      let formData = new FormData()
      formData.append('file', this.file)
      this.$http.post(`${this.api}/removebg.php`,
        formData,
        {
          header: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          this.imageUrl = this.api + response.data.url
          console.log(this.imageUrl)
          this.$emit('loadImage', this.imageUrl)
        })
        .catch(error => { alert(error) })
    },

    uploadFile () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 1.25rem auto;
  padding: 0.625rem 0;
}
.upload {
  border: 2px dashed rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  max-width: 200px;
  margin-bottom: 20px;
}
.upload__button {
  background-color: #98c7f7;
  font-size: 10px;
  padding: 0.3125rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: transparent;
  border-radius: 0.3125rem;
}
.upload__button:hover {
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.text-container{
  text-align: center;
  max-width: 500px;
  margin: 20px;
}
.text{
  font-size: 0.90rem;
}
</style>