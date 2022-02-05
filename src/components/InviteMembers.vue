<template>
<center>
   <div id='team-member-invite-box'>
      <div id='member-invite-title'>Invite a team member to use chargebee</div>
      <br><br><br>
      <div class='check-names desc'>
      You can either let your team members access evrything in this site
      or assign specific role to them
      </div>
      <br>
      <div id='invite-form-div'>
         <form>
            <br><br>
            <label  class='check-names check-options' for='member-email'>
            Email of the member</label><br>
            <input class='check-names'
               type='email' name='member-email' id='member-email' v-model='memberEmail'/><br><br>
            <label>
               <input class='check-names' type='checkbox' v-model='memberRole' value='Admin'/>
               <div class='check-names check-options'>Admin</div>
               <br>
               <div class='desc check-names'>Access evrything in Chargebee</div>
            </label><br><br>
            <br>
            <label>
               <input class='check-names' type='checkbox'
               v-model='memberRole' value='Tech-support'/>
               <div class='check-names check-options'>Tech Suppport</div>
               <br>
               <div class=' check-names desc'>
               User can view "subscription" and "product catalog" tabs.
               Can also view add comments to, send, download individual credit notes/ invoices.
               </div>
            </label><br><br>
            <br>
            <label>
               <input  class='check-names' type='checkbox' v-model='memberRole' value='Analyst'/>
               <div class='check-names check-options'>Analyst</div>
               <br>
               <div class='check-names desc'>
                  In addition to tech support level access,
                  User will have access to SaaS metrics report
               </div>
            </label><br><br>
            <br>
            <input class='check-names check-options submit-button'
            type='submit'  value='Invite' @click.prevent='inputHandler'/>
         </form>
      </div>
   </div>
</center>
</template>

<script>

import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      memberEmail: '',
      memberRole: [],
    };
  },
  methods: {
    inputHandler() {
      const newMember = {
        role: this.memberRole[this.memberRole.length - 1],
        email: this.memberEmail,
      };
      this.$store.commit('add', newMember);
      this.$router.push('/');
    },
  },
})

export default class InviteMembers extends Vue {}
</script>

<style>
 #team-member-invite-box{
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width:1200px;
  padding:30px;
 }
 #member-invite-title{
  float: left;
  margin-left:70px;
  margin-top:30px;
  font-weight:bold;
  font-size:30px;
  display:block;
 }
 .check-names{
  float:left;
 }
 input{
 margin-left:70px;
 }
 label{
 margin-left:70px;
 }
 .desc{
 margin-left:70px;
 }

 #parent{
 background-color: #659DBD;
 }

 .check-options{
 font-weight:bold;
 }

 .submit-button{
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

</style>
