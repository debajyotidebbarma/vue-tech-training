<template>
<center>
    <div id='data-update-box'>
        <div id='data-update-title'>Change role for {{this.$route.params.email}}</div><br><br><br>
        <div id='page-desc'>You can either let your team members access everything in this site
            or assign specific role to them
        </div><br><br>
        <div id='update-form-div'>
            <form>
                <label>
                    <input type='checkbox' v-model='memberRole' value='Admin'/>
                    <div class='check-names'>Admin</div>
                    <br>
                    <div class='role-desc'>Access evrything in Chargebee</div>
                </label><br><br>
                <label>
                    <input type='checkbox' v-model='memberRole' value='Tech-support'/>
                    <div class='check-names'>Tech Suppport</div>
                    <br>
                    <div class='role-desc'>
                      User can view "subscription" and "product catalog" tabs.
                      Can also view add comments to, send, download individual
                      credit notes/ invoices.
                    </div>
                </label><br><br>
                <label>
                    <input type='checkbox' v-model='memberRole' value='Analyst'/>
                    <div class='check-names'>Analyst</div>
                    <br>
                    <div class='role-desc'>
                    In addition to tech support level access,
                     User will have access to SaaS metrics report</div>
                </label>
                <br><br>
                <input type='submit' class='submit-button'
                value='Update' @click.prevent='inputHandler'/>
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
      memberRole: [],
    };
  },
  methods: {
    inputHandler() {
      const updateMember = {
        role: this.memberRole[this.memberRole.length - 1],
        email: this.$route.params.email,
      };
      this.$store.commit('remove', this.$route.params.email);
      this.$store.commit('add', updateMember);
      this.$router.push('/');
    },
  },
})

export default class EditMemberPage extends Vue {}
</script>

<style>
#data-update-box{
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width:1200px;
  padding:50px;
 }

 #data-update-title{
  float: left;
  margin-left:70px;
  margin-top:30px;
  font-weight:bold;
  font-size:30px;
  display:block;
 }

 #page-desc{
 float:left;
 margin-left:70px;
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
 input{float:left;}

 .check-names{
 font-weight:bold;
 }
 .role-desc{
     float:left;
     margin-left:70px;
 }

</style>
