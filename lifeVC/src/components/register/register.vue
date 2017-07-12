<template>
  <div >
    <article id="registerBg" class="acct-wrap"
             style="margin-top: 0px; overflow: hidden; height: 667px; padding: 0px;">
      <div class="old_user_login"><label class="acct_top_back" @click="back"></label>
        <img src="./loginImg.png" class="acct_top_show"></div>
      <div class="bg-wrap" style="height: 526px;">
        <div class="login_content"><h1 style="padding-bottom: 0px;">新用户注册</h1>
          <div id="wrap">
            <form id="register-form">
              <ul class="fm_list register_distance">
                <li><input id="txtMobile" type="tel" maxlength="11"
                           placeholder="请输入手机号" required="required" class="field_ipt"></li>
                <li><input type="text" maxlength="20"
                           placeholder="请设置6-20位密码,包含字母、数字或符号" id="regPwd" required="required"
                           class="field_ipt"></li>
                <li><input required="required" type="text" maxlength="10"
                           id="regCaptcha" placeholder="请输入图形验证码" class="field_ipt"
                           style="width: 70%;">
                  <div class="verifycode_img"><img
                    src="http://account.lifevc.com/Account/NewVerifyCode?t=1499824010878"
                    style="width: 20%; border-left: 0px solid silver;"> <img src="./refresh.png" style="width: 5%;"></div>
                </li>
                <li><input type="text" placeholder="请输入手机验证码" maxlength="10"
                           id="regSmsCaptcha" required="required" class="field_ipt"> <a
                  class="fidld_skip">获取验证码</a></li>
              </ul>
              <p>遇到问题？请
              <a href="tel:400-609-2288">联系客服</a></p>
              <input type="button" value="注册" class="btn_login space m-top">
              <router-link to="/login">
                <input type="button" value="登录" class="btn_regisiter space m-top">
              </router-link>
              </form>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    created () {
    },
    methods: {
        back () {
            window.history.back()
        }
    },
    components: {},
    computed: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #registerBg
      width: 100%;
      bottom 0
      top 0
      z-index: 999;
      position: fixed
    .acct-wrap
      margin-bottom: 0;
      .old_user_login
        width: 100%;
        height: 141px;
        background: #fff;
        position: relative;
        .acct_top_back
          width: 26px;
          height: 26px;
          display: block;
          border-radius: 50%;
          position: absolute;
          left: .3rem;
          top: 46px;
          border: 1px solid #3aad36;
        .acct_top_back:after
          content: "";
          width: 14px;
          height: 14px;
          display: block;
          border-left: 1px solid #3aad36;
          border-top: 1px solid #3aad36;
          position: absolute;
          left: 10px;
          top: 5px;
          -webkit-transform: rotate(-45deg);
        .acct_top_show
          width: 9.4rem;
          overflow: hidden;
          display: block;
          position: absolute;
          top: 30%;
          left: 39%;
          margin-left: -1.2rem;
      .bg-wrap
        background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
        background-size: 100% 100%;
        background-position: bottom;
        .login_content
          width: 100%;
          height: 325px;
          box-sizing: border-box;
          h1
            height: 52px;
            width: 100%;
            text-align: center;
            color: #037049;
            font-size: 20px;
            line-height: 52px;
            box-sizing: border-box;
          .register_distance
            box-sizing: border-box;
            margin-bottom: .2rem;
            height 204px
            li
              width: 90%;
              margin: 0 auto;
              height: 51px;
              border-bottom: 1px solid #dbdbdb;
              position: relative;
              .field_ipt
                font-size: 16px;
                width: 100%;
                background: transparent;
                position: absolute;
                left: 0;
                top: 0;
                height: 50px;
                box-sizing: border-box;
                border: 0;
              .verifycode_img
                position: absolute;
                right: -70%;
                width: 100%;
                top: 13px;
                img
                  margin-right 10px
              .fidld_skip
                width 112px
                height 31px
                line-height 31px
                display: inline-block;
                float: right;
                font-size: 16px;
                color: #3aad36;
                text-align center
                border: 1px solid #3aad36;
                border-radius: 4px;
                margin-top 9px
          p
            font-size: 14px;
            color: #666;
            width: 100%;
            text-align: center;
            margin-bottom: .1rem;
            height: 21px;
            line-height: 21px;
            a
              color: #3ea438;
              text-decoration: underline;
          .btn_login, .btn_regisiter
            width: 80%;
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            color: #fff;
            line-height: .72rem;
            letter-spacing: 20px;
            text-indent: 20px;
            box-sizing: border-box;
            height 38px
          .btn_login
            margin: 0 auto .3rem;
            background-color: #3aad36;
            border: 1px solid #3aad36;
            border-radius: 5px;
          .btn_regisiter
            margin: 10px auto 0;
            background-color: #8a8a8a;
            border: 1px solid #8a8a8a;
            border-radius: 5px;
            opacity: .5;
            width: 80%;
            overflow: hidden;
            display: block;
            outline: none;
            text-align: center;
            font-size: 19px;
            color: #fff;
            line-height: .72rem;
            letter-spacing: 20px;
            text-indent: 20px;
            box-sizing: border-box;
</style>
