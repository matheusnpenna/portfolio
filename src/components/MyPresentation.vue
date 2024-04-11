<template>
  <section class="presentation-component py-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-2">
      <div>
        <h1 class="text-5xl mb-8">Hey, eu sou Matheus Penna</h1>
        <p>
          Sou um engenheiro de software altamente experiente e com uma profunda paixão por tecnologia. Tenho a sorte de ter estabelecido uma carreira que gira em torno do meu amor pelo desenvolvimento de software. Reconhecido por encontrar soluções inovadoras para problemas complexos, estou sempre pronto para abraçar um desafio.
          <br/>
          <br/>
          Com mais de 10 anos de experiência na área, tive o privilégio de trabalhar em uma ampla gama de projetos de software, desde soluções de pequeno até grande porte. Possuo uma abordagem prática no meu trabalho, orgulhando-me de todas as facetas do processo de desenvolvimento de software, desde o design até a implantação bem-sucedida.
          <br/>
          <br/>
          Como um fervoroso entusiasta da tecnologia, estou continuamente me esforçando para me manter atualizado com os últimos avanços na área. Meu objetivo é aprimorar continuamente minhas habilidades e crescer como engenheiro de software, ao mesmo tempo que contribuo para a criação de soluções inovadoras e impactantes.
        </p>
      </div>
      <div class="img-wrapper flex justify-center">
        <img class="personal-img" src="@/assets/img/mp-rounded.webp" width="388.3" height="400" />
        <img class="personal-img-2" src="@/assets/img/mp2-rounded.webp" width="375" height="375" />
        <img class="personal-img-3" src="@/assets/img/mp3-rounded.webp" width="375.8" height="375" />
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.presentation-component{
  .img-wrapper {
    position: relative;
    & > * {
      flex-shrink: 0;
      object-fit: contain;
      position: absolute;
    }

    .personal-img {
      top: 0;
      left: 0;
    }
    .personal-img-2 {
      top: 50%;
      left: 30%;
    }
    .personal-img-3 {
      top: 0%;
      left: 60%;
    }
  }
}
</style>
