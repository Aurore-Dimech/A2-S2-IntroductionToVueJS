<script>
import { useContactStore } from '../stores/contact.js';
import { useJournalStore } from '../stores/journal.js'


    export default {
        name:"ContactCard",

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
            <h2>{{ contact.name }}</h2>
            <p> {{ contact.number }}</p>
        </div>

        <div class="fullCardActions">
            <button class="callContact" @click="journalStore.callContact(contact)"><img src="../assets/callingButton.jpg" alt=""></button>
            <!-- <button class="removeContact" @click="contactStore.removeContactFromContactList(contact)">X</button> -->
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
        justify-content: space-between;
        align-items: center;
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