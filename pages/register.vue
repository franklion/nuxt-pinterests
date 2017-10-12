<template>
  <section class="container register">
    <div class="row">
      <div class="col-lg-6">
        <div class="register-panel">

          <h2 class="title">註冊</h2>

          <div class="content-block">
            <div class="form-group">
              <label>統一編號</label>
              <input type="text" class="form-control" placeholder="統一編號" maxlength="8" v-model="uniformNo">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="6~12 個英數混合字元" maxlength="12" v-model="password">
            </div>
            <div class="form-group">
              <label>RePassword</label>
              <input type="password" class="form-control" placeholder="再次輸入密碼" v-model="rePassword">
            </div>
          </div>

          <div class="btn-block">
            <input class="btn btn-primary" type="submit" value="送出" @click="onSend">
            <input class="btn btn-primary" type="reset" value="取消">
          </div>
        </div>

      </div>
    </div>

  </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import formAuth from '~/plugins/formAuth.js'

export default {
  data() {
    return {
      toggle: false,
      errorMsg: '',
      uniformNo: null,
      password: null,
      rePassword: null,
    }
  },
  computed: {
    ...mapGetters({
      getUniformNo :'getUniformNo',
      getPassword: 'getPassword',
      getRePassword: 'getRePassword',
    })
  },
  watch:{
    // getUniformNo(v) {
    //   this.uniformNo = v
    // },
    // getPassword(v) {
    //   this.password = v
    // },
    // getRePassword(v) {
    //   this.rePassword = v
    // },
  },
  methods: {
    onDebug() {
      this.uniformNo = 80653782
      this.password = 'a123456'
      this.rePassword = 'a123456'
    },
    onSend() {
      // 檢查帳號(統一編號)
      if (!formAuth.isLegalAccount(this.uniformNo)) {
        this.errorMsg += '請輸入正確的帳號!\n'
      }

      // 檢查密碼
      if (!formAuth.isLegalPassword(this.password)) {
        this.errorMsg += '請輸入正確的密碼!\n'
      }

      // 檢查密碼和再次輸入密碼是否相同
      if (!formAuth.isLegalRePassword(this.password, this.rePassword)) {
        this.errorMsg += '再次輸入密碼與密碼不相同!\n'
      }

      if(this.errorMsg) {
        alert(this.errorMsg)  
        this.errorMsg = ''
        return;
      }


      console.log('資料格式正確 準備串接API ...')

      // 呼叫vuex送出資料
      this.actionAddRegister({
        'uniformNo': this.uniformNo,
        'password': this.password,
        'rePassword': this.rePassword,
      })
        .then((response) => {
          alert(response)
          this.$router.push('/')
        })
        .catch((e) => {
          alert(e)
        })
    },
    ...mapActions([
      'actionGetRegister',
      'actionAddRegister',
      'actionUpdateRegister',
    ])
  },
  mounted() {
    // this.onDebug()
    this.actionGetRegister()
    .then((response)=>{
      console.log(response)
      this.uniformNo = this.getUniformNo
      this.password = this.getPassword
      this.rePassword = this.getRePassword
    })
    .catch((e)=>{
      console.log(e)
    })
  }
}
</script>

<style lang="scss">
.register {
  padding-top: 100px;
  .row {
    justify-content: center;
  }
  .register-panel {
    padding: 20px 25px;
    border: solid #f7f7f9;
  }
  .title {
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  .btn-block {
    display: flex;
    justify-content: flex-end;
    .btn {
      margin: 0 15px;
      cursor: pointer;
    }
  }
}
</style>



