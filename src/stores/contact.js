import {defineStore} from "pinia";

export const useContactStore = defineStore('contact', {
    state: () =>({
        contacts: [
            {
            name : 'Obi-Wan',
            number : "0101010101"
            },
            {
            name : 'Qui-Gon',
            number: "0202020202"
            },
            {
            name: 'Yoda',
            number: "0303030303"
            }
        ]
    }),

    actions : {
        addContact(contact) {
            this.contacts.push(contact)
        }

    }
})