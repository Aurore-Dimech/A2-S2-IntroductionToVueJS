<script>
import { useContactStore } from '../stores/contact.js';
import { useJournalStore } from '../stores/journal.js'


    export default {
        name:"JournalCard",

        props: [
            'contact'
        ],

        setup() {
            const contactStore = useContactStore()
            const journalStore = useJournalStore()
            return {
                contactStore,
                journalStore
            }
        },

        computed: {
            contacts(){
                return this.contactStore.contacts
            }
        }
    }
</script>

<template>

    <div class="fullCard">

        <div>
            <h2>{{ contact.contact.name }} - {{ contact.contact.number }}</h2>
            <p>{{ contact.dateTime }}</p>
        </div>

        <div class="fullCardActions">
            <button class="callContact" @click="journalStore.callContact(contact.contact)"><img src="../assets/callingButton.jpg" alt=""></button>
        </div>

    </div>

</template>

<style scoped lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .fullCard {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    p {
        font-style: italic;
    }
    .callContact {
        background-color: rgb(57, 129, 57);
        border: none;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    
        img {
            height: 30px;
            width: 30px;
        }
    }
  }

</style>