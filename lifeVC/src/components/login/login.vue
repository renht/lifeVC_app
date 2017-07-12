<template>
  <div>
    <article id="loginBg" class="acct-wrap"
             style="margin-top: 0px; overflow: hidden; height: 667px;">
      <div class="old_user_login">
        <label class="acct_top_back" @click="back"></label>
        <img src="./loginImg.png" class="acct_top_show">
      </div>
      <div class="bg-wrap" style="height: 526px;">
        <div class="login_content"><h1>老用户登录</h1>
          <div id="wrap">
            <div style="display: none;">
              <form id="reset-form">
                <ul class="fm_list">
                  <li class="multi"><input required="required" type="tel"
                                           maxlength="11" placeholder="请输入手机号" class="field_ipt"> <a
                    class="fidld_skip">获取验证码</a></li>
                  <li><input required="required" type="text" maxlength="10"
                             id="loginVerifyCode" placeholder="请输入手机验证码" class="field_ipt"></li>
                </ul>
                <div class="set_link"><p class="problem_contact_service">遇到问题？请
                  <a href="tel:400-609-2288">联系客服</a></p> <a><b
                ></b> <span>账号密码登录</span></a></div>
              </form>
            </div>
            <div>
              <form id="login-form">
                <ul class="fm_list">
                  <li><input type="tel" maxlength="11" placeholder="请输入手机号"
                             required="required" class="field_ipt"></li>
                  <li class="multi"><input type="password" maxlength="20"
                                           placeholder="请输入登录密码" required="required"
                                           class="field_ipt"> <a
                    class="fidld_skip">忘记密码</a></li>
                </ul>
                <div id="setting" class="set_link"><a href="javascript:;"><span
                >手机号快捷登录</span> <b></b></a></div>
              </form>
            </div>
            <input type="button" value="登录" class="btn_login"> <input
            type="button" value="注册"
            class="btn_regisiter"></div>
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
  #loginBg
    width: 100%;
    padding: 0;
    z-index: 999;
    position: fixed
  .acct-wrap
    margin-bottom: 0;
    .old_user_login
      width: 100%;
      background: #fff;
      position: relative;
      height:141px
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
      img
        vertical-align: middle;
        border: 0 none;
        max-width: 100%;
    .bg-wrap
      background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
      background-size: 100% 100%;
      background-position: bottom
      .login_content
        width: 100%;
        height: 325px;
        box-sizing: border-box;
        h1
          width: 100%;
          text-align: center;
          color: #037049;
          font-size: 20px;
          line-height: 84px;
          box-sizing: border-box;
          height: 84px;
        #wrap
          height:243px
          #login-form
            height:152px
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
              .fidld_skip
                width: 96px
                height: 31px
                display: inline-block;
                float: right;
                font-size: 16px;
                color: #3aad36;
                text-decoration: none;
                border: 1px solid #3aad36;
                border-radius: 4px;
                padding: 0.08rem .3rem;
                text-align: center;
                position: absolute;
                right: 0;
                top: .2rem;
            .set_link
              padding: .18rem 0 .4rem;
              text-align: right;
              height: 50px;
              width: 90%;
              margin: 0 auto;
              font-size: 16px;
              box-sizing: border-box;
              position: relative;
              a
                color: #3aad36;
                letter-spacing: 1px;
                font-size: 15px;
                margin: 0 0 .8rem;
                span
                  float: right;
                  line-height: .4rem;
                  margin-right: .14rem;
                  height 20px
                  margin-top 3px
                  text-align center
                  padding 6px 0
                b
                  width: 8px;
                  height: 8px;
                  display: block;
                  position: absolute;
                  right: 0;
                  top: .28rem;
                  border-top: 1px solid;
                  border-right: 1px solid;
                  -webkit-transform: rotate(45deg);
                  margin 8px -5px
        .btn_login
          width: 80%;
          height 38px
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
          margin: 0 auto .3rem;
          background-color: #3aad36;
          border: 1px solid #3aad36;
          border-radius: 5px;
        .btn_regisiter
          height 38px
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
