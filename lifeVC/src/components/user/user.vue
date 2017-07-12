<template>
    <div>
      <header  id="topbar" class="header">
        <div  class="header-content">
        </div>
        <div class="header-content">
          <p class="header-title">账户中心</p>
          <a href="/setting">
            <label class="editcart">设置</label>
          </a>
        </div>
      </header>
      <div class="acct-user-wrap"><!---->
        <div class="acct-nolog">
          <span class="state">您还未登录</span>
          <div class="btn-entry">
            <a href="/login" class="font-large">登录</a>
            <span class="split"></span>
            <a href="/register" class="font-large">注册</a>
          </div>
        </div>
      </div>
      <div class="dashboard-order life-dashboard-order">
        <ul >
          <li ><a href="#/usercenter/userorder/waittoypay"><span
                                                                                                      class="item-ico"><!----> <span
            id="ico1"></span></span> <span class="item-title">待支付</span></a></li>
          <li ><a href="#/usercenter/userorder/packing"><span
                                                                                                   class="item-ico"><!----> <span
            id="ico2"></span></span> <span class="item-title">待发货</span></a></li>
          <li ><a href="#/usercenter/userorder/shipped"><span
                                                                                                   class="item-ico"><!----> <span
            id="ico3"></span></span> <span class="item-title">待收货</span></a></li>
        </ul>
        <ul >
          <li ><a href="#/usercenter/userorder/waittocomment"><span
            class="item-ico"><!----> <span id="ico4"></span></span> <span
            class="item-title">待评论</span></a></li>
          <li ><a href="#/usercenter/userorder/reply"><span
                                                                                                 class="item-ico"><!----> <span
            id="ico5"></span></span> <span class="item-title">回复</span></a></li>
          <li ><a href="#/usercenter/returnorder"><span
                                                                                             class="item-ico"><span
            id="ico6"></span></span> <span class="item-title">退换货</span></a></li>
        </ul>
      </div>
      <div  class="dashboard">
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" class="item-i"> <span
            class="item-title">我的订单</span> <span class="arr-r"></span> <!----></a></li>
        </ul>
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" class="item-i"> <span
            class="item-title">我的优惠券</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" class="item-i"> <span
            class="item-title">现金积分</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" class="item-i"> <span
            class="item-title">关于发票</span> <span class="arr-r"></span> <!----></a></li>
        </ul>
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" class="item-i"> <span
            class="item-title">密码和登录信息</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" class="item-i"> <span
            class="item-title">老会员建议</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" class="item-i"> <span
            class="item-title">客户服务</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" class="item-i"> <span
            class="item-title">地址管理</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" class="item-i"> <span
            class="item-title">手机验证</span> <span class="arr-r"></span> <!----></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  header
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
    min-width: 320px;
    max-width: 640px;
    margin: auto;
    .header-content
      width: 100%;
      margin: 0 auto;
      position: relative;
      .header-title
        margin: 0 auto;
        line-height: 4rem;
        font-size: 2rem;
        text-align: center;
        color: #fff;
        width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      .editcart
        font-size: 1.8rem;
        color: #fff;
        line-height: 4rem;
        margin-right: 2%;
        position: absolute;
        right: 2%;
        top: 0;
        z-index: 9;

  .acct-user-wrap
    width: 100%;
    height: 9rem;
    background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
    background-size: 100% 100%;
    margin-top: 50px
    .acct-nolog
      width: 100%;
      overflow: hidden;
      text-align: center;
      margin: 0 auto;
      padding: .5rem 0 0;
      .state
        text-align: center;
        font-size: 1.6rem;
        line-height: 3rem;
        display: block;
        color: #222;
      .btn-entry
        display: inline-block;
        color: #009c42;
        padding: 0 10px;
        height: 3rem;
        background: hsla(0,0%,100%,.4);
        border: 1px solid #009c42;
        border-radius: 1.5rem;
        margin: .5rem auto 0;
        text-align: center;
        font-size: 1.6rem;
        line-height: 3rem;
        a
          display: inline-block;
          color: #009c42;
          padding: 0 10px;
        .split
          width: 1px;
          height: 1.2rem;
          display: inline-block;
          border-left: 1px solid #009c42
  .dashboard-order
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-top: 1px solid #eee;
    margin: 0 auto;
    ul
      width: 100%;
      height: 5rem;
      overflow: hidden;
      border-bottom: 1px solid #eee;
      margin: 0;
      padding: 0;
      li
        width: 33%;
        height: 2.5rem;
        float: left;
        border-right: 1px solid #dedede;
        line-height: 2rem;
        margin: 1.5rem 0 0;
        padding: 0;
        a
          display: block;
          text-align: center;
          color: #585858;
          text-decoration: none;
          padding: 0;
          .item-ico
            display: inline-block;
            position: relative;
            span#ico1, span#ico2
              display: inline-block;
              height: 3rem;
              width: 3.5rem;
              background-repeat: no-repeat;
              background-size: 99% 120%;
            span#ico1
              background-position: -5px -7px;
              background-image: url('./centerIco1.png');
            span#ico2
              background-position: 2px -7px;
              background-image: url('./centerIco1.png');
            span#ico3
              display: inline-block;
              height: 3rem;
              width: 3.7rem;
              background-position: -2px -7px;
              background-image: url('./centerIco3.png');
              background-repeat: no-repeat;
              background-size: 99% 120%;
            span#ico4, span#ico5, span#ico6
              display: inline-block;
              height: 3rem;
              width: 3.5rem;
              background-repeat: no-repeat;
              background-size: 99% 120%;
              background-position: -6px -7px;
              background-image: url('./centerIco4.png')
            span#ico5
              background-position: -6px -4px;
              background-image: url('./centerIco5.png')
            span#ico6
              background-position: -6px -7px;
              background-image: url('./centerIco6.png')
          .item-title
            display: inline-block;
            vertical-align: 56%;
            font-size: 1.2rem;
            color: #585858;
            line-height: 2.5rem;
            text-decoration: none;


  .dashboard
    li
      width: 100%;
      height: 5rem;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
      margin: -1px auto 0;
      a
        width: 100%;
        height: 5rem;
        display: block;
        text-decoration: none;
        color: #333;
        .item-i
          width: 2.5rem;
          overflow: hidden;
          display: inline-block;
          float: left;
          margin: 1.3rem 1.1rem 0;
        .item-title
          display: inline-block;
          line-height: 5rem;
          text-decoration: none;
          float: left;
          vertical-align: 0;
          font-size: 1.4rem;
          color: #585858;
        .arr-r
          width: 10px;
          height: 10px;
          display: inline-block;
          float: right;
          border-right: 2px solid #bbb;
          border-top: 2px solid #bbb;
          margin: 25px 10px 0 0;
          -webkit-transform: rotate(45deg);
</style>
