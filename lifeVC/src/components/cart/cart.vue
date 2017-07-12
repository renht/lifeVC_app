<template>
  <div>
    <header  id="topbar" class="header">
      <div  class="header-content"> <!----> <!---->  </div>
      <div   class="header-content">
        <span class="btn-back">
          <label class="leftback-img" @click="back"></label>
        </span>
        <p class="header-title">购物车</p>
        <label class="editcart" style="display: none;">修改</label>
        <img src="" class="i-header-set" style="display: none;">
      </div>
      <div  class="header-login-wrap">
        <div class="header-login">
          <a class="btn-login">登录</a>
          <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
      </div>
      <div  class="header-exchange-wrap">
        <div class="header-exchange">
          <a href="javascript:;" id="hideAclick" style="display: none;"></a>
          <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码" class="exch-ipt">
          <input type="button" value="兑换" class="exch-btn">
        </div>
      </div>
    </header>
    <article  class="wrap-content wrap-cart-cont  wrap-cart-login" style="margin-top: 152.172px">
    <div id="wrap-nodata">
      <div id="carts-img">
        <img src="./cart.png" alt="购物车" style="vertical-align: middle; max-width: 160px;">
      </div>
      <div id="carts-text font-medium"
           style="text-align: center; font-size: 1.8rem; color: rgb(102, 102, 102); line-height: 3rem;">
        <p>您的购物车还是空荡荡的</p>
      </div>
      <div id="carts-link font-medium" style="text-align: center;">
        <a href="/"
           style="border: 1px solid rgb(137, 190, 72); padding: 0.5rem 1.5rem; display: inline-block; border-radius: 6px; font-size: 1.5rem; letter-spacing: 1px; margin-top: 6px; color: rgb(137, 190, 72);">赶紧去逛逛
        </a>
      </div>
      <div  class="wrap-cart-assem cart-empty-recom">
        <div  class="cart-assem-title"><p >Rico.S为你精心推荐</p></div>
        <div  class="cart-assem-list">
            <ul>
              <li class="cart-assem-item" >
                  <a  href="#"><img
                    src="http://i.lifevccdn.com/upload/goods/D1610291615001555_d230x230.jpg"></a>
                  <p  class="title">自粘式缝隙贴(2卷装)</p>
                  <p  class="price">￥19</p>
              </li>


              <li class="cart-assem-item">
                <a href="#"><img src="http://i.lifevccdn.com/upload/goods/D1704201923204119_d230x230.jpg"></a>
                <p class="title">酵素洗衣液(超强洁净)</p>
                <p class="price">￥29</p>
              </li>

              <li class="cart-assem-item">
                <a  href="#/item/16427">
                  <img
                    src="http://i.lifevccdn.com/upload/goods/D1508271208278864_d230x230.jpg"></a>
                <p  class="title">懒人清洁扫把(地砖专用)</p>
                <p  class="price">￥19</p>
              </li>

              <li class="cart-assem-item">
                <a href="/item/25139">
                  <img src="http://i.lifevccdn.com/upload/goods/D1705041713502720_d230x230.jpg">
                </a>
                <p class="title">加拿大原生木浆抽纸（12包）</p>
                <p class="price">￥29</p>
              </li>

              <li class="cart-assem-item">
                <a  href="#/item/24093"><img
                  src="http://i.lifevccdn.com/upload/goods/D1702241415015696_d230x230.jpg"></a>
                <p  class="title">防尘防潮内衣整理盒</p>
                <p  class="price">￥29</p>
              </li>

              <li class="cart-assem-item">
                <a  href="#/item/22830"><img
                  src="http://i.lifevccdn.com/upload/goods/D1611042139369284_d230x230.jpg"></a>
                <p  class="title">活氧除水垢片(6片装)</p>
                <p  class="price">￥9</p>
              </li>

            </ul>
        </div>
      </div>
    </div>
    </article>
  </div>
</template>

<script>
  import Swipe from 'mint-ui/lib/swipe'
  export default{
    data () {
      return {}
    },
    methods: {
        back () {
            window.history.back()
        }
    },
    components: {Swipe},
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
      .btn-back
        width: 10%;
        height: 3.8rem;
        position: absolute;
        left: 0;
        top: 0;
        label
          left: 30%;
        .leftback-img
          width: 1rem;
          height: 2.6rem;
          display: block;
          float: left;
          background: url('./cartback.png') no-repeat;
          position: absolute;
          top: .6rem;
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
    .header-login-wrap
      width: 100%;
      height: 3rem;
      background-color: #f0fae6;
      margin: 0;
      padding: .8rem 0 .5rem;
      .header-login
        width: 74%;
        min-height: 2.8rem;
        display: table;
        overflow: hidden;
        margin: 0 auto;
        padding: 0 0 0 21%;
        position: relative;
        .btn-login
          width: 18%;
          height: 2.6rem;
          display: block;
          background: #fff;
          border: 1px solid #8bc146;
          text-align: center;
          font-size: 1.5rem;
          color: #88c13e;
          line-height: 2.5rem;
          margin: 0;
          position: absolute;
          left: 0;
          top: 0;
        .login-tip
          width: 100%;
          display: table-cell;
          text-align: left;
          vertical-align: middle;
          font-size: 1.4rem;
          color: #333;
          line-height: 1.5rem;
    .header-exchange-wrap
      width: 100%;
      height: 3.2rem;
      background-color: #fff;
      margin: 0;
      padding: .6rem 0 .5rem;
      border-bottom: 1px solid #f2f2f2;
      .header-exchange
        width: 93%;
        height: 3rem;
        overflow: hidden;
        margin: .1rem auto 0;
        padding: 0;
        position: relative;
        .exch-ipt
          padding-left: 10px;
          width: 80%;
          height: 2.8rem;
          line-height: 2.8rem;
          display: inline-block;
          border-radius: 0;
          border: 1px solid #e7e7e7;
          background: #fff;
          text-align: left;
          font-size: 1.4rem;
        .exch-ipt::-webkit-input-placeholder
          text-align center
        .exch-btn
          width: 20%;
          height: 3rem;
          line-height: 3rem;
          display: inline-block;
          border-radius: 0;
          background: #fff;
          text-align: center;
          font-size: 1.6rem;
          color: #6fbd00;
          letter-spacing: .1rem;
          text-indent: .2rem;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 3;
          border: 1px solid #6fbd00;
  article
    .wrap-cart-cont
      padding-bottom: 8.5rem;
    .wrap-content
      width: 100%;
      overflow: hidden;
      margin-bottom: 10rem;
      margin: 0;
      padding: 0;
    #wrap-nodata
      margin: 0 auto;
      #carts-img
        margin: 0 auto;
        text-align: center;
        padding-left: 2rem;
        padding-top: 10px;
        box-sizing: border-box;
      #carts-text
        text-align: center;
        font-size: 1.8rem;
        color: rgb(102, 102, 102);
        line-height: 3rem;
      #carts-link
        text-align: center;
      .cart-empty-recom
        position: fixed;
        bottom: 4rem;
      .wrap-cart-assem
        position: fixed;
        bottom: 4rem;
        width: 100%;
        min-width: 320px;
        max-width: 640px;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
        margin: 1rem auto 0;
        .cart-assem-title
          width: 94%;
          overflow: hidden;
          border-bottom: 1px solid #ccc;
          text-align: left;
          font-size: 1.6rem;
          color: #333;
          line-height: 2rem;
          margin: 0 auto;
          padding: .8rem 3%;
          p
            line-height 1.5em
            height:24px
        .cart-assem-list
          width: 100%;
          max-height: 12rem;
          overflow-y: hidden;
          overflow-x: scroll;
          margin: 0 auto;
          padding: 1.3rem 0;
          ul
            width:2120px
            overflow: hidden;
            height: 12rem;
            li
              margin 0 5px
              width: 8rem;
              height: 144px
              overflow: hidden;
              display: inline-block;
              vertical-align: top;
              text-align: left;
              .cart-assem-item
                width: 100%;
                margin: 0;
                overflow: hidden
                height:144px
              img
                width: 96px;
                height: 96px
                overflow: hidden;
                display: block;
              .title
                width: 100%;
                overflow: hidden;
                display: block;
                text-align: left;
                font-size: 1rem;
                color: #333;
                line-height: 2rem;
                font-weight: 400;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-break: keep-all;


</style>
