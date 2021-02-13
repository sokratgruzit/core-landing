<template>
  <div class="container">
    <div class="about-list">
      <div class="about-list__item pT-140 pB-160">
        <div class="about-list__item-head" data-aos="fade-up">
          <h3 class="font-51">Leadership</h3>
          <div class="about-list__item-part">
            <div class="about-list__item-ltl-ttl">Executive Management</div>
            <div class="about-list__item-color-ttl">John Holt</div>
            <div class="about-list__item-sub-ttl">President & Chief Executive Officer</div>
            <div class="about-list__item-sub-text">John Holt is a Director of NexBank Capital, Inc. and Chairman of the Board of NexBank and serves as the President and CEO of both the Company</div>
            <div class="about-list__item-color-ttl">Matt Siekielski</div>
            <div class="about-list__item-sub-ttl">Chief Operating Officer</div>
            <div class="about-list__item-sub-text">Matt Siekielski is a Director of NexBank Capital, Inc. and NexBank and serves as Executive Vice President and Chief Operating Officer</div>

            <div class="about-list__item-color-ttl">Stacy Hodges</div>
            <div class="about-list__item-sub-ttl">Chief Financial Officer</div>
            <div class="about-list__item-sub-text">As Executive Vice President and Chief Financial Officer
              of NexBank Capital, Inc. and NexBank</div>

            <div class="about-list__item-main-ttl">
              CORE Team
            </div>

            <div class="about-list__item-color-ttl">John Holt</div>
            <div class="about-list__item-sub-ttl">Lead Programmer</div>
            <div class="about-list__item-sub-text">John Holt is a Director of NexBank Capital, Inc. and Chairman of the Board of NexBank and serves as the President and CEO of both the Company</div>

            <div class="about-list__item-color-ttl">Matt Siekielski</div>
            <div class="about-list__item-sub-ttl">Programmer</div>
            <div class="about-list__item-sub-text">Matt Siekielski is a Director of NexBank Capital, Inc. and NexBank and serves as Executive Vice President and Chief Operating Officer</div>
          </div>
        </div>
      </div>
      <div class="about-list__item pT-140">
        <div class="about-list__item-head" data-aos="fade-up">
          <h3 class="font-51"><span>Community</span><span>Involvement</span></h3>
          <div class="about-list__item-head-text">NexBank is committed to making a positive impact in the community it lives, works and serves in. Through community development, housing, financial literacy, youth empowerment, and women's leadership programs, NexBank strives to make sustainable changes and build a stronger community for the residents of Dallas and other surrounding counties in the Dallas-Plano-Irving metropolitan division.</div>
        </div>
        <div class="about-list__item-part" data-aos="fade-up">
          <div class="about-list__item-main-ttl">
            Housing
          </div>

            <div class="about-list__item-color-ttl">Loan Programs for low to moderate-income borrowers</div>
          <div class="about-list__item-sub-text">To meet the diverse needs of low- to moderate-income borrowers in Texas, NexBank partners with organizations to create loan programs that offer mortgage-lending capital, and cover closing and title costs for borrowers. NexBank has provided low- to moderate-income housing loans for nearly 1,600 families in Texas.</div>

          <div class="about-list__item-color-ttl">Veterans of Texas</div>
          <div class="about-list__item-sub-text">NexBank is honored to provide support for the Veterans of Texas through loan programs that give them the opportunity to purchase land or a home. NexBank has helped nearly 5,300 Texas veterans, military members and their families with low-interest loans.</div>

          <div class="about-list__item-color-ttl">Special Care Housing and Counseling</div>
          <div class="about-list__item-sub-text">NexBank supports organizations that improve the quality of life for those living with HIV/AIDS through affordable housing options and leasing programs, counseling and specialized care.</div>

          <div class="about-list__item-main-ttl">
            Women’s Leadership
          </div>

          <div class="about-list__item-color-ttl">Empowering Women</div>
          <div class="about-list__item-sub-text">NexBank works with local organizations that empower women through opportunities in housing, childcare, and education to support the economic security and leadership potential of all women and girls in our community.</div>
        </div>
        <div class="about-list__item-main-ttl" data-aos="fade-up">Partners</div>
        <div class="about-list__item-partners pB-160" data-aos="fade-up">
          <div class="about-list__item-partner-part">
            <div class="about-list__item-partner">Dallas Area Habitat for Humanity</div>
            <div class="about-list__item-partner">Habitat for Humanity Texas</div>
            <div class="about-list__item-partner">Family Gateway</div>
            <div class="about-list__item-partner">The Real Estate Council Community Fund</div>
            <div class="about-list__item-partner">Mission Oak Cliff</div>
          </div>
          <div class="about-list__item-partner-part">
            <div class="about-list__item-partner">Dallas Neighborhood Homes</div>
            <div class="about-list__item-partner">Texas Veterans</div>
            <div class="about-list__item-partner">North Texas Food Bank</div>
            <div class="about-list__item-partner">Houston Habitat for Humanity</div>
            <div class="about-list__item-partner">Banzai</div>
          </div>
        </div>
      </div>

      </div>
    </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .about-list__item-partner::after{
    content: '';
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #0500FF;
    position: absolute;
    top: 8px;
    left: 0px;
  }
  .about-list__item-partner{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.7);
    padding-left: 25px;
    position: relative;
  }
  .about-list__item-partner-part{
    margin-right: 60px;
  }
  .about-list__item-partners{
    display: flex;
  }
  .about-list__item-main-ttl{
    font-size: 30px;
    line-height: 40px;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  h3 span:last-child {
    padding-left: 120px;
  }
  .about-list__item-head .about-list__item-head-text{
    width: 50%;
    padding-right: 120px;
    font-size: 15px;
    line-height: 24px;
    margin-top: 15px;
    color: rgba(255,255,255,.7);
  }
  .about-list__item-head h3{
    display: flex;
    flex-direction: column;
  }
  .about-list__item-head h3 span{
    font-size: inherit;
  }
  .about-list__item-sub-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.7);
    margin-bottom: 30px;
  }
  .about-list__item-sub-ttl{
    margin-bottom: 5px;
  }
  .about-list__item-color-ttl{
    font-size: 15px;
    color: #FF7152;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .about-list__item-ltl-ttl{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .about-list__item-part{
    display: flex;
    flex-direction: column;
    padding-right: 120px;
  }
  .about-list__item{
    display: flex;
    flex-direction: column;
  }
  .about-list__item-head{
    display: flex;
  }
  .about-list__item-head h3{
    width: 50%;
  }
  .about-list__item-part{
    width: 50%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 1024*/
  @media (max-width: 1300px){
    .about-list__item-part{
      padding-right: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    h3 span:last-child {
      padding-left: 60px;
    }
    .about-list__item-part{
      padding-right: 10px;
    }
    .about-list__item-head .about-list__item-head-text{
      padding-right: 10px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
    .about-list__item-partners{
      flex-direction: column;
    }
    .about-list__item-head .about-list__item-head-text{
      width: 100%;
    }
    .about-list__item-head{
      flex-direction: column;
    }
    .about-list__item-part{
      width: 100%;
      padding-right: 20px;
    }
    .about-list__item-head-text{
      width: 100%;
    }
  }
</style>
