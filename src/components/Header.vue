<template>
  <!-- Header -->
  <header id="header" v-bind:class="{ alt: isAlt }">

    <h1><a href="index.html">Agile Coach Camp Denmark</a></h1>
    <nav id="nav">
      <ul>
       
        <li><g-link to="/">Home</g-link></li>
        <li><g-link to="/program">Program</g-link></li>
        <li><g-link to="/faq">FAQ</g-link></li>
        <li><g-link to="/organizers">Organizers</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    props: ['altHeader'],
    computed: {
      isAlt: function () {
        return this.altHeader != null;
    }
    }
  }

</script>

