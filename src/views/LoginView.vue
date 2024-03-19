<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <div id="all">
    <div class="l_wrapper">
      <div class="title_group">
        <p class="title_one">建新化工</p>
        <p class="title_two">生产流程管理平台</p>
        <p class="title_three">Cangzhou Jianxin Group Chemical Production Process Management Platform</p>
      </div>
    </div>

    <div class="r_wrapper">
      <LoginForm />
    </div>
  </div>
</template>

<style scoped>
#all {
    width: 100vw;
    height: 100vh;
    display: flex;

    background-image: url("src/assets/login.jpeg");
    background-size: cover;
    background-position: center;
}

.l_wrapper {
    flex: 2;
}

.r_wrapper {
    flex: 1;
    background-color: #fff;
}

.title_group {
    padding: 25vh 0 0 10vw;
}

.title_one, .title_two, .title_three {
    color: #fff;
    font-weight: lighter;
    line-height: 0;
}

.title_one {
    font-size: 7vw;
}

.title_two {
    font-size: 5vw;
}

.title_three {
    color: #a4a4a4;
    font-size: 1vw;
    letter-spacing: .1vw;
}
</style>
