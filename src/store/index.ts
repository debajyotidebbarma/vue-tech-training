import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: [{ role: 'Admin', email: 'debajyoti.debbarma@chargebee.com' },
      { role: 'Admin', email: 'debajyoti.debbarma2@chargebee.com' }],
  },
  mutations: {
    add(state, memberData) {
      state.members.push(memberData);
    },
    remove(state, email) {
      state.members = state.members.filter((member) => member.email !== email);
    },
    // update:(state: { members: string | any[]; }, email:string, role:string )=>({
    //   for(let i=0;i<state.members.length,i++){
    //     if(state.members[i].email===email){
    //       state.members[i].role=role;
    //     }
    //   }
    // })

  },
  actions: {

  },
  modules: {},
  plugins: [vuexPersist.plugin],
});
