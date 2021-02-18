<template>
  <div class="footer__main">
    <div class="container">
       <div class="footer__join">
      <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/join-img.jpg`)" alt="" class="footer__join-img">
      <div class="footer__join-inner">
        <div class="footer__join-left">
          <div class="footer__join-title">
            Join the <span>CORE</span> community
          </div>
          <div class="footer__join-description">Be one of innovators who subscribe to our updates.</div>
        </div>
        <div class="footer__join-right">
          <div class="subscribe-container">
            <div class="input-container">
              <input type="email" placeholder="myname@example.com">
              <div class="button">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8702 0.513321L9.88674 2.51748L14.3496 6.98034L0.113892 6.98034L0.113892 9.7903L14.3496 9.7903L9.88674 14.2532L11.8702 16.2573L19.7422 8.38532L11.8702 0.513321Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <footer>
      <div class="footerBg"></div>
      <div class="container">
        <div class="footerInner">
          <div class="footer__first-container">
            <router-link to="/" class="footer__logo">
              <svg width="140" height="68" viewBox="0 0 140 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5184 19.1093C17.9399 15.9058 21.1123 13.3466 24.7562 11.6569C28.4 9.96734 32.4036 9.19921 36.4144 9.42021C40.4251 9.64121 44.32 10.8445 47.756 12.9243C51.192 15.004 54.0638 17.8963 56.1184 21.3464L57.893 20.3609L60.8508 18.6264C58.1973 14.1641 54.4287 10.4681 49.9148 7.90108C45.4009 5.3341 40.2969 3.98438 35.1036 3.98438C29.9103 3.98438 24.8063 5.3341 20.2924 7.90108C15.7785 10.4681 12.0099 14.1641 9.3564 18.6264L7.88739 20.9325L10.2339 22.3221L19.3141 27.7128C17.8289 31.4466 17.7255 35.5876 19.0226 39.3907C20.3196 43.1939 22.932 46.4095 26.3895 48.4589C29.847 50.5083 33.9228 51.2571 37.8834 50.5703C41.844 49.8836 45.4294 47.8065 47.9944 44.7128L54.6099 48.6548C52.1878 51.8612 49.0134 54.4224 45.3668 56.1123C41.7202 57.8023 37.7136 58.5691 33.7004 58.3451C29.6872 58.1211 25.7908 56.9132 22.3551 54.8279C18.9194 52.7426 16.05 49.8442 14.0001 46.3882L9.31697 49.1575C11.9705 53.6198 15.7391 57.3158 20.253 59.8828C24.7668 62.4498 29.8709 63.7995 35.0641 63.7995C40.2574 63.7995 45.3615 62.4498 49.8753 59.8828C54.3892 57.3158 58.1578 53.6198 60.8113 49.1575L62.2113 46.8119L59.8648 45.4224L52.4113 40.9975L45.9832 37.2919C45.2006 39.782 43.5893 41.9293 41.4168 43.3773C39.2444 44.8252 36.6417 45.4864 34.0413 45.2512C31.4408 45.0159 28.9992 43.8982 27.1222 42.0839C25.2452 40.2696 24.0457 37.8679 23.7232 35.2779C23.4007 32.6879 23.9745 30.0656 25.3493 27.8467C26.724 25.6278 28.817 23.9459 31.2804 23.0806C33.7438 22.2152 36.4292 22.2185 38.8905 23.0899C41.3517 23.9613 43.4406 25.6482 44.8099 27.8705L49.5325 25.1505C48.1451 22.8504 46.2284 20.9147 43.9419 19.5042C41.6553 18.0937 39.0649 17.2492 36.3861 17.041C33.7073 16.8328 31.0174 17.2669 28.5402 18.3071C26.063 19.3474 23.8701 20.9637 22.1437 23.0218L15.5184 19.1093Z" fill="white"/>
                  </g>
                  <path d="M78.8892 41.7261C75.9906 41.7261 73.7822 40.9837 72.2639 39.4989C71.4841 38.6769 70.8821 37.7031 70.4954 36.6383C70.1086 35.5735 69.9454 34.4405 70.016 33.3099C69.9465 32.1541 70.1077 30.9959 70.4903 29.903C70.8728 28.81 71.469 27.804 72.2441 26.9435C73.723 25.4127 75.938 24.644 78.8892 24.6374C79.7985 24.6282 80.7065 24.7074 81.6005 24.874C82.3838 25.0194 83.155 25.2236 83.9075 25.485V29.1215C82.4141 28.502 80.8118 28.187 79.1949 28.1951C78.5179 28.1355 77.8359 28.214 77.1902 28.4257C76.5445 28.6375 75.9486 28.9781 75.4385 29.427C74.547 30.5153 74.1155 31.9084 74.2357 33.3099C74.1781 33.9812 74.2605 34.6572 74.4777 35.295C74.6949 35.9329 75.0422 36.5187 75.4977 37.0154C76.552 37.876 77.8966 38.2993 79.254 38.198C80.0576 38.2001 80.8596 38.1275 81.6498 37.9812C82.4369 37.8344 83.2068 37.6065 83.947 37.3012V40.9574C83.1959 41.2 82.4281 41.3878 81.6498 41.5192C80.7371 41.6663 79.8136 41.7355 78.8892 41.7261Z" fill="white"/>
                  <path d="M93.5507 41.727C90.8493 41.727 88.7986 41.0404 87.3986 39.6673C85.9986 38.2942 85.292 36.1589 85.2788 33.2615C85.2788 30.1867 85.9887 27.989 87.3986 26.6487C88.8084 25.3085 90.8493 24.6777 93.5507 24.6777C96.2521 24.6777 98.2929 25.3479 99.7028 26.6487C101.113 27.9496 101.813 30.1867 101.813 33.2615C101.813 36.1589 101.103 38.2974 99.7028 39.6673C98.3028 41.0372 96.2422 41.727 93.5507 41.727ZM93.5507 38.1989C94.1225 38.2557 94.6998 38.1774 95.2358 37.9702C95.7718 37.7631 96.2516 37.433 96.6366 37.0064C97.3764 35.9041 97.7237 34.585 97.6225 33.2615C97.7494 31.8738 97.4019 30.4842 96.6366 29.3195C96.2475 28.9122 95.7715 28.5979 95.244 28.4C94.7165 28.2021 94.1512 28.1256 93.5901 28.1763C93.0244 28.1239 92.4542 28.1995 91.9217 28.3974C91.3892 28.5953 90.9081 28.9104 90.5141 29.3195C89.7437 30.4819 89.3956 31.8734 89.5281 33.2615C89.4269 34.585 89.7742 35.9041 90.5141 37.0064C90.8957 37.4235 91.3677 37.7478 91.8941 37.9545C92.4204 38.1612 92.9871 38.2448 93.5507 38.1989Z" fill="white"/>
                  <path d="M103.922 41.4711V24.8949H112.213C113.002 24.8296 113.795 24.9339 114.54 25.2008C115.285 25.4677 115.964 25.891 116.532 26.4421C117.506 27.594 118.004 29.0748 117.922 30.5813C117.952 31.6308 117.656 32.6639 117.074 33.5378C116.505 34.3803 115.698 35.0353 114.757 35.4201C114.986 35.5953 115.182 35.8087 115.339 36.0508C115.526 36.364 115.685 36.6939 115.812 37.0363L117.784 41.5105H113.446L111.592 37.2926C111.472 36.98 111.267 36.707 111.001 36.5041C110.701 36.3333 110.36 36.248 110.015 36.2578H108.063V41.5105L103.922 41.4711ZM108.063 33.0253H111.129C111.813 33.0685 112.488 32.8541 113.022 32.4241C113.262 32.1848 113.448 31.8959 113.565 31.5777C113.683 31.2594 113.729 30.9194 113.702 30.5813C113.702 28.9256 112.903 28.0879 111.306 28.0879H108.063V33.0253Z" fill="white"/>
                  <path d="M120.032 41.4708V24.8945H132.268V28.0876H124.183V31.5664H131.311V34.8285H124.183V38.2777H132.268V41.4708H120.032Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="62.1127" height="60.1159" fill="white" transform="translate(3.9437 3.94238)"/>
                  </clipPath>
                </defs>
              </svg>
            </router-link>
            <div class="share">
              <a href="##" target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
                </svg>
              </a>
              <a href="##" target="_blank">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
                </svg>

              </a>
              <a href="##">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path d="M19.9951 19.9999V19.999H20.0001V12.664C20.0001 9.07569 19.2276 6.31152 15.0326 6.31152C13.0159 6.31152 11.6626 7.41819 11.1101 8.46736H11.0517V6.64652H7.07422V19.999H11.2159V13.3874C11.2159 11.6465 11.5459 9.9632 13.7017 9.9632C15.8259 9.9632 15.8576 11.9499 15.8576 13.499V19.9999H19.9951Z" fill="white"/>
                    <path d="M0.330139 6.64746H4.47681V20H0.330139V6.64746Z" fill="white"/>
                    <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="##">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z" fill="white"/>
                </svg>
              </a>
            </div>
            <div class="footStep">
              <div class="nav">
                <router-link to="/termsofuse">Terms of Service</router-link>
                <a href="##">Privacy</a>
              </div>
            </div>
            <div class="copyright">© CORE Multi-Chain, 2021 <br>
              All rights reserved</div>
          </div>
          <div class="footer__second-container">
            <div class="footer__second-container-column">
              <div class="footer__second-ttl">Products</div>
              <a href="##" class="footer__second-link">Liquid Network</a>
              <a href="##" class="footer__second-link">AQUA Wallet</a>
              <a href="##" class="footer__second-link">Blockstream AMP</a>
              <a href="##" class="footer__second-link">Blockstream Jade</a>
              <a href="##" class="footer__second-link">Blockstream Green</a>
              <a href="##" class="footer__second-link">Blockstream Mining</a>
              <a href="##" class="footer__second-link">Blockstream Satellite</a>
              <a href="##" class="footer__second-link">Blockstream Explorer</a>
              <a href="##" class="footer__second-link">Lightning Network</a>
            </div>
            <div class="footer__second-container-column">
              <div class="footer__second-ttl">Developers</div>
              <a href="##" class="footer__second-link">Engineering Blog</a>
              <a href="##" class="footer__second-link">Documentation</a>
              <div class="footer__second-ttl mt-30">Company</div>
              <a href="##" class="footer__second-link">Research</a>
              <a href="##" class="footer__second-link">About</a>
              <a href="##" class="footer__second-link">Careers</a>
            </div>
            <div class="footer__second-container-column">
              <div class="footer__second-ttl">Resources</div>
              <a href="##" class="footer__second-link">Support</a>
              <a href="##" class="footer__second-link">Contact</a>
              <a href="##" class="footer__second-link">Brand Assets</a>
              <a href="##" class="footer__second-link">Scam DB</a>
            </div>
          </div>
          <a href="#main" v-smooth-scroll class="btnUp" v-if="false">
            Up
          </a>
        </div>
        <div class="footerText">
          Disclaimer: Unium Wallet is a software platform ONLY and does not conduct any independent diligence on or substantive review of any blockchain asset, digital currency, cryptocurrency or associated funds. You are fully and solely responsible for evaluating your investments, for determining whether you will exchange blockchain assets based on your own, and for all your decisions as to whether to exchange blockchain assets with Unium Wallet. In many cases, blockchain assets you exchange on the basis of your research may not increase in value, and may decrease in value. Similarly, blockchain assets you exchange on the basis of your research may increase in value after your exchange. Past performance is not indicative of future results. Any investment in blockchain assets involves the risk of loss of part or all of your investment. The value of the blockchain assets you exchange is subject to market and other investment risks
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      routes: [
        {
          id: 1,
          title: 'features',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#features'
          }
        },
        {
          id: 2,
          title: 'assets',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#assets'
          }
        },
        {
          id: 3,
          title: 'reviews',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#reviews'
          }
        },
        {
          id: 4,
          title: 'faq',
          name: 'Home',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        },
        {
          id: 5,
          title: 'about',
          route: '/about'
        }
      ]
    }
  },
  methods: {
    activeLinkFunc (id) {
      this.activeLink = id
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
  .footer__join-description{
    font-size: 15px;
    line-height: 25px;
  }
  .footer__join-title span{
    color: #FF7152;
    font-size: inherit;
  }
  .footer__join-title{
    font-size: 30px;
    line-height: 42px;
  }
  .footer__join-inner > div{
    width: 50%;
  }
  .footer__join-inner{
    padding-top: 50px;
    display: flex;
    width: 100%;
    position: relative;
    z-index: 3;
    padding-left: 60px;
    padding-right: 60px;
  }
  .footer__join-img{
    position: absolute;
    width: 100%;
    height: 130%;
    top: -15%;
    left: 0px;
    z-index: 1;
  }
  .footer__join{
    display: flex;
    height: 200px;
    width: 1070px;
    overflow: hidden;
    position: relative;
    margin-bottom: 100px;
  }
  .footer__join:after{
    position: absolute;
    right: 0px;
    top: 0px;
    width: 150%;
    height: 100%;
    content: '';
    z-index: 2;
    background: rgb(0,5,15);
    background: linear-gradient(90deg, rgba(0,5,15,0) 0%, rgba(0,5,15,1) 100%);
  }
  .footerText{
    padding: 50px 0px;
    font-size: 12px;
    line-height: 20px;
    color: rgba(255,255,255,.3);
    border-top: 1px solid rgba(255,255,255,.05);
  }
  .mt-30{
    margin-top: 30px;
  }
  .footer__second-link{
    font-size: 15px;
    line-height: 20px;
    color: rgba(255,255,255,.5);
    margin-bottom: 8px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .footer__second-link:hover{
    color: #ff7152;
  }
  .footer__second-ttl{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 12px;
  }
  .footer__second-container-column{
    width: 33.333%;
    flex-direction: column;
    display: flex;
  }
  .footer__second-container{
    width: calc(100% - 330px);
    display: flex;
  }
  .footStep{
    display: flex;
  }
  .footerBg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% - 210px);
    height: 100%;
    background: #010918;
  }
  .btnUp:hover{
    background: #0500FF;
    border-color: #0500FF;
  }
  .btnUp{
    height: 65px;
    width: 65px;
    display: flex;
    margin-left: auto;
    border: 2px solid #fff;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 16px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  footer{
    position: relative;
  }
  .container{
    padding-left: 300px;
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .footerInner{
    display: flex;
    height: 100%;
    width: 100%;
    padding: 50px 0px;
  }
  .copyright{
    font-size: 15px;
    line-height: 24px;
    opacity: .4;
  }
  .nav a{
    margin-right: 30px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    font-size: 15px;
    text-decoration: none;
  }
  .nav a:hover{
    color: #ff7152;
  }
  .share{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  .share a{
    margin-right: 16px;
  }
  .share a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .share a:hover path{
    fill: #ff7152;
  }
  .subscribe-container{
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .subscribe-container .ttl{
    font-size: 15px;
    margin-right: 30px;
    opacity: .6;
  }
  .button{
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    right: 15px;
    top: 0px;
  }
  .button svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .button svg path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .button svg:hover path{
    fill: #ff7152;
  }
  .button svg:hover{
    transform: translateX(5px);
  }
  input{
    width: 288px;
    background: transparent;
    height: 48px;
    padding: 0px 20px;
    font-size: 14px;
    border: 2px solid rgba(255,255,255,.1);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    color: #fff;
  }
  input::placeholder{
    color: rgba(255,255,255,.5);
  }
  input:focus{
    border-color: #FF7152;
  }
  .input-container{
    position: relative;
  }
  .footer__logo{
    margin-bottom: 40px;
    display: flex;
  }
  .nav{
    margin-bottom: 110px;
  }
  .footer__first-container{
    width: 330px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .footStep{
      flex-direction: column;
    }
    .subscribe-container{
      flex-direction: column;
      align-items: baseline;
    }
    .ttl{
      margin-bottom: 13px;
    }
    .container{
      padding-left: 255px;
      flex-direction: column;
    }
    footer{
      height: auto;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .container,.footerInner{
      flex-direction: column;
      align-items: center;
    }
    .nav{
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .nav a{
      margin-right: 0px;
      margin-top: 15px;
    }
    .copyright{
      margin-right: 0px;
    }
    .subscribe-container{
      margin-left: 0px;
      margin-top: 30px;
    }
    .btnUp{
      margin-right: auto;
      margin-top: 30px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    footer .container{
      padding-left: 15px;
    }
    .footerBg{
      width: 100%;
    }
  }
</style>
