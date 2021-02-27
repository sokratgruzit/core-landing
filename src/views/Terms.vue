<template>
  <div class="body-container">
    <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="terms">
        <h1 data-aos="fade-up"><span>Terms</span><span>of Use</span></h1>
        <p data-aos="fade-up">These Terms of Use apply to www.coremultichain.com as well as any other affiliated sites, digital services, or applications on which a link to these Terms of Use appears (collectively, the " Website") and apply to all visitors. These Terms of Use and any other terms that appear on the page from which you were directed to these Terms of Use govern your use of the Website. By visiting and using the Website you agree that you are bound by these terms. Please also ensure that you follow and obey all relevant legal information in your country.</p>
        <p data-aos="fade-up">These Terms of Use as well as the information and materials contained in the Website are subject to change at any time and from time to time, without notice. Do not use the website if you are not comfortable to be bound by these Terms of Use.</p>
        <p data-aos="fade-up">The materials appearing on coremultichain.com website could include technical, typographical,
          or photographic errors. coremultichain.com does not warrant that any of the materials on its website are accurate, complete or current. coremultichain.com may make changes to the materials contained on its website at any time without notice. However coremultichain.com does not make any commitment to update the materials.</p>
        <p data-aos="fade-up">All information made available on the Website is provided for informational purposes, for your non-commercial, personal use only. The information refers to all information and materials distributed, published, and otherwise made available on the Website. None of the information published on the Website constitutes a solicitation, an offer, or investment advice relating to any instruments, to effect any transactions, or to conclude any legal act of any kind whatsoever.</p>
        <p data-aos="fade-up">www.coremultichain.com does not provide investment, legal or tax advice through the Website and nothing herein should be construed as being financial, legal, tax or other advice.</p>
        <p data-aos="fade-up">Your use of the Website is at your own risk. The Website, together with all content, information and materials contained therein, is provided "as is" and "as available", without any representations or warranties of any kind. Any materials, information or content accessed, downloaded or otherwise obtained through the use of the Website is done at your own risk and coremultichain.com is not responsible for any damage to your computer systems or loss of data that results from the download of such material.</p>
        <p data-aos="fade-up">In no event shall coremultichain.com or its subcontractors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if coremultichain.com or a coremultichain.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
        <p data-aos="fade-up">www.coremultichain.com shall not be liable to you or anybody else for any damages incurred in connection with any messages sent to www.coremultichain.com using ordinary E-mail or any other electronic messaging system.</p>
        </div>
    </div>
  </div>
</template>

<script>
import TopHead from '../components/TopHead'
export default {
  name: 'Terms',
  components: {
    TopHead
  },
  data () {
    return {
      firstAnimation: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 100)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .terms{
    flex-direction: column;
    position: relative;
  }
  .body-container{
    padding-left: 210px;
  }
  h1{
    font-size: 100px;
    line-height: 110px;
    margin-top: 210px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
  }
  h1 span{
    font-size: inherit;
    line-height: inherit;
  }
  h1 span:last-child{
    padding-left: 100px;
  }
  p{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    margin-bottom: 30px;
    width: 70%;
    padding-left: 100px;
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
    h1{
      font-size: 60px;
      line-height: 70px;
      margin-bottom: 50px;
    }
    p{
      width: 100%;
      padding-left: 0px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    h1 {
      font-size: 50px;
      line-height: 60px;
      margin-bottom: 30px;
      margin-top: 100px;
    }
    .body-container{
      padding-left: 0px;
    }
  }
</style>
