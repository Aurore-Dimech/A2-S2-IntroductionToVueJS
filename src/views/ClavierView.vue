<script>
import { useContactStore } from '../stores/contact.js';
import { useJournalStore } from '../stores/journal.js';

    export default {
        name:'Clavier',

        setup() {
            const contactStore = useContactStore()
            const journalStore = useJournalStore()
            return {
                contactStore,
                journalStore
            }
        },

        data() {
            return{
                buttons: [
                    "1","2","3",
                    "4","5","6",
                    "7","8","9",
                    "*","0","#"
                ],
                inputValue:'',
                knownNumber: ''
            }
        },

        watch: {
            inputValue(){
                if(this.inputValue.length === 10) {
                    this.contacts.some(contact => {
                        if (this.inputValue === contact.number) {
                            this.knownNumber = contact
                            return true
                        } else {
                            this.knownNumber = {name : 'Inconnu', number : this.inputValue}
                        }
                    })
                }
            }
        },

        computed: {
            contacts(){
            return this.contactStore.contacts
            },
        },

        methods: {
            addNumber(number){
                this.inputValue += number;
            },

            removeNumber(){
                this.inputValue = this.inputValue.slice(0, -1)
            }
        }
    }
</script>

<template>
    <section id="allClavier">

        <form>
            <input type="text" v-model="inputValue">
            <div v-if="inputValue.length === 10">
                <h2> {{ knownNumber.name }}</h2>
            </div>
        </form>

        <div id="fullButtons">
            <div id="clavierNum">
                <div class="wrapperNumber" v-for="button in buttons" :key="button" @click="addNumber(button)">
                    <h2>{{ button }}</h2>
                </div>
            </div>
    
            <div id="actionsClavier">
                <button id="callingButton" @click='journalStore.callContact(this.knownNumber)'><img src="../assets/callingButton.jpg" alt=""></button>
                <button id="removeNumber" @click="removeNumber()"><img src="../assets/removeNumber.png" alt=""></button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#allClavier {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap : 30px;
    margin-top: 3rem;

    form {
        width: 100%;
        padding : 0 10%;

        input {
            width: 100%;
            border: 2px solid var(--color-border);
            height: 8vh;
            border-radius: 15px;
        }
    }

    #fullButtons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap : 20px;

        #clavierNum {
            display: grid;
            grid-template-columns: repeat(3, 60px);
            gap: 20px;
        
            .wrapperNumber {
                background-color: var(--color-border);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
        }

        #actionsClavier{
            display: flex;
            align-items: center;
            gap:20px;
    
            #callingButton {
                background-color: rgb(57, 129, 57);
                height: 80px;
                width: 80px;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
        
                img {
                    height: 50px;
                    width: 50px;
                }
            }
    
            #removeNumber {
                height: 60px;
                width: 60px;
                border: none;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
    
                img{
                  height: 30px;
                  width: 30px;  
                }
            }
        }
    }

    
}
</style>