<template>
  <section class="choice">
    <h2 class="choice-title">
      ATENÇÃO! NÃO SE PREOCUPE, VAMOS ENTRAR EM CONTATO VIA WHATSAPP PARA
      ALINHAMENTO FINAL DA ARTE JUNTO COM VOCÊ.
    </h2>
    <div class="frame-container">
      <div class="frame">
        <p class="frame-title">RESULTADO HORIZONTAL</p>
        <figure class="container-img u-h">
          <div class="frame-img-H">
            <img class="animal-frame-h" src="../assets/images/no-bg.png" alt="Seu pet em exemplo de um quadro" />
          </div>
        </figure>
        
        <button class="button green">SELECIONAR</button>
      </div>
      <div class="frame">
        <p class="frame-title">RESULTADO VERTICAL</p>
        <figure class="container-img u-v">
        <div class="frame-img-V">
            <img class="animal-frame-v" src="../assets/images/no-bg.png" alt="Seu pet em exemplo de um quadro" />
          </div>
        </figure>
        <button class="button green">SELECIONAR</button>
      </div>
    </div>
    <button class="button-center">FECHAR PEDIDO</button>
  </section>
</template>

<style>
.choice-title {
  max-width: 500px;
  text-align: center;
  margin: 10px auto;
  padding: 10px;
  color: rgb(20, 190, 20);
  font-size: 1.25rem;
}
.frame-container {
  display: grid;
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
  border-radius: 50%;
  background: #98c7f7;
  padding: 20px;
  font-size: 1.125rem;
  margin: 10px;
  text-align: center;
  max-width: 300px;
  width: 280px;
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
  background-position: 35%;
  border-radius: 0.625rem;
  position: relative;

}
.frame-img-H{
  background-image: url("https://i.pinimg.com/736x/80/76/91/8076913441130209adcc5e05c8bfb6db.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 252px;
  height: 207px;
  position: relative;
  top: 23px;
  left: 28px;
  border-radius: 0.625rem;
  display: grid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;

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
  background-position: 45%;
  border-radius: 0.625rem;
  position: relative;
}
.frame-img-V {
  background-image: url("https://i.pinimg.com/736x/80/76/91/8076913441130209adcc5e05c8bfb6db.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 197px;
  height: 254px;
  position: relative;
  top: 22px;
  left: 59px;
  border-radius: 0.625rem;
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
  width: 50%;
  border-radius: 0.625rem;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0);
  margin: 20px auto;
  background-color: #b3e7c8ff;
  transition: 0.3s ease;
  
}
.button-center:hover {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
@media (min-width: 650px) {
  .frame-container {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

}

</style>