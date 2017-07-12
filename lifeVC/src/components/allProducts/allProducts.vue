<template>
  <div ><!---->
    <header  id="topbar" class="header" style="top: 0px;">
      <div  class="header-content"> <!---->
        <p  class="header-title">全部产品</p>
      </div>
      <div   id="wrap" class="search-panel">
        <div   id="search-bar">
          <form   action="">
            <input  type="search" placeholder="搜索商品" class="searchinput">
            <input  id="btnCancel" type="button" value="取消" class="sch-cancel">
          </form>
        </div>
      </div>
    </header>
    <div  id="content-wrap"
         style="position: absolute; width: 100%; top: 96px; height: 516px; overflow-y: scroll;">
      <div  class="life-module">
        <div  class="life-goodsAll">
          <div  class="life-goodsBox"><!---->
            <div  class="life-goodsTip">
              <dl  class="life-goodsMark">家务</dl> <!----></div>
            <ul  class="life-goodsUl clearFix onlyStyle">
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg"
                                                                          lazy="loaded">
                <dl >家务工具</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg"
                                                                          lazy="loaded">
                <dl >家庭清洁剂</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg"
                                                                          lazy="loaded">
                <dl >防霉除菌</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg"
                                                                          lazy="loaded">
                <dl >百纳箱</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg"
                                                                          lazy="loaded">
                <dl >衣物收纳</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg"
                                                                          lazy="loaded">
                <dl >酵素洗衣液</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg"
                                                                          lazy="loaded">
                <dl >魔力挂钩</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg"
                                                                          lazy="loaded">
                <dl >生活必备</dl>
              </li>
              <li  class="" ><img
                                                                          src="http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg"
                                                                          lazy="loaded">
                <dl >地毯地垫</dl>
              </li>
            </ul>
          </div>
          <div  class="life-goodsBox"><!---->
            <div  class="life-goodsTip">
              <dl  class="life-goodsMark">下厨</dl> <!----></div>
            <ul  class="life-goodsUl clearFix onlyStyle">
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/a3628c4600c74cf2b2cce44eff7ffcf7.jpg" lazy="loaded">
                <dl >不粘锅</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/f372190e2e8543afafff1735da48a871.jpg" lazy="loaded">
                <dl >多功能锅</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/d20af14942824632a588b5253e0123c4.jpg" lazy="loaded">
                <dl >水壶水杯</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/9bb5047d7ea84fa48992939c6c64c123.jpg" lazy="loaded">
                <dl >厨房电器</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/96079b6d4fcf4c45b972f815dbe27fcb.jpg" lazy="loaded">
                <dl >厨房小帮手</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/4fada1bbc1ef4f1288c123044dc1a69a.jpg" lazy="loaded">
                <dl >刀具</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/16d5b0459ee34b9c9ca7ccd16ff7561a.jpg" lazy="loaded">
                <dl >餐具</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/d0e01200cefd4b658be736f064507fad.jpg" lazy="loaded">
                <dl >净水器</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/726881bfc9ad4874a658683a72f4910c.jpg" lazy="loaded">
                <dl >保温杯</dl>
              </li>
              <li  class="" style="height: 138px;"><img src="http://i.lifevccdn.com/upload/AppIndexIcon/70e0e1ec4d274b77bd27e8c306409063.jpg" lazy="loaded">
                <dl >焖烧罐</dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
  .header
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
    .search-panel
      background-color: #f2f2f2;
      padding: .5rem 0;
      #search-bar
        width: 94%;
        height: 3rem;
        overflow: hidden;
        border-radius: 6px;
        margin: 0 auto;
        padding: 0;
        position: relative;
        .searchinput
          width: 100%;
          height: 3rem;
          background-color: #fff;
          background-image: url('./search.png')
          background-repeat: no-repeat;
          background-position: 38% .5rem;
          background-size: auto 70%;
          border: 0;
          border-radius: 6px;
          text-align: center;
          font-size: 1.6em;
          color: #1f5350;
          font-family: Microsoft YaHei;
          margin: 0;
          padding-left: 3rem;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 5;
        .sch-cancel
          width: 15%;
          height: 3rem;
          display: block;
          float: right;
          background: none;
          background-color: transparent;
          border: 0;
          text-align: right;
          font-size: 1.5rem;
          color: #83b842;
          line-height: 3rem;

  .life-module
    overflow: hidden;
    .life-goodsBox
      margin-top: 2rem;
      .life-goodsTip
        width: 10rem;
        margin: auto;
        text-align: center;
        .life-goodsMark
          font-size: 1.8rem;
          letter-spacing: .2rem;
          position: relative;
      dl
        height: 3rem;
        line-height: 3rem;
        font-size: 1.4rem;
      .life-goodsUl
        overflow hidden
        background: #fff;
        li
          float: left;
          width: 33%;
          text-align: center;
          border: 1px solid #f1f1f1;
          margin: 0 0 -1px -1px;
          img
            width: 60%!important;
            margin: auto;
            padding-top: 1rem;
</style>
