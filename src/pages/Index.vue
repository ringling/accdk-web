<template>
  <Layout altHeader="true">
    <Banner/>
    <Sponsors/>
    <Information/>
    <Why/>
    <Contact/>
  </Layout>
</template>

<script>

  import Banner from '~/components/Banner.vue'
  import Sponsors from '~/components/Sponsors.vue'
  import Information from '~/components/Information.vue'
  import Contact from '~/components/Contact.vue'
  import Why from '~/components/Why.vue'

  export default {
    metaInfo: {
      title: 'ACCDK'
    },
    components: {
      Banner,
      Sponsors,
      Information,
      Contact,
      Why
    }
  }
</script>
