<template>
  <div class="home">
    <img alt="Vue logo" style="height:80px" src="../assets/team-logo.png">
    <FrontPage msg="Total Members"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FrontPage from '@/components/FrontPage.vue'; // @ is an alias to /src

@Component({
  components: {
    FrontPage,
  },
})
export default class Home extends Vue {}
</script>
