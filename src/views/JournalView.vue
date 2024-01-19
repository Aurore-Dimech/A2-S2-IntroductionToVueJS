<script>
import JournalCard from '../components/JournalCard.vue';
import { useJournalStore } from '../stores/journal.js'

    export default {
        name:'Journal',

        setup() {
        const journalStore = useJournalStore()
        return {
          journalStore
        }
      },

      components: {
        JournalCard
      },

      computed: {
        calls(){
          return this.journalStore.calls
        },
      }
    }
</script>

<template>
  <section>
    <h1>Journal</h1>

    <div id="noCall" v-if="calls.length === 0">
      <h2>Vous n'avez pas d'appels récents</h2>
    </div>

    <div class="individualCard" v-for="contact in calls" :key="contact.name">
      <JournalCard :contact="contact"/> 
    </div>

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
    padding-bottom: 20px;
    margin-top : 3rem;
  }

  #noCall{
    padding-top: 1rem;
    width: 80%;
    text-align: center;
    border-top: 1px solid grey;
  }
  .individualCard {
    padding-top: 0.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-top: 1px solid grey;
  }
</style>