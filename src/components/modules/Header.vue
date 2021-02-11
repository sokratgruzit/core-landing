<template>
  <div :class="activeBurger ? 'activeBurger' : ''" v-if="true">
<!--    {{$store.state.activeMenu}}-->
    <header :class="firstAnimation ? 'animHead' : ''" v-if="!mobileMode">
      <router-link
        class="logo"
        to="/"
      >
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M33.32 124C29.32 124 26.2633 122.973 24.15 120.92C22.05 118.87 21 116 21 112.36C21 108.54 22.0267 105.583 24.08 103.49C26.1333 101.397 29.2 100.353 33.28 100.36C34.5408 100.344 35.8001 100.451 37.04 100.68C38.1221 100.888 39.1881 101.172 40.23 101.53V106.53C38.162 105.679 35.9464 105.244 33.71 105.25C31.3367 105.25 29.6 105.82 28.5 106.96C27.4 108.1 26.8467 109.893 26.84 112.34C26.84 114.66 27.42 116.367 28.58 117.46C30.038 118.655 31.9003 119.242 33.78 119.1C34.8902 119.101 35.9981 119 37.09 118.8C38.1769 118.6 39.2395 118.284 40.26 117.86V122.91C39.2251 123.254 38.1653 123.518 37.09 123.7C35.8433 123.9 34.5827 124.001 33.32 124Z" fill="white"/>
            <path d="M53.5401 124C49.8467 124 47.0001 123.05 45.0001 121.15C43.0601 119.25 42.0801 116.3 42.0801 112.29C42.0801 108.043 43.0534 104.99 45.0001 103.13C46.9467 101.27 49.7834 100.347 53.5101 100.36C57.2434 100.36 60.0801 101.283 62.0201 103.13C63.9601 104.977 64.9534 108.03 65.0001 112.29C65.0001 116.29 64.0267 119.243 62.0801 121.15C60.1334 123.057 57.2867 124.007 53.5401 124ZM53.5401 119.12C54.3231 119.189 55.1113 119.076 55.8434 118.789C56.5754 118.503 57.2314 118.052 57.7601 117.47C58.6501 116.36 59.1001 114.64 59.1001 112.29C59.1001 109.717 58.6534 107.907 57.7601 106.86C57.2211 106.295 56.5619 105.859 55.8314 105.584C55.1009 105.308 54.3177 105.201 53.5401 105.27C52.7579 105.2 51.97 105.307 51.2344 105.582C50.4989 105.857 49.8345 106.294 49.2901 106.86C48.4301 107.913 48.0001 109.723 48.0001 112.29C48.0001 114.64 48.4501 116.36 49.3401 117.47C49.869 118.046 50.522 118.494 51.2497 118.78C51.9774 119.065 52.7607 119.182 53.5401 119.12Z" fill="white"/>
            <path d="M67.8899 123.64V100.71H79.3599C82.0599 100.71 84.0599 101.43 85.3599 102.85C86.7016 104.448 87.3876 106.496 87.2799 108.58C87.3141 110.004 86.9131 111.404 86.1305 112.594C85.3478 113.784 84.2208 114.707 82.8999 115.24C83.2173 115.479 83.4885 115.774 83.6999 116.11C83.9612 116.535 84.1822 116.984 84.3599 117.45L87.0699 123.64H81.0699L78.4999 117.8C78.3397 117.367 78.0543 116.991 77.6799 116.72C77.2519 116.466 76.7567 116.347 76.2599 116.38H73.6299V123.64H67.8899ZM73.6299 112H77.8599C78.8075 112.057 79.7421 111.757 80.4799 111.16C80.8119 110.828 81.0679 110.429 81.2302 109.988C81.3925 109.548 81.4572 109.078 81.4199 108.61C81.4199 106.31 80.3166 105.16 78.1099 105.16H73.6299V112Z" fill="white"/>
            <path d="M90.1799 123.64V100.71H107.1V105.13H95.9099V109.94H105.78V114.42H95.9099V119.23H107.1V123.64H90.1799Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.9998 25C40.3511 20.5693 44.7401 17.0302 49.7804 14.6939C54.8207 12.3577 60.3579 11.2959 65.9049 11.6021C71.4519 11.9083 76.8386 13.573 81.5911 16.4499C86.3437 19.3267 90.3164 23.3274 93.1598 28.1L95.6098 26.69L99.6098 24.28C95.9409 18.1043 90.7291 12.989 84.4859 9.43617C78.2428 5.88336 71.183 4.01524 63.9998 4.01524C56.8165 4.01524 49.7567 5.88336 43.5136 9.43617C37.2705 12.989 32.0586 18.1043 28.3898 24.28L26.5098 27.5L29.7498 29.43L42.3098 36.89C40.2823 42.0468 40.1556 47.7567 41.9524 52.9984C43.7492 58.2401 47.3522 62.6715 52.1169 65.5C56.8817 68.3286 62.4973 69.3697 67.9593 68.4371C73.4213 67.5046 78.3734 64.6592 81.9298 60.41L91.0798 65.84C87.7292 70.2757 83.3387 73.8188 78.2953 76.1569C73.252 78.495 67.7108 79.5562 62.1605 79.2469C56.6101 78.9376 51.2212 77.2674 46.4688 74.3834C41.7165 71.4995 37.7468 67.4905 34.9098 62.71L28.4398 66.56C32.1067 72.7381 37.3178 77.8559 43.5612 81.4106C49.8046 84.9652 56.8654 86.8343 64.0498 86.8343C71.2341 86.8343 78.2949 84.9652 84.5383 81.4106C90.7817 77.8559 95.9929 72.7381 99.6598 66.56L101.59 63.32L98.3498 61.4L87.9998 55.28L79.1098 50.15C78.8982 50.8123 78.6443 51.4602 78.3498 52.09C76.8597 55.2807 74.3477 57.8831 71.2116 59.4849C68.0755 61.0867 64.4945 61.5963 61.0361 60.933C57.5776 60.2697 54.4393 58.4715 52.1183 55.8232C49.7972 53.1748 48.4262 49.8278 48.2223 46.3122C48.0184 42.7966 48.9933 39.3134 50.9926 36.4145C52.9918 33.5156 55.9012 31.3666 59.2598 30.3079C62.6184 29.2493 66.2342 29.3415 69.5345 30.57C72.8348 31.7984 75.6308 34.0929 77.4798 37.09L83.9998 33.36C82.0805 30.1783 79.4297 27.5005 76.2675 25.5493C73.1053 23.598 69.5231 22.4296 65.8186 22.1411C62.1141 21.8526 58.3942 22.4523 54.968 23.8905C51.5419 25.3287 48.5084 27.5638 46.1198 30.41L36.9998 25Z" fill="#FF7152"/>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="86.1" height="120" fill="white" transform="translate(21 4)"/>
            </clipPath>
          </defs>
        </svg>

      </router-link>
      <nav>
        <router-link
          v-for="nav in routes"
          :key="nav.id"
          :to="nav.route"
          class="font-18"
          :class="$store.state.activeMenu == nav.id ? 'active' : ''"
          @click.native="closeBurger(),activeLinkFunc(nav.id)"
        >
          {{nav.title}}
        </router-link>
      </nav>
      <div class="header__download-container">
        <div class="ttl">Download</div>
        <div class="buttons">
          <a href="#">
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3333 31.9999C18.4437 31.9999 19.4121 31.0669 19.4121 29.997V25.3191H20.8001C21.633 25.3191 22.1881 24.784 22.1881 23.9817V10.6211H5.54529V23.9818C5.54529 24.7843 6.10049 25.3192 6.93328 25.3192H8.32139V29.9971C8.32139 31.067 9.2895 32.0001 10.4001 32.0001C11.5104 32.0001 12.4786 31.067 12.4786 29.9971V25.3192H15.2547V29.9971C15.2546 31.0669 16.2229 31.9999 17.3333 31.9999Z" fill="white"/>
              <path d="M25.6549 23.9818C26.7653 23.9818 27.7334 23.0489 27.7334 21.9788V12.6232C27.7334 11.5589 26.7653 10.6211 25.6549 10.6211C24.5444 10.6211 23.5762 11.5589 23.5762 12.6232V21.9788C23.5762 23.0488 24.5443 23.9818 25.6549 23.9818Z" fill="white"/>
              <path d="M2.0785 23.9818C3.18901 23.9818 4.15723 23.0489 4.15723 21.9788V12.6232C4.15723 11.5589 3.18912 10.6211 2.0785 10.6211C0.968107 10.6211 0 11.5589 0 12.6232V21.9788C0 23.0488 0.968107 23.9818 2.0785 23.9818Z" fill="white"/>
              <path d="M20.5224 0.201815C20.2449 -0.0672718 19.8317 -0.0672718 19.5542 0.201815L17.6926 1.98964L17.6067 2.07229C16.5029 1.53967 15.2653 1.27368 13.887 1.27112C13.8802 1.27112 13.8736 1.2709 13.8668 1.2709H13.8666C13.8596 1.2709 13.8532 1.27112 13.8462 1.27112C12.4681 1.27368 11.2305 1.53967 10.1267 2.07229L10.0406 1.98964L8.1791 0.201815C7.90139 -0.0672718 7.48848 -0.0672718 7.21099 0.201815C6.93328 0.469407 6.93328 0.866524 7.21099 1.1339L9.01179 2.86941C8.43155 3.24271 7.90538 3.69952 7.44781 4.222C6.35238 5.47314 5.65367 7.10144 5.55759 8.86567C5.5567 8.88404 5.55482 8.90219 5.55393 8.92056C5.54806 9.04068 5.54529 9.16145 5.54529 9.28265H22.1881C22.1881 9.16145 22.1851 9.04068 22.1794 8.92056C22.1785 8.90219 22.1766 8.88404 22.1755 8.86567C22.0797 7.10144 21.3807 5.47304 20.2853 4.2221C19.828 3.69963 19.3016 3.24282 18.7213 2.86951L20.5224 1.13401C20.8001 0.866524 20.8001 0.469407 20.5224 0.201815ZM10.3975 6.94746C9.8232 6.94746 9.35765 6.49888 9.35765 5.94554C9.35765 5.39221 9.8232 4.94362 10.3975 4.94362C10.9717 4.94362 11.4373 5.39221 11.4373 5.94554C11.4373 6.49888 10.9717 6.94746 10.3975 6.94746ZM17.3359 6.94746C16.7616 6.94746 16.2961 6.49888 16.2961 5.94554C16.2961 5.39221 16.7616 4.94362 17.3359 4.94362C17.9101 4.94362 18.3757 5.39221 18.3757 5.94554C18.3757 6.49888 17.9101 6.94746 17.3359 6.94746Z" fill="white"/>
            </svg>
          </a>
          <a href="#">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8411 32C7.00246 31.9726 3 22.2506 3 17.2994C3 9.21163 9.16415 7.441 11.5398 7.441C12.6104 7.441 13.7535 7.85481 14.7618 8.221C15.4669 8.47644 16.1961 8.74013 16.6017 8.74013C16.8445 8.74013 17.4165 8.51581 17.9216 8.319C18.9987 7.89694 20.3391 7.37238 21.8999 7.37238C21.9027 7.37238 21.9064 7.37238 21.9091 7.37238C23.0746 7.37238 26.6083 7.62413 28.7328 10.7644L29.2304 11.5004L28.5142 12.0324C27.4911 12.7923 25.6242 14.1784 25.6242 16.9241C25.6242 20.176 27.7385 21.4266 28.7542 22.0281C29.2026 22.2936 29.6667 22.5674 29.6667 23.1661C29.6667 23.5571 26.4967 31.9515 21.8933 31.9515C20.7669 31.9515 19.9707 31.6183 19.2684 31.3244C18.5578 31.0268 17.9448 30.7705 16.9318 30.7705C16.4184 30.7705 15.7691 31.0094 15.0817 31.2631C14.1424 31.6081 13.0792 32 11.8728 32H11.8411Z" fill="white"/>
              <path d="M22.3876 0C22.5075 4.25475 19.416 7.2065 16.3282 7.02137C15.8194 3.62594 19.4157 0 22.3876 0Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <div class="mobile-header" :class="firstAnimation ? 'animHead' : ''" v-if="mobileMode">
      <div class="mobile-header__up" :class="$store.state.activeMenu !== 0 ? 'fixedMenu' : ''">
        <router-link
          class="mobile-header__logo"
          to="/">
          <svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3375 12.9163C8.31772 10.2875 10.9148 8.1866 13.8993 6.79924C16.8838 5.41188 20.164 4.7807 23.4503 4.96145C26.7366 5.14219 29.9278 6.12929 32.7422 7.8356C35.5566 9.5419 37.9075 11.9149 39.5875 14.7451L41.04 13.8701L43.4288 12.4438C41.2594 8.78789 38.1762 5.7593 34.482 3.65574C30.7878 1.55218 26.6099 0.446045 22.3587 0.446045C18.1076 0.446045 13.9297 1.55218 10.2355 3.65574C6.54133 5.7593 3.45807 8.78789 1.28875 12.4438L0.125 14.4038L2.04125 15.5413L9.47875 19.9163C8.83828 21.5342 8.5145 23.2601 8.525 25.0001C8.52518 27.8338 9.39723 30.5988 11.0228 32.9199C12.6484 35.241 14.9487 37.0057 17.6116 37.9746C20.2746 38.9434 23.1711 39.0695 25.9082 38.3357C28.6452 37.6019 31.0902 36.0437 32.9113 33.8726L38.3275 37.0838C36.3459 39.7119 33.7477 41.8116 30.7624 43.1975C27.777 44.5834 24.4963 45.2129 21.21 45.0304C17.9237 44.848 14.7328 43.8591 11.9193 42.1512C9.10569 40.4433 6.75594 38.0689 5.0775 35.2376L1.2625 37.5126C3.43182 41.1685 6.51508 44.1971 10.2093 46.3007C13.9034 48.4043 18.0814 49.5104 22.3325 49.5104C26.5836 49.5104 30.7616 48.4043 34.4557 46.3007C38.1499 44.1971 41.2332 41.1685 43.4025 37.5126L44.54 35.5963L42.6237 34.4588L36.4987 30.8363L31.2487 27.8001C31.1274 28.1923 30.9783 28.5754 30.8025 28.9463C29.9207 30.8302 28.4355 32.366 26.5823 33.3105C24.7291 34.2551 22.6137 34.5543 20.5712 34.1608C18.5287 33.7674 16.6759 32.7037 15.3061 31.1383C13.9364 29.573 13.128 27.5954 13.0091 25.5187C12.8902 23.4421 13.4676 21.3851 14.6497 19.6736C15.8318 17.9621 17.5511 16.694 19.5354 16.07C21.5196 15.446 23.6553 15.5018 25.6043 16.2286C27.5532 16.9554 29.2039 18.3117 30.295 20.0826L34.1537 17.8601C33.0183 15.9781 31.4503 14.3942 29.5799 13.2398C27.7095 12.0855 25.5907 11.394 23.3994 11.2229C21.2081 11.0517 19.0076 11.4059 16.9807 12.2559C14.9537 13.1059 13.1588 14.4272 11.745 16.1101L6.3375 12.9163Z" fill="#FF7152"/>
          </svg>
        </router-link>
        <div class="mobile-header__title">
          Cryptographic Object <br>
          Resourse Engine
        </div>
        <div class="burger" :class="activeBurger ? 'active' : ''" @click="openBurger">
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="mobile-header__down" :class="activeBurger ? 'active' : ''">
        <div class="mobile-header__nav">
          <router-link
            v-for="nav in routes"
            :key="nav.id"
            :to="nav.route"
            class="font-18"
            :class="$store.state.activeMenu == nav.id ? 'active' : ''"
            @click.native="closeBurger(),activeLinkFunc(nav.id)"
          >
            {{nav.title}}
          </router-link>
        </div>
        <div class="mobile-header__socials-container">
          <div class="mobile-header__socials-title"><span>Follow us</span></div>
          <div class="mobile-header__socials">
            <a href="##" target="_blank">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5487 20V10.8777H10.6094L11.0686 7.32156H7.5487V5.05147C7.5487 4.0222 7.83334 3.32076 9.31099 3.32076L11.1925 3.31999V0.13923C10.8671 0.0969453 9.75021 0 8.45021 0C5.73561 0 3.87715 1.65697 3.87715 4.69927V7.32156H0.807129V10.8777H3.87715V20H7.5487Z" fill="white"/>
              </svg>
            </a>
            <a href="##" target="_blank">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
              </svg>
            </a>
            <a href="##" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path d="M19.9951 20.0001V19.9993H20.0001V12.6643C20.0001 9.07594 19.2276 6.31177 15.0326 6.31177C13.0159 6.31177 11.6626 7.41844 11.1101 8.4676H11.0517V6.64677H7.07422V19.9993H11.2159V13.3876C11.2159 11.6468 11.5459 9.96344 13.7017 9.96344C15.8259 9.96344 15.8576 11.9501 15.8576 13.4993V20.0001H19.9951Z" fill="white"/>
                  <path d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z" fill="white"/>
                  <path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="##" target="_blank">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99875 0.000244141C4.4775 0.000244141 0 4.5908 0 10.2537C0 14.783 2.865 18.6255 6.84 19.9825C7.34 20.0769 7.5225 19.7603 7.5225 19.4884C7.5225 19.2446 7.51375 18.5999 7.50875 17.7446C4.7275 18.3638 4.14 16.3698 4.14 16.3698C3.68625 15.1851 3.03 14.8698 3.03 14.8698C2.12125 14.234 3.0975 14.2468 3.0975 14.2468C4.10125 14.3196 4.62875 15.3038 4.62875 15.3038C5.52125 16.8702 6.97 16.4183 7.54 16.1553C7.63 15.4927 7.88875 15.0408 8.175 14.7842C5.955 14.5251 3.62 13.6455 3.62 9.71753C3.62 8.59797 4.01 7.68267 4.65 6.96523C4.54625 6.70609 4.20375 5.66313 4.7475 4.25251C4.7475 4.25251 5.5875 3.97677 7.4975 5.30313C8.295 5.0759 9.15 4.96229 10.0013 4.95846C10.85 4.96356 11.7062 5.0759 12.505 5.30441C14.4137 3.97805 15.2525 4.25379 15.2525 4.25379C15.7975 5.66568 15.455 6.70737 15.3525 6.96651C15.9937 7.68394 16.38 8.59925 16.38 9.7188C16.38 13.657 14.0425 14.5238 11.815 14.7779C12.1737 15.0945 12.4937 15.72 12.4937 16.6761C12.4937 18.0472 12.4812 19.1527 12.4812 19.4884C12.4812 19.7629 12.6613 20.082 13.1687 19.9812C17.1375 18.6229 20 14.7817 20 10.2537C20 4.5908 15.5225 0.000244141 9.99875 0.000244141Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeLink: 1,
      mobileMode: null,
      activeBurger: false,
      firstAnimation: false,
      routes: [
        {
          id: 1,
          title: 'Explore',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#explore'
          }
        },
        {
          id: 2,
          title: 'Community',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#community'
          }
        },
        {
          id: 3,
          title: 'FAQ',
          route: {
            name: 'Home',
            params: {
              id: this.$route.params.id
            },
            hash: '#faq'
          }
        },
        {
          id: 4,
          title: 'tokenomics',
          route: '/tokenomics'
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
    mobileModeFunc () {
      if (window.innerWidth >= 768) {
        this.mobileMode = false
      } else {
        this.mobileMode = true
      }
    },
    myEventHandler (e) {
      this.mobileModeFunc()
    },
    openBurger () {
      if (this.activeBurger === true) {
        this.activeBurger = false
      } else {
        this.activeBurger = true
      }
    },
    closeBurger () {
      this.activeBurger = false
    },
    activeLinkFunc (id) {
      setTimeout(() => {
        this.activeLink = id
        this.$store.commit('setMenuStatus', id)
      }, 100)
    }
  },
  mounted () {
    this.mobileModeFunc()
    setTimeout(() => {
      this.$store.commit('setMenuStatus', 0)
      this.firstAnimation = true
    }, 1200)
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }
}
</script>
<style scoped>
  .logo{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .logo{
    transform: translateY(0px);
    opacity: 1;
  }
  .header__download-container .buttons a:hover path{
    fill: #ff7152;
  }
  .header__download-container .buttons a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .header__download-container .buttons{
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .header__download-container .ttl{
    color: rgba(255,255,255,.6);
    font-size: 16px;
    margin-bottom: 25px;
  }
  .header__download-container{
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .header__download-container{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  header{
    position: fixed;
    width: 210px;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: transparent;
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 40px;
    border-right: 1px solid rgba(255,255,255,.05);
    border-bottom: 1px solid rgba(255,255,255,.05);
  }
  nav{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead nav{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .1s;
  }
  nav a{
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 10px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    -webkit-text-stroke: .8px rgba(255, 255, 255, 0);
    text-align: center;
  }
  nav a:hover{
    -webkit-text-stroke: .8px rgba(255, 255, 255, 1);
    color: transparent;
  }
  nav a.active,nav a.router-link-active{
    color: #ff7152;
    -webkit-text-stroke: .8px rgba(255, 255, 255, 0);
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    header{
      width: 180px;
      padding: 20px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .mobile-header__title{
      font-size: 13px;
      line-height: 18px;
      margin-left: 15px;
    }
    .mobile-header__up{
      position: relative;
      width: 100%;
      display: flex;
      padding: 15px;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,.05);
      z-index: 10;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .mobile-header__up.fixedMenu{
      background: rgba(0,5,15,.8);
    }
    .mobile-header{
      position: fixed;
      z-index: 99999;
      top: 0px;
      left: 0px;
      width: 100%;
    }
    .burger{
      height: 30px;
      width: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: auto;
    }
    .burger.active span:nth-child(1){
      transform: translateY(7px) rotate(-45deg);
    }
    .burger.active span:nth-child(2){
      transform: translateY(-8px) rotate(45deg);
    }
    .burger span{
      height: 2px;
      width: 100%;
      background: #fff;
      display: flex;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
    .mobile-header__down{
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: #00050F;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      opacity: 0;
      pointer-events: none;
      transition-delay: .6s;
    }
    .mobile-header__down.active{
      transition-delay: 0s;
      opacity: 1;
      pointer-events: all;
    }
    .mobile-header__nav{
      display: flex;
      flex-direction: column;
      margin-top: 135px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      transform: translateY(10px);
      opacity: 0;
    }
    .mobile-header__down.active .mobile-header__nav{
      transform: translateY(0px);
      opacity: 1;
    }
    .mobile-header__nav a{
      font-size: 42px;
      line-height: 48px;
      text-align: center;
      margin-bottom: 25px;
    }
    .mobile-header__socials-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
      margin-bottom: 40px;
    }
    .mobile-header__socials-title span{
      font-size: 20px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      transform: translateY(120%);
      display: flex;
    }
    .mobile-header__down.active .mobile-header__socials-title span{
      transform: translateY(0%);
      transition-delay: .2s;
    }
    .mobile-header__socials-title{
      margin-bottom: 15px;
      overflow: hidden;
    }
    .mobile-header__socials{
      display: flex;
      align-items: center;
    }
    .mobile-header__socials a{
      margin: 0px 8px;
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    }
   .mobile-header__socials svg{
      transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
      opacity: 0;
      transform: scale(.9);
    }
    .mobile-header__socials a:nth-child(1) svg{
      transition-delay: .3s;
    }
    .mobile-header__socials a:nth-child(2) svg{
      transition-delay: .4s;
    }
    .mobile-header__socials a:nth-child(3) svg{
      transition-delay: .5s;
    }
    .mobile-header__socials a:nth-child(4) svg{
      transition-delay: .6s;
    }
    .mobile-header__down.active .mobile-header__socials svg{
      opacity: 1;
      transform: scale(1);
    }
    .mobile-header__nav a.active{
      color: #FF7152;
    }
  }
</style>
