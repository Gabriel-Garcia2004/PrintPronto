<template>  
<div class="container">
    <div class="info">
      <span> <b> Produto: </b>Quadro Personalizado </span>
      <br />
      <span> <b> Tamanho: </b> 45x55CM </span>
      <br />
      <div class="input-container">
      <label for="quantity">Quantidade:</label>
      <input type="number" name="image" id="quantity" value="1">
      </div>
      <br />
      <span><b> Valor: </b> R$300,00 </span>
      <br />
    </div>
    <button class="button"> Continuar </button>
 </div>
</template>

<style scoped>
button {
    margin: 20px 0;
    padding: 10px 7px;
    width: 100%;
}
#quantity {
    width: 30px;
    margin: 0 10px;
}
</style>