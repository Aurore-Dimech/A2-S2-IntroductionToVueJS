<script>
import { useContactStore } from '../stores/contact.js';

export default {
      name:'NewContact',

      setup() {
        const contactStore = useContactStore()
        return {
          contactStore
        }
      },

      data() {
            return{
                formPerso : {
                    name : '',
                    number : ''
                }
            }
        },

        methods: {
            addContact(){
                this.contactStore.addContact(this.formPerso)

                this.formPerso = {
                name:'',
                number: ''
                }
            }
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
    <h1>Nouveau Contact</h1>
    <form @submit.prevent="addContact()">

      <div>
        <h2>Nom</h2>
        <input type="text" placeholder="Nom" v-model="formPerso.name">
      </div>

      <div>
        <h2>Numéro de téléphone</h2>
        <input type="text" placeholder="Numéro de téléphone" v-model="formPerso.number">
      </div>

        <button type="submit">Ajouter</button>
        
    </form>
  </section>

</template>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      gap: 20px
    }
  }
</style>