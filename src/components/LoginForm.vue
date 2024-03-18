<script setup lang="ts">
import { useRouter } from 'vue-router';
import {ref} from "vue";
import {login} from '@/mock/user';


const router = useRouter()

const username=ref('')
const passwd=ref('')

function onSubmit() {
  const {success,user,message} = login(username.value,passwd.value);

  if (success) {
    console.log('登录成功，角色：', user.role);
    // 根据用户角色进行权限控制
    switch (user.role) {
      case '普通用户':
        router.push("/worker");
        break;
      case '主任':
        router.push("/supervisor");
        break;
      case '厂长':
        router.push("/director");
        break;
      case '管理员':
        router.push("/adminn");
        break;
      default:
        break;
    }
  } else {
    console.log('登录失败：', message);
  }
}
</script>

<template>
  <div id="form">
    <div id="form_title">用户登录</div>

    <div id="form_wrapper">
      <el-form
          label-position="top"
      >
        <el-form-item label="用户名">
          <el-input v-model="username"/>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="passwd"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<style scoped>
#form{
  background: white;
  width: 550px;
  min-width: 500px;
  height: 100%;
}

#form_title{
  font-size: 40px;
  color: black;
  text-align: center;
  letter-spacing: 4px;
  padding-top: 200px;
  font-family: "YY";
}

#form_wrapper{
  width: 100%;
  height: fit-content;
  padding: 50px 100px;
}

.el-form{
  width: 350px;
}

.el-form-item{
  margin-bottom: 40px;
}

.el-button{
  margin-top: 10px;
  width: 100%;
}
</style>