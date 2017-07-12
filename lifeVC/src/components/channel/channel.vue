<template>
    <div class="main-body-shelf">
      <div class="if-loadmore">
        <ul class="if-goodsUI" v-for="housework in houseworks">
          <li>
            <router-link :to="housework.id">
            <img  :src="housework.Imgsrc" lazy="loaded">
            <dl >{{housework.name}}</dl>
            </router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data () {
            return {}
        },
        created () {
          this.houseworks = [
            {id:"/channelsub/2860/2877", Imgsrc:'http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg', name:'家务工具'},
            {id:"/channelsub/2860/2879", Imgsrc:'http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg', name:'家庭清洁剂'},
            {id:"/channelsub/2860/3404", Imgsrc:'http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg', name:'防霉除菌'},
            {id:"/channelsub/2860/2884", Imgsrc:'http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg', name:'百纳箱'},
          ]
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .main-body-shelf
    margin-top: 8.5rem;
    width: 100%;
    padding-bottom: 4.5rem;
    color: #2e2e2e;
    .if-goodsUI
      background: #fff
      list-style: none;
      li
        width: 25%
        margin: 1rem 0;
        float: left;
        text-align: center;
        a
          display block
          img
            width: 80%;
            margin: auto;
            vertical-align: middle;
          di
            height: 2rem;
            line-height: 2rem;
            font-size: 1.3rem;
</style>
