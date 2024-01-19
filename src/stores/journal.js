import {defineStore} from "pinia";

export const useJournalStore = defineStore('journal', {
    state: () =>({
        calls: []
    }),

    actions : {
        callContact(contact) {
            const now = new Date();
            const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
            this.calls.push({contact, dateTime})
        }
    }
})