<template>
  <h3>{{ fullName }}</h3>
  <h4>${{ price }}/hour</h4>
  <div class="badges">
    <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
  </div>
  <div class="coach-buttons">
    <base-button link :to="contactCoachLink" mode="outline">Contact</base-button>
    <base-button link :to="viewCoachDetailsLink">View Details</base-button>
  </div>
</template>

<script>
export default {
  props: ["id", "first-name", "last-name", "areas", "price"],
  computed: {
    fullName(){
      return this.firstName + ' ' + this.lastName;
    },
    contactCoachLink(){
      return '/coaches/' + this.id + '/contact';
    },
    viewCoachDetailsLink(){
      return this.$route.path + '/' + this.id; // Dessa maneira é melhor para manutenção do código
    }
  }
};
</script>

<style scoped>
.coach-buttons{
  display: flex;
  justify-content: right;
}

.coach-buttons a{
  margin-left: 1rem;
}

h3, h4{
  margin: 0.5rem 0;
}

.badges{
  margin-bottom: 1.5rem;
}
</style>
