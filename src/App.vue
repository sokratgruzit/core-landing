<template>
  <div id="app">
    <FirstStep/>
    <EmailPopup/>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/modules/Header'
import Footer from './components/modules/Footer'
import FirstStep from './components/FirstStep'
import EmailPopup from './components/EmailPopup'

export default {
  components: {
    EmailPopup,
    Header,
    Footer,
    FirstStep
  }
}
</script>
