<template>
  <div v-loading="loginLoading" class="login">
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px">
      <h3>系统登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {

  name: 'Login',
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginLoading: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules:
                    {
                      username: [
                        { validator: checkName, trigger: 'blur' }
                      ],
                      password: [
                        { validator: checkPassword, trigger: 'blur' }
                      ]
                    }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginLoading = true
          setTimeout(() => {
            this.loginLoading = false
            if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123') {
              sessionStorage.setItem('username', this.ruleForm.username, 'password', this.ruleForm.password)
              this.$router.push('/')
            } else {
              this.$message.error('username or password is error')
            }
          }, 1000)
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
