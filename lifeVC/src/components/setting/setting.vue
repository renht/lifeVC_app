<template>
    <div id="setWrap">
      <header  id="topbar" class="header">
          <div  class="header-content">
            <span  class="btn-back">
              <label class="leftback-img" @click="back"></label>
            </span>
            <p class="header-title">设置</p>
          </div>
        </header>
      <article  class="uscenter-cont life-module">
        <div  class="dashboard">
          <ul  style="margin-bottom: 1rem;">
            <li ><span  class="pd20 item-title">清理缓存</span> <span
                                                                                                      class="arr-r"></span>
              <span  class="item-tip"></span></li> <!----> <!---->
            <li  style="margin-top: 1rem;">
              <span class="pd20 item-title">关于LifeVC</span>
              <span class="arr-r"></span>
              <span  class="item-tip">平台: browser 版本：5.1.2 - 261</span>
            </li>
          </ul>
        </div>
        <div  class="acct-logout"><input  type="button" value="退出当前账号" class="btn btn-logout"></div>
        <div  class="acct-logout"><input  type="button" value="查看版本" class="btn btn-logout" style="background-color: rgb(242, 242, 242); color: rgb(242, 242, 242); margin-top: 70px;">
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

  #setWrap
    width 100%
    position fixed
    bottom 0
    top 0
    z-index 999
    background #f2f2f2
    header
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

    article
      width: 100%;
      margin: 0 auto;
      margin-top: 4rem;
      padding-bottom: 4.5rem;
      color: #2e2e2e;
      li
        width: 100%;
        height: 5rem;
        overflow: hidden;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        margin: -1px auto 0;
        .item-title
          display: inline-block;
          line-height: 5rem;
          text-decoration: none;
          float: left;
          vertical-align: 0;
          font-size: 1.4rem;
          color: #585858;
          padding-left: 20px;
        .arr-r
          width: 10px;
          height: 10px;
          display: inline-block;
          float: right;
          border-right: 2px solid #bbb;
          border-top: 2px solid #bbb;
          margin: 25px 10px 0 0;
          -webkit-transform: rotate(45deg)
        .item-tip
          height: 5rem;
          float: right;
          text-align: right;
          font-size: 1.2rem;
          color: #ccc;
          padding-right: 5px;
          display: inline-block;
          line-height: 5rem;
          text-decoration: none;
      .acct-logout
        width: 98%;
        margin: 0 auto;
        padding: 0;
        .btn-logout
          height: 4rem;
          background-color: #f2f2f2;
          border-radius: .5rem;
          line-height: 2.6rem;
        .btn
          color: #fff;
          font-size: 1.9rem;
          width: 88%;
          margin-top: 20px;
          margin-left: 6%;
          border: none;
          margin-bottom: 20px;
        input
          outline: 0 none;
          font-family: \\5FAE\8F6F\96C5\9ED1,Microsoft YaHei,Helvetica,STHeiti,Droid Sans Fallback;

</style>
