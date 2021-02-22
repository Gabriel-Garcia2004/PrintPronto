<template>  
<div class="container">
    <div class="info">
      <span class="span"> <b class="span-title"> Produto: </b>Quadro Personalizado </span>
      <br />
      <span class="span"> <b class="span-title"> Tamanho: </b> 45x55CM </span>
      <br />
      <div class="input-container">
      <label for="quantity">Quantidade:</label>
      <input type="number" name="image"  class="quantity" id="quantity" min="0" value="1">
      </div>
      <br />
      <span class="span"><b class="span"> Valor: </b > R$300,00 </span>
      <br />
    </div>
    <button class="button"> Continuar </button>
 </div>
</template>

<style scoped>
.info{
    display: flex;
    flex-direction: column;
}
.span{
    font-size: 1.5rem;
    font-weight: 600;
}
.input-container{
    display: flex;
    align-items: center;
}
label{
    font-size: 1.5rem;
    font-weight: 600;
}
.quantity {
    width: 50px;
    margin: 0 10px;
    padding: 5px;
    text-align: center;
}
  .frame-img-H{
    max-width: 500px;

  }
  .frame-img-V{
    max-width: 500px;
    min-width: 250px;
  }
</style>