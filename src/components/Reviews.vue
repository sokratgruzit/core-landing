<template>
  <div class="community__outer">
    <div class="container" id="community" v-view="visibilityChanged">
    <div class="inner">
      <div class="left">
        <h2 class="font-72" data-aos="fade-up">
          Use Cases
        </h2>
        <p class="descr" data-aos="fade-up">Our goal is to create a product
          and service that you're satisfied with and use it every day.a</p>
<!--        <div class="btnContainer" data-aos="fade-up">-->
<!--          <div class="btn">Leave a review</div>-->
<!--        </div>-->
      </div>
      <div class="right">
        <div class="slidersContainer">
          <div class="sliderInner" data-aos="fade-up">
            <VueSlickCarousel v-bind="settings" :style="{height: '100%'}">
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="sliderInner" data-aos="fade-up">
            <VueSlickCarousel v-bind="settings2" :style="{height: '100%'}">
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">Ovanes</div>
                </div>
                <p>Good product. Convenient, fast. Allows you to keep abreast of all the events in the world of cryptology.</p>
              </div>
              <div class="review">
                <div class="review__header">
                  <div class="name">David</div>
                </div>
                <p>It has all the tools you need. Moreover is a very dynamic tool that is constantly being updated and enhanced with features. Blockchain technology is here to stay.
                  Now you can send crypto coins to any country using Core App.</p>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel
  },
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        rtl: true,
        pauseOnHover: false
      },
      settings2: {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        rtl: false,
        pauseOnHover: false
      }
    }
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 2)
    }
  }
}
</script>
<style scoped>
  .community__outer{
    background: #010918;
    overflow: hidden;
  }
  .review__header .name{
    font-size: 15px;
    color: #FF7152;
  }
  .review__header a{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .review__header a:hover{
    opacity: .8;
  }
  .review__header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .review p{
    font-size: 15px;
    line-height: 24px;
  }
  .review{
    background: #0D1627;
    margin-bottom: 30px;
    padding: 25px;
    outline: none;
  }
  .sliderInner{
    width: calc(50% - 15px);
    height: 100%;
  }
  .slidersContainer{
    width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .slidersContainer::after{
    content: '';
    width: 100%;
    position: absolute;
    z-index: 10;
    top: -10px;
    left: 0px;
    height: 200px;
    background: rgb(3,9,23);
    background: linear-gradient(357deg, rgba(3,9,23,0) 0%, rgba(3,9,23,1) 100%);
    pointer-events: none;
  }
  .slidersContainer::before{
    content: '';
    width: 100%;
    position: absolute;
    z-index: 10;
    bottom: -10px;
    left: 0px;
    height: 200px;
    background: rgb(3,9,23);
    background: linear-gradient(357deg, rgba(3,9,23,1) 0%, rgba(3,9,23,0) 100%);
    pointer-events: none;
  }
  .inner{
    display: flex;
    width: 100%;
  }
  .left{
    width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2{
    margin-bottom: 40px;
  }
  .descr{
    font-size: 26px;
    line-height: 36px;
    color: rgba(255,255,255,.7);
  }
  .btn{
    height: 52px;
    border: 2px solid #0500FF;
    font-size: 16px;
    color: #fff;
    margin-right: auto;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    cursor: pointer;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .btn:hover{
    background: #0500FF;
  }
  .btnContainer{
    display: flex;
    margin-right: auto;
    margin-top: 40px;
  }
  .right{
    width: 58%;
    display: flex;
    justify-content: center;
    height: 480px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .right{
      height: 650px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .descr{
      font-size: 18px;
      line-height: 25px;
      padding-right: 20px;
    }
    .sliderInner:last-child{
      display: none;
    }
    .sliderInner{
      width: 100%;
    }
    .right{
      width: 40%;
      height: 500px;
    }
    .left{
      width: 60%;
    }
    /*Iphone*/
    @media (max-width: 767px){
      .left{
        width: 100%;
      }
      .right{
        width: 100%;
        height: 300px;
        margin-top: 30px;
      }
      .inner{
        flex-direction: column;
      }
    }
  }
</style>
