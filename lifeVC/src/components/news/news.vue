<template>
    <div class="mint-loadmore">
      <mt-loadmore :top-method="loadTop"  ref="loadmore">
        <ul class="wrap-shelf">
          <p class="subcat-title">最近一周新品</p>
          <li v-for="good in news">
            <div class="shelf-item" style="position: relative;">
              <a  class="item-pic-bx">
                <img  class="item-pic" :src='good.goodImage' lazy="loaded">
                <div  class="item-status-empty" style="display: none;">
                  热卖脱销
              </div>
              </a>
              <div  class="item-panel">
                <div  class="title clearFix">
                  {{good.goodName}}
            </div>
                <div  class="item-price">
                  <div  class="price-cont">
                    <span  class="act-tag" v-if="good.oldPrice">限时体验价</span>
                    <span >￥</span> <span >{{good.newPrice}}</span>&nbsp;
                    <span  class="original-price">￥{{good.oldPrice}}</span>
                    <span  class="promo-lable">新</span>
                  </div>
                  <div  class="item-comment">评论：{{good.ratingsize}}</div>
                </div></div>
              <div >
              </div>
            </div>
          </li>
        </ul>
      </mt-loadmore>

    </div>
</template>

<script>
    import Loadmore from 'mint-ui/lib/loadmore'
    export default{
        created () {
          this.news = [
            {goodName: '洗衣防染巾(30片)',newPrice:9, oldPrice:19,ratingsize:0,goodImage:'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg' },
            {goodName: '全棉舒适四件套（绵羊）',newPrice:269, oldPrice:319,ratingsize:0 ,goodImage:'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg' },
            {goodName: '耐磨高弹力旅行箱保护套',newPrice:39, oldPrice:49,ratingsize:0,goodImage:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'  },
            {goodName: '防滑金属衣架（3只装）',newPrice:19, ratingsize:2,goodImage:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'  },
            {goodName: '耐磨高弹力旅行箱保护套',newPrice:109, ratingsize:103 ,goodImage:'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg' },
          ]
        },
        data () {
            return {}
        },
        methods: {
          loadTop () {
            this.$refs.loadmore.onTopLoaded()
          }
        },
        components: {Loadmore},
        computed: {

        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mint-loadmore
    margin-top 42px
    .wrap-shelf
      width: 100%;
      margin: -7em auto 2em;
      padding: 7em 0 0;
      .subcat-title
        max-width: 96%;
        text-align: center;
        font-size: 2.9em;
        color: #000;
        line-height: 2.5em;
        margin: 0 auto -1.2em;
      .shelf-item
        width: 96%;
        border: 1px solid #ddd;
        margin: 2rem auto 0;
        .item-pic-bx
          width: 100%;
          overflow: hidden;
          display: block;
          position: relative;
          .item-pic
            width: 100%;
            display: block;
            vertical-align: top;
            margin: 0 auto;
            position: static;
        .item-panel
          width: 100%;
          background: #fff;
          color: #333;
          padding-bottom: .3rem;
          .title
            width: 94%;
            overflow: hidden;
            margin: 0 auto;
            text-align: left;
            font-size: 1.35rem;
            color: #333;
            line-height: 2.6rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-top: .5rem;
          .item-price
            width: 94%;
            overflow: hidden;
            margin: 0 auto;
            .price-cont
              min-width: 68%;
              overflow: hidden;
              float: left;
              line-height: 1.8rem;
              margin-top: .2rem;
              .act-tag
                background-color: #fff000;
              .original-price
                color: #ccc;
                text-decoration: line-through;
              .promo-lable
                background-color: #c00;
                color: #fff;
                display: inline-block;
                padding: 1px 3px;
            .item-comment
              float: right;
              text-align: right;
              color: #999;




</style>
