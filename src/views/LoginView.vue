<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";



</script>

<template>
<div id="all">

  <div id="login_wrapper">
    <!--  系统标题-->
    <div id="title">
      <p class="title_one">建新化工</p>
      <p class="title_two">生产流程管理平台</p>
      <p class="title_three">Cangzhou Jianxin Group Chemical Production Process Management Platform</p>
    </div>

    <!--  登录表单-->
    <div>
      <LoginForm/>
    </div>
  </div>
</div>
</template>

<style scoped>

#all{
  background-image: url("src/assets/login.jpeg");
  width: 100%;
  min-width: 1800px;
  height: 100%;
}

#login_wrapper{
  width: 100%;
  min-width: 1800px;
  height: 100%;
  padding: 0 0 0 180px;
  display: flex;
  justify-content: space-between;
  position: absolute;
}

#title{
  width: fit-content;
  min-width: 800px;
  height: 500px;
  padding: 270px 0;
}

.title_one{
  line-height: 150px;
  font-size: 150px;
  color: white;
  letter-spacing: 5px;
  font-weight: lighter;
}

.title_two{
  line-height: 130px;
  font-size: 90px;
  color: white;
  letter-spacing: 5px;
  font-weight: lighter;
}

.title_three{
  line-height: 30px;
  font-size: 19px;
  letter-spacing: 2px;
  color: #a4a4a4;
  font-weight: lighter;
}
</style>
