<template>
  <div class="pT-160 pB-160">
    <div class="container lottie-container__outer">
      <h3 class="font-51" data-aos="fade-up">CORE solves today's hardest
        blockchain problems</h3>
      <div class="lottie-container">
        <div class="lottie-container__item-floor" data-aos="fade-up">
          <div class="lottie-container__item mob-title">Task & Our Solution</div>
          <div class="lottie-container__item title">Task</div>
          <div class="lottie-container__item title">Our Solution</div>
        </div>
        <div class="lottie-container__item-floor" >
          <div class="lottie-container__item" @mouseover="hover(1)" data-aos="fade-up">
          <lottie-animation
            ref="lottie1"
            :animationData="require(`@/assets/lottie-icons/scalability.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(1)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Scalability</div>
            <div class="txt">This is on of the main reasons that blockchain technology cannot be used on a mass-adoption scale yet. Low throughput and its environmental impact are the biggest obstacles that blockchain has to overcome in order to scale.</div>
          </div>
        </div>
          <div class="lottie-container__item-descr" data-aos="fade-up">
            <i>
              <svg width="101" height="40" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path d="M88.7071 20.7071C89.0976 20.3166 89.0976 19.6834 88.7071 19.2929L82.3431 12.9289C81.9526 12.5384 81.3195 12.5384 80.9289 12.9289C80.5384 13.3195 80.5384 13.9526 80.9289 14.3431L86.5858 20L80.9289 25.6569C80.5384 26.0474 80.5384 26.6805 80.9289 27.0711C81.3195 27.4616 81.9526 27.4616 82.3431 27.0711L88.7071 20.7071ZM12 21H88V19H12V21Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.635986" width="101" height="38.7279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear" x1="88" y1="21.005" x2="12" y2="21.005" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9B99FF"/>
                    <stop offset="1" stop-color="#9B99FF" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            We combine the use of AI based PoS consensus, a scalable and secure parallel protocol for distributed ledger via sharding, side chains, and off-chain processing. These techniques allow for acceleration of block broadcasting in blockchain networks and scaling out through asynchronous consensus zones.
          </div>
        </div>
        <div class="lottie-container__item-floor">
          <div class="lottie-container__item" @mouseover="hover(3)" data-aos="fade-up">
          <lottie-animation
            ref="lottie3"
            :animationData="require(`@/assets/lottie-icons/usability.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(3)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Usability</div>
            <div class="txt">Rapid innovation is taking place in the blockchain sector. However, this innovation is taking place in the backend of blockchains and not in the ease
              of use for the client when using the front end. Complex technology needs to be easy to use for
              the ordinary individual, which blockchain is not yet.</div>
          </div>
        </div>
          <div class="lottie-container__item-descr" data-aos="fade-up">
            <i>
              <svg width="101" height="40" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path d="M88.7071 20.7071C89.0976 20.3166 89.0976 19.6834 88.7071 19.2929L82.3431 12.9289C81.9526 12.5384 81.3195 12.5384 80.9289 12.9289C80.5384 13.3195 80.5384 13.9526 80.9289 14.3431L86.5858 20L80.9289 25.6569C80.5384 26.0474 80.5384 26.6805 80.9289 27.0711C81.3195 27.4616 81.9526 27.4616 82.3431 27.0711L88.7071 20.7071ZM12 21H88V19H12V21Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.635986" width="101" height="38.7279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear" x1="88" y1="21.005" x2="12" y2="21.005" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9B99FF"/>
                    <stop offset="1" stop-color="#9B99FF" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            We are developing an easy to use ecosystem.
            This will include a wallet and simplified payment gateways, giving you ease of use and access to our sophisticated solution. A hassle-free user experience, all while maintaining your privacy.
          </div>
        </div>
        <div class="lottie-container__item-floor">
          <div class="lottie-container__item" @mouseover="hover(4)" data-aos="fade-up">
            <lottie-animation
              ref="lottie4"
              :animationData="require(`@/assets/lottie-icons/interoperability.json`)"
              :loop="false"
              :autoPlay="false"
              @complete="leave(4)"
            />
            <div class="lottie-container__item-description">
              <div class="ttl">Interoperability</div>
              <div class="txt">This refers to the communication between chains. Currently, there are no solutions available for true cross-chain communication without the need for
                a 3rd party, like a centralised exchange.</div>
            </div>
          </div>
          <div class="lottie-container__item-descr" data-aos="fade-up">
            <i>
              <svg width="101" height="40" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path d="M88.7071 20.7071C89.0976 20.3166 89.0976 19.6834 88.7071 19.2929L82.3431 12.9289C81.9526 12.5384 81.3195 12.5384 80.9289 12.9289C80.5384 13.3195 80.5384 13.9526 80.9289 14.3431L86.5858 20L80.9289 25.6569C80.5384 26.0474 80.5384 26.6805 80.9289 27.0711C81.3195 27.4616 81.9526 27.4616 82.3431 27.0711L88.7071 20.7071ZM12 21H88V19H12V21Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.635986" width="101" height="38.7279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear" x1="88" y1="21.005" x2="12" y2="21.005" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9B99FF"/>
                    <stop offset="1" stop-color="#9B99FF" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            We address blockchain interoperability by improving the efficiency of cross-chain transactional logic via trusted relays, hash-locking , notary schemes, Blockchain Migrators and bridges, as well as side chains.
          </div>
        </div>
        <div class="lottie-container__item-floor">
          <div class="lottie-container__item" @mouseover="hover(5)" data-aos="fade-up">
            <lottie-animation
              ref="lottie5"
              :animationData="require(`@/assets/lottie-icons/security.json`)"
              :loop="false"
              :autoPlay="false"
              @complete="leave(5)"
            />
            <div class="lottie-container__item-description">
              <div class="ttl">Security</div>
              <div class="txt">Although blockchain is regarded as more secure because of its decentralised nature. However, some blockchains can fall victim to either a 51% attack, endpoint vulnerabilities, vendor exploits, or faulty source code. This can be accomplished on both a proof of stake chain and a proof of work chain.</div>
            </div>
          </div>
          <div class="lottie-container__item-descr" data-aos="fade-up">
            <i>
              <svg width="101" height="40" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                  <path d="M88.7071 20.7071C89.0976 20.3166 89.0976 19.6834 88.7071 19.2929L82.3431 12.9289C81.9526 12.5384 81.3195 12.5384 80.9289 12.9289C80.5384 13.3195 80.5384 13.9526 80.9289 14.3431L86.5858 20L80.9289 25.6569C80.5384 26.0474 80.5384 26.6805 80.9289 27.0711C81.3195 27.4616 81.9526 27.4616 82.3431 27.0711L88.7071 20.7071ZM12 21H88V19H12V21Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                  <filter id="filter0_d" x="0" y="0.635986" width="101" height="38.7279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="6"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.6 0 0 0 0 1 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear" x1="88" y1="21.005" x2="12" y2="21.005" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9B99FF"/>
                    <stop offset="1" stop-color="#9B99FF" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            Security is guaranteed in our ecosystem thanks
            to secure multi-party computation, committee reconfiguration, distributed random generation, attribute-based encryption and zero-knowledge proof that we have implemented into our solution which allows you to transact securely and privately
            in our ecosystem.
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue
export default {
  components: {
    LottieAnimation
  },
  data () {
    return {
    }
  },
  methods: {
    test () {
      console.log('hi')
    },
    hover (id) {
      if (id === 1) {
        this.$refs.lottie1.play()
      }
      if (id === 2) {
        this.$refs.lottie2.play()
      }
      if (id === 3) {
        this.$refs.lottie3.play()
      }
      if (id === 4) {
        this.$refs.lottie4.play()
      }
      if (id === 5) {
        this.$refs.lottie5.play()
      }
    },
    leave (id) {
      if (id === 1) {
        this.$refs.lottie1.stop()
      }
      if (id === 2) {
        this.$refs.lottie2.stop()
      }
      if (id === 3) {
        this.$refs.lottie3.stop()
      }
      if (id === 4) {
        this.$refs.lottie4.stop()
      }
      if (id === 5) {
        this.$refs.lottie5.stop()
      }
    }
  }
}
</script>
<style scoped>
  .lottie-container__item-floor .title{
    font-size: 30px;
    line-height: 40px;
  }
  .lottie-container__item-floor .mob-title{
    font-size: 30px;
    line-height: 40px;
    display: none;
  }
  .lottie-container__item-descr i{
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .lottie-container__item-descr i svg{
    margin-left: -150px;
  }
  .lottie-container__item-floor{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .lottie-container__item-description{
    margin-left: 40px;
  }
  .lottie-container__item{
    display: flex;
    width: calc(50% - 50px);
    padding-right: 100px;
  }
  .lottie-container__item-descr{
    width: calc(50% - 50px);
    position: relative;
    font-size: 15px;
    line-height: 24px;
    padding-top: 25px;
    color: rgba(255,255,255,.5);
  }
  .lottie-container__item .txt{
    opacity: .5;
    font-size: 15px;
    line-height: 24px;
    margin-top: 5px;
    color: rgba(255,255,255,.7);
  }
  .lottie-container__item .ttl{
    font-size: 15px;
    line-height: 24px;
    color: #FF7152;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .lottie-container__item:hover .ttl{
    color: #fff;
  }
  .lottie-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .lottie-container__outer{
    display: flex;
    flex-direction: column;
  }
  h3{
    width: 60%;
    margin-bottom: 100px;
  }
  h3 span{
    font-size: inherit;
    color: #FF7152;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .lottie-container__item-descr i svg{
      margin-left: -110px;
    }
    .lottie-container__item{
      padding-right: 0px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .lottie-container{
      width: 100%;
    }
    .lottie-container__item-floor{
      flex-direction: column;
    }
    .lottie-container{
      flex-wrap: wrap;
    }
    .lottie-container__item{
      width: 60%;
    }
   .lottie-container__item-descr {
     width: 60%;
     margin-top: 30px;
    }
    .lottie-container__item-descr i{
      display: none;
    }
    .lottie-container__item-floor .title{
      display: none;
    }
    .lottie-container__item-floor .mob-title{
      display: flex;
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 0px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .lottie-container{
      width: 100%;
      padding-left: 0px;
    }
    .lottie-container__outer{
      flex-direction: column;
    }
    .lottie-container__item{
      width: 80%;
      margin-bottom: 30px;
    }
    h3 {
      width: 45%;
      margin-bottom: 50px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .lottie-container__item-descr{
      width: 100%;
    }
    .lottie-container__item-description{
      margin-left: 20px;
    }
    .lottie-container__item {
      width: 100%;
    }
    .lottie-container__item .txt{
      font-size: 12px;
      line-height: 20px;
    }
    .lottie-container__item{
      padding-right: 15px;
    }
    h3{
      margin-top: 60px;
      width: 100%;
    }
    .lottie-container{
      padding-bottom: 60px;
    }
  }
</style>
