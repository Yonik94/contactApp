import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '../views/Contacts.vue';
import EditContact from '../views/Edit-Contact';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/edit/:id?',
    name: 'EditContact',
    component: EditContact
  },
]

const router = new VueRouter({
  routes
})

export default router
