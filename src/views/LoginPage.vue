<script setup>
import {Management} from "@element-plus/icons-vue";
import { UserOutlined ,LockOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <a-flex class="login-page-el-flex">
    <a-card bordered:true class="login-page-el-card">
      <a-space style="width: 100%;" direction="vertical" size="large">
        <el-icon size="70px" color="rgb(37, 99, 255)"><Management /></el-icon>
        <div>
          <h1>登录</h1>
          <a-input  placeholder="请输入用户名">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </div>
        <a-input-password v-model:value="value" placeholder="input password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-space>

    </a-card>
  </a-flex>
</template>

<style scoped>
.login-page-el-flex {
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgb(243,244,246);
}
.login-page-el-card {
  height: 60vh;
  width: 20vw;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255);
  border-radius: 5px;
  text-align: center;
}
</style>