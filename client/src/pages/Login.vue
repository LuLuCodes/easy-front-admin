<template>
  <div class="login flexbox">
    <div class="login-box">
      <h1 class="center-text"><img src="../assets/images/logo.png" alt=""></h1>
      <div class="login-content">
        <div class="login-graphic img-auto pull-left">
          <img src="../assets/images/login.png" alt="">
        </div>
        <div class="login-form pull-right flexbox">
          <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" >
            <FormItem prop="user">
              <Input type="text" v-model="formLogin.user" placeholder="账号" autofocus>
                <Icon class="icon icon-user" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formLogin.password" placeholder="密码" @on-enter="handleSubmit('formLogin')">
                <Icon class="icon icon-password" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <Checkbox v-model="rememberPwd">记住密码</Checkbox>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formLogin')" size="large" long :loading="entrying">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        entrying: false,
        rememberPwd: true,
        formLogin: {
          user: '',
          password: ''
        },
        ruleLogin: {
          user: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.entrying) {
              return;
            }
            this.entrying = true;
          }
        });
      }
    }
  };
</script>

<style scoped>

</style>
