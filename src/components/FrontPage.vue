<template>
<center>
  <div class="hello">
    <h1>{{ msg }}({{list.length?list.length:'0'}})</h1>
    <button id='invite-button'>
    <router-link style='text-decoration:none' to='/invite'>+ Invite Members</router-link></button>
    <div v-for='member in list' v-bind:key='member.email'><br><br>
    <MemberCard :email='member.email' :role='member.role'/>
    </div>
  </div>
</center>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MemberCard from '@/components/MemberCard.vue';

@Component({

  components: {
    MemberCard,
  },
  data() {
    return {
      members: [],
    };
  },
  computed: {

    list() { return this.$store.state.members; },

  },
})
export default class FrontPage extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.hello{
width:1000px;
background-image: linear-gradient(120deg, #659DBD, #FBEEC1);
padding:20px;
border-radius:20px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
</style>
