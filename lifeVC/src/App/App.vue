<template>
  <div>
    <div class="footer" >
      <div class="tab">
        <div class="tab-item">
          <router-link to="/">
            <div class="ico ico-home " :class='{selected1: isShow1}' @click="toggleClass1"></div>
            <span>首页</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/allProducts">
            <div class="ico ico-product " :class='{selected2: isShow2}' @click="toggleClass2"></div>
            <span>全部产品</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/lookAbout">
            <div class="ico ico-lookabout " :class='{selected3: isShow3}' @click="toggleClass3"></div>
            <span>闲逛</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/cart">
            <div class="ico ico-cart " :class='{selected4: isShow4}' @click="toggleClass4"></div>
            <span>购物车</span>
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/user">
            <div class="ico ico-usercenter " :class='{selected5: isShow5}' @click="toggleClass5"></div>
            <span>账户中心</span>
          </router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow1: true,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShow5: false,
    }
  },
  components: {},
  methods: {
    toggleClass1 () {
      this.isShow1 = !this.isShow1
      this.isShow2 = false
      this.isShow3 = false
      this.isShow4 = false
      this.isShow5 = false
    },
    toggleClass2 () {
      this.isShow1 = false
      this.isShow2 = !this.isShow2
      this.isShow3 = false
      this.isShow4 = false
      this.isShow5 = false
    },
    toggleClass3 () {
      this.isShow1 = false
      this.isShow2 = false
      this.isShow3 = !this.isShow3
      this.isShow4 = false
      this.isShow5 = false
    },
    toggleClass4 () {
      this.isShow1 = false
      this.isShow2 = false
      this.isShow3 = false
      this.isShow4 = !this.isShow4
      this.isShow5 = false
    },
    toggleClass5 () {
      this.isShow1 = false
      this.isShow2 = false
      this.isShow3 = false
      this.isShow4 = false
      this.isShow5 = !this.isShow5
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixins.styl"
  .footer
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    z-index: 900;
    width: 100%;
    background: #f8f8f8;
    border-top: .04rem solid #ddd;
    .tab
      background: #f8f8f8;
      .tab-item
        width: 20%;
        float: left;
        margin: 0 auto;
        position: relative;
        text-align: center;
        .ico
          width: 100%;
          height: 3.3rem;
          margin-bottom: .2rem;
          background-repeat no-repeat
          background-position: 50%;
          background-size: 28%;
        .ico-home
          bg-image(home)
        .selected1
          bg-image(home2)
        .ico-product
          bg-image(item)
        .selected2
          bg-image(item2)
        .ico-lookabout
          bg-image(look)
        .selected3
          bg-image(look2)
        .ico-cart
          bg-image(cart)
        .selected4
          bg-image(cart2)
        .ico-usercenter
          bg-image(user)
        .selected5
          bg-image(user2)


</style>
