<template>
  <section class="choice">
      <h2 class="choice-title">ATENÇÃO! NÃO SE PREOCUPE, VAMOS ENTRAR EM CONTATO VIA WHATSAPP
PARA ALINHAMENTO FINAL DA ARTE JUNTO COM VOCÊ.</h2>
<div class="frame-container">
<div class="frame">
    <p class="frame-title">RESULTADO HORIZONTAL</p>
        <img src="./cachorro.png" alt="">
    <button class="button green">SELECIONAR</button>
</div>
<div class="frame">
    <p class="frame-title">RESULTADO VERTICAL</p>
        <img src="./cachorro.png" alt="">
    <button class="button green">SELECIONAR</button>
</div>
</div>
    <button class="button-center">FECHAR PEDIDO</button>

  </section>
</template>

<style>
  .choice-title{
    max-width: 400px;
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    color: rgb(20, 190, 20);
    font-size: 1.25rem;
  }
  .frame-container{
    display: grid;
    gap: 20px;
  }
  .frame{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
  

  }
  .frame-title{
    border-radius: 50%;
    background: #98c7f7;
    padding: 20px;
    font-size: 1.125rem;
    margin: 10px;
    text-align: center;
    max-width: 300px;
    width: 280px;
  }
  img{
    max-width: 250px;
    min-width: 200px;
  }
  .button-center{
  display: block;
  outline: transparent;
  max-width: 30rem;
  padding: 15px;
  font-size: 1.125rem;
  font-weight: 700;
  width: 50%;
  border-radius: 10px;
  font-weight: 500;
  border: 1px solid rgba(0,0,0, .0);
  margin: 20px auto;
    background-color: #b3e7c8ff;
  transition: .3s ease;
  }
  .button-center:hover{
  border: 1px solid rgba(0,0,0, .2);

  }
  @media (min-width:600px){
    .frame-container{
    grid-template-columns: repeat(2, minmax(250px, 1fr));

    }
  }
</style>