<template>
  <section>
    <card-base>
      <h2>Find Your Coach</h2>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </card-base>
  </section>
  <section>
    <card-base>
      <div class="list-nav">
        <base-button mode="outline" @click="refreshCoaches">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach && !isLoading">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-base
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :areas="coach.areas"
            :price="coach.hourlyPrice"
          ></coach-base>
        </li>
      </ul>
      <h3 v-else>No coaches found</h3>
    </card-base>
  </section>
</template>

<script>
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  methods: {
    async refreshCoaches(){
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  created() {
    this.refreshCoaches();
  }
};
</script>

<style scoped>
h2 {
  margin: 0 0 0.7rem 0;
}

ul {
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 2px solid black;
  border-radius: 10px;
  padding: 1.5rem;
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
}

.list-nav {
  display: flex;
  justify-content: space-between;
}
</style>
