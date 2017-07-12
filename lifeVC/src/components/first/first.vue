<template>
  <div>
    <div class="loadMore-wrapper">
      <div class="mint-loadMore">
        <div class="mint-loadMore-content">
          <div class="mint-loadMore-top">
            <span class="mint-loadMore-text">下拉刷新</span>
          </div>
          <div class="banner">
            <mt-swipe :auto="4000">
              <mt-swipe-item>
                <a href="" class="swiper-slide">
                  <img src="./banner01.jpg">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner02.jpg">
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner03.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner04.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner05.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner06.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner07.jpg" >
                </a>
              </mt-swipe-item>
              <mt-swipe-item>
                <a href="">
                  <img src="./banner08.jpg" >
                </a>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="item-combo">
            <div class="img-wrap" style="height: 90px">
              <img src="./como0.jpg" alt="" usemap="#map0" style="height: 90px">
              <map id="map0">
                <area shape="rect" coords="0,9,123,88">
                <area shape="rect" coords="123,9,251,90">
                <area shape="rect" coords="251,9,375,89">
              </map>
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap" style="height: 150px">
              <img src="./como1.jpg" alt="" usemap="#map1" style="height: 150px">
              <map id="map1">
                <area shape="rect" coords="0,1,375,148">
              </map>
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap" style="height: 925px">
              <img src="./como2.jpg" alt="" usemap="#map2" style="height: 925px">
              <map id="map2">
                <area  shape="rect" coords="0,64,375,231">
                <area  shape="rect" coords="0,240,375,407">
                <area  shape="rect" coords="0,407,375,573">
                <area  shape="rect" coords="0,573,123,749">
                <area  shape="rect" coords="123,573,251,749">
                <area  shape="rect" coords="251,573,375,749">
                <area  shape="rect" coords="0,749,123,925">
                <area  shape="rect" coords="123,749,251,925">
                <area  shape="rect" coords="251,749,375,925">
              </map>
            </div>
          </div>
          <div class="item-combo">
            <div  class="img-wrap" style="height: 238px;">
              <img usemap="#map3" src="./como3.jpg" lazy="loaded" style="width: 100%; height: 238px;">
              <map  name="map3" id="map3">
                <area shape="rect" coords="0,26,371,235">
              </map>
            </div>
          </div>
          <div  class="item-combo">
            <div  class="img-wrap" style="height: 310px;">
              <img  usemap="#map4" src="./como4.jpg" lazy="loaded" style="width: 100%; height: 310px;">
              <map  name="map4" id="map4">
                <area  shape="rect" coords="3,46,86,158">
                <area  shape="rect" coords="93,46,191,164">
                <area  shape="rect" coords="191,46,281,164">
                <area  shape="rect" coords="285,46,371,164">
                <area  shape="rect" coords="3,170,90,294">
                <area  shape="rect" coords="93,170,183,294">
                <area  shape="rect" coords="187,170,281,294">
                <area  shape="rect" coords="281,170,375,294">
              </map>
            </div>
          </div>
          <div class="item-combo">
            <div  class="img-wrap" style="height: 100px;">
              <img  usemap="#map5" src="./como5.jpg" lazy="loaded" style="width: 100%; height: 100px;">
              <map  name="map5" id="map5">
                <area  shape="rect" coords="0,2,375,101">
              </map>
            </div>
          </div>
          <div  class="item-combo">
            <div   title="组合图活动">
              <div  class="img-wrap" style="height: 689px;">
                <img  usemap="#map6" src="./como6.jpg" lazy="loaded" style="width: 100%; height: 689px;">
                <map  name="map6" id="map6">
                  <area  shape="rect" coords="0,0,375,151">
                  <area  shape="rect" coords="3,158,168,330">
                  <area  shape="rect" coords="187,158,367,330">
                  <area  shape="rect" coords="3,337,180,509">
                  <area  shape="rect" coords="183,337,367,509">
                  <area  shape="rect" coords="3,516,180,682">
                  <area  shape="rect" coords="187,516,367,675">
                </map>
              </div>
            </div>
          </div>
          <div  class="item-combo"><div   title="组合图活动">
            <div  class="combo-title"></div>
            <div  class="img-wrap" style="height: 689px;">
              <img  usemap="#map7" src="./como7.jpg" lazy="loaded" style="width: 100%; height: 689px;">
              <map  name="map7" id="map7">
                <area  shape="rect" coords="0,0,375,151">
                <area  shape="rect" coords="7,165,183,330">
                <area  shape="rect" coords="191,158,371,330">
                <area  shape="rect" coords="7,330,183,503">
                <area  shape="rect" coords="191,330,367,496">
                <area  shape="rect" coords="7,503,183,675">
                <area  shape="rect" coords="187,503,367,675">
              </map></div>
          </div>
          <div class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div class="img-wrap" style="height: 484px;"><img usemap="#planetmap8"
                                                                src="./como8.jpg"
                                                                lazy="loaded" style="width: 100%; height: 484px;">
                <map name="map8" id="map8">
                  <area shape="rect" coords="0,0,375,150">
                  <area shape="rect" coords="11,164,127,314">
                  <area shape="rect" coords="131,159,243,309">
                  <area shape="rect" coords="247,164,360,309">
                  <area shape="rect" coords="11,314,123,474">
                  <area shape="rect" coords="127,314,243,469">
                  <area shape="rect" coords="247,314,360,469">
                </map>
              </div>
            </div>
          </div>
          <div class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div class="img-wrap" style="height: 689px;"><img usemap="#map9"
                                                                src="./como9.jpg"
                                                                lazy="loaded" style="width: 100%; height: 689px;">
                <map name="map9" id="map9">
                  <area shape="rect" coords="0,0,375,151">
                  <area shape="rect" coords="11,158,183,330">
                  <area shape="rect" coords="187,158,371,337">
                  <area shape="rect" coords="11,330,180,503">
                  <area shape="rect" coords="183,330,371,503">
                  <area shape="rect" coords="7,503,176,675">
                  <area shape="rect" coords="183,503,367,675">
                </map>
              </div>
            </div>
          </div>
          <div class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div class="img-wrap" style="height: 689px;"><img usemap="#map10"
                                                                src="./como10.jpg"
                                                                lazy="loaded" style="width: 100%; height: 689px;">
                <map name="map10" id="map10">
                  <area shape="rect" coords="0,0,375,151">
                  <area shape="rect" coords="11,158,183,330">
                  <area shape="rect" coords="187,158,371,337">
                  <area shape="rect" coords="11,330,180,503">
                  <area shape="rect" coords="183,330,371,503">
                  <area shape="rect" coords="7,503,176,675">
                  <area shape="rect" coords="183,503,367,675">
                </map>
              </div>
            </div>
          </div>
          <div class="item-combo">
            <div title="组合图活动">
              <div class="combo-title"></div>
              <div class="img-wrap" style="height: 484px;"><img usemap="#map11"
                                                                src="./como11.jpg"
                                                                lazy="loaded" style="width: 100%; height: 484px;">
                <map name="map11" id="map11">
                  <area shape="rect" coords="0,0,375,150">
                  <area shape="rect" coords="11,164,123,314">
                  <area shape="rect" coords="131,164,243,314">
                  <area shape="rect" coords="247,164,360,314">
                  <area shape="rect" coords="11,314,123,469">
                  <area shape="rect" coords="131,314,243,469">
                  <area shape="rect" coords="247,314,360,469">
                </map>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Backtop  from '../../components/backtop/backtop.vue'
    import Swipe from 'mint-ui/lib/swipe';
    export default{
        data () {
            return {}
        },
        methods: {},
        components: {Swipe},
        computed: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loadMore-wrapper
    margin-top: 8rem;
    width: 100%;
    padding-bottom: 4.5rem;
    color: #2e2e2e;
    .mint-loadMore
      .mint-loadMore-content
        transform: translate3d(0px, 0px, 0px)
        .mint-loadMore-top
          margin-top: -50px;
          text-align: center;
          height: 50px;
          line-height: 50px;
          .mint-loadMore-text
            vertical-align: middle;
        .banner
          width: 100%
          height: 250px;
          overflow hidden
          img
            width: 100%
            height: 250px
        .item-combo
          margin-bottom: 1rem;


</style>
