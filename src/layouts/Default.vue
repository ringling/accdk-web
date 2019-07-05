<template>
  <div id="page-wrapper">
    <Header :altHeader="altHeader"/>
    <slot/>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: ['altHeader']
}
</script>



