<template>
    <div>
      <div>
        <div class="header">
        <div class="header-content">
          <span class="btn-back">
            <label  class="leftback-img"></label>
          </span>
          <p  class="header-title">家务</p>
        </div>
      </div>
      </div>
      <div  class="wrap-shelf-navs">
        <ul class="life-sort clearFix">
          <li >
            <a  class="">新品</a>
          </li>
          <li >
            <a  class="">畅销</a>
          </li> <li >
          <a  class="">
            <em >价格</em>
            <i  class=""></i>
          </a>
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
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    padding: 0;
    width: 100%;
    background: #89be48;
    position: fixed;
    top: 0;
    z-index: 999;
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
        .label
          left: 30%;
        .leftback-img
          width: 1rem;
          height: 2.6rem;
          display: block;
          float: left;
          background #89be48
          position: absolute;
          left: 4%;
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


  .wrap-shelf-navs
    width: 100%;
    position: fixed;
    top: 4rem;
    z-index: 10;
    .life-sort
      padding: .4rem 2%;
      background: #fff;
      border-bottom: 1px solid #f2f2f2;
      li
        float: left;
        width: 33.33333%;
        height: 3rem;
        line-height: 3rem;
</style>
