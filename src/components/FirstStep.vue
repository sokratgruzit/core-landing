<template>
  <div class="first-popup__container" v-if="activeFirst">
    <div class="bg"></div>
    <div class="first-popup active">
      <div class="first-popup__inner">
        <div class="first-popup__txt">
          Our team is committed to enhancing this website and this
          is an on-going process. We will have more exciting content
          and include it as early as possible.
        </div>
        <div class="first-popup__txt2">
          Every great piece of technology is continuously evolving
          to unlock its full potential.
          We will post all stages of the progress on this website.
        </div>
        <div class="subscribe">
          <div class="text">Keep me informed</div>
          <form @submit.prevent="sendEmail">
            <div class="input-container" :class="!success ? 'error' : ''">
                <input type="text" placeholder="myname@example.com" v-model="email" name="message" class="mInput">
              <div class="error-message">The entered email is incorrect</div>
            </div>
            <div class="first-popup__button">
              <input type="submit">
              Submit
            </div>
          </form>
        </div>
        <div class="close" @click="closeStep">Yes, I understood. Close</div>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from 'emailjs-com'
export default {
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      activeFirst: false,
      activeSucceessPopup: false,
      success: true,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      email: ''
    }
  },
  methods: {
    sendEmail (e) {
      if ((this.email === '') ? '' : (this.reg.test(this.email))) {
        console.log('error')
        emailjs.sendForm('service_rujm9q4', 'template_cchs8v6', e.target, 'user_Qs2I51OEYXof09TBn8gHY', {
          email: this.email,
          message: this.email
        })
          .then((result) => {
            this.$store.commit('setSuccess', true)
            console.log('SUCCESS!', result.status, result.text)
          }, (error) => {
            console.log('FAILED...', error)
          })
        // Reset form field
        this.email = ''
      } else {
        this.success = false
        setTimeout(() => {
          this.success = true
        }, 5000)
      }
      // try {
      //   emailjs.sendForm('service_rjdsn6n', 'template_dsrp0ao', e.target,
      //     'user_0MfvafF7XfG29aOKXSAch', {
      //       email: this.email
      //     })
      // } catch (error) {
      //   console.log({ error })
      // }
    },
    closeStep () {
      localStorage.core = true
      this.activeFirst = false
    }
  },
  mounted () {
    if (localStorage.core === undefined) {
      this.activeFirst = true
    } else {
      console.log(JSON.parse(localStorage.core))
    }
  }
}
</script>
<style scoped>
  .close{
    text-decoration: underline;
    margin-top: 65px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .close:hover{
    text-decoration-color: rgba(0,0,0,0);
  }
  .first-popup__button:hover{
    background: #0500FF;
  }
  .first-popup__button input{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .first-popup__button{
    cursor: pointer;
    position: relative;
    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border: 2px solid #0500FF;
    color: #fff;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .error-message{
    font-size: 13px;
    color: #FF7152;
    position: absolute;
    bottom: -22px;
    left: 0px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    pointer-events: none;
  }
  .input-container.error .mInput{
    border-color: #FF7152;
  }
  .input-container.error .error-message{
    opacity: 1;
  }
  .subscribe .text{
    font-size: 15px;
    opacity: .6;
    margin-bottom: 10px;
    margin-top: 60px;
  }
  .subscribe{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .button__inner{
    position: relative;
    padding-top: 5px;
  }
  .button__inner input{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
    opacity: 0;
  }
  .button svg{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .button svg path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .button input:hover ~ svg path{
    fill: #ff7152;
  }
  .button input:hover ~ svg{
    transform: translateX(5px);
  }
  .input-container .button{
    position: absolute;
    display: flex;
    align-items: center;
    top: 0px;
    right: 20px;
    height: 100%;
    z-index: 2;
  }
  .input-container .mInput{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: transparent;
    border: 2px solid rgba(255,255,255,.1);
    padding: 0px 20px;
    top: 0px;
    left: 0px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  input:focus{
    border-color: #fff;
  }
  .input-container{
    position: relative;
    width: 290px;
    height: 50px;
  }
  .first-popup__inner > div{
    font-size: 15px;
    line-height: 24px;
    text-align: center;
  }
  .first-popup__txt{
    margin-bottom: 25px;
  }
  .first-popup{
    position: relative;
    z-index: 5;
    background: #00050F;
    width: 720px;
    height: 600px;
    padding: 60px 120px;
  }
  .first-popup__container{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first-popup__container .bg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #00050F;
    opacity: .4;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .close{
      margin-top: 40px;
    }
    .first-popup{
      width: calc(100% - 30px);
      padding: 30px 15px;
      height: auto;
    }
    .first-popup__inner > div {
      font-size: 12px;
      line-height: 20px;
    }
  }
</style>
