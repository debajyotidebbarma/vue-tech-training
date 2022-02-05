<template>
<center>
    <div class="member-card">
      <div class="member-email">{{ email }}</div>
      <div class="member-role">({{ role }})</div>
      <br>
      <button>
      <router-link style='text-decoration:none' :to="{name:'EditMemberData',
      params:{email:email}}">Edit</router-link></button>
      <button style='margin-left:20px' v-on:click='removeMemberButton(email)'>Remove</button>
    </div>
    </center>
</template>

<script lang='ts'>

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({

  methods: {
    removeMemberButton(email) {
      // eslint-disable-next-line no-restricted-globals
      if (confirm(`Do you want to remove ${email}?`) === true) {
        this.$store.commit('remove', email);
      }
    },
  },
})
export default class MemberCard extends Vue {
    @Prop() private email!: string;

    @Prop() private role!: string;
}
</script>

<style>

.member-card{
padding: 10px;
width: 800px;
border-bottom:2px solid black;
border-shadow:50px black;
}

button{
box-shadow: 0px 0px 0px transparent;
border: 0px solid transparent;
text-shadow: 0px 0px 0px transparent;
text-decoration:none;
background-color:rgb(45, 52, 194,0.5);
color:black;
border-radius:5px;
width:120px;
height:20px;
}

.member-email{
font-weight:bold;
}

</style>
