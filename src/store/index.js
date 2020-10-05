import Vue from 'vue'
import Vuex from 'vuex'
import { contactService } from '../services/contact.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    contacts(state) {
      return state.contacts;
    }
  },
  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts;
    }
  },
  actions: {
    async loadContacts({ commit }) {
      const contacts = await contactService.query();
      commit({ type: 'setContacts', contacts })
    },
    async updateContact({ commit }, contact) {
        if (!contact.id) {
          const contacts = await contactService.add(contact);
          commit({ type: 'setContacts', contacts });
        } else {
          const contacts = await contactService.update(contact);
          commit({ type: 'setContacts', contacts });
        }
      },
      async deleteContact({ commit }, contactId) {
        const contacts = await contactService.remove(contactId);
        commit({ type: 'setContacts', contacts });
    }
  },

  modules: {
  }
})
