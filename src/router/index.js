import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'
import JournalView from '../views/JournalView.vue'
import ClavierView from '../views/ClavierView.vue'
import AddContact from '../views/AddContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/addContact',
      name: 'addContact',
      component: AddContact
    }
  ]
})

export default router
