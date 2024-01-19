<script>
import ContactCard from '../components/ContactCard.vue';
import { useContactStore } from '../stores/contact.js';
import { useJournalStore } from '../stores/journal.js'
import { RouterLink, RouterView } from 'vue-router'

    export default {
      name:'Contacts',

      setup() {
        const contactStore = useContactStore()
        const journalStore = useJournalStore()
        return {
          contactStore,
          journalStore
        }
      },

      components: {
        ContactCard
      },

      computed: {
        contacts(){
          return this.contactStore.contacts
        },
      }

    }
</script>

<template>

  <section>

    <h1>Contacts</h1>
    <div id="newContact">
      <RouterLink to="/addContact"><img src="../assets/newContact.png" alt=""></RouterLink>
    </div>
    
    <div class="individualCard" v-for="contact in contacts" :key="contact.name">
      <ContactCard :contact="contact"/> 
    </div>

    <RouterView />
  </section>

</template>

<style scoped lang="scss">

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 20px;
  }

  h1 {
    margin-top: 3rem;
    padding-bottom: 20px;
  }

  #newContact{
    position: fixed;
    bottom: 15%;
    right: 7%;
    background-color: var(--color-border);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
    }
  }
  .individualCard {
    padding-top: 0.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-top: 1px solid grey;

    :first-of-type{
      border: none;
    }
  }

</style>