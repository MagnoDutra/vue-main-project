<template>
    <div class="checkbox-filter">
        <input type="checkbox" name="frontend" id="frontend" checked @change="setFilter"/>
        <label for="frontend">Frontend</label>
      </div>
      <div class="checkbox-filter">
        <input type="checkbox" name="backend" id="backend" checked @change="setFilter"/>
        <label for="backend">Backend</label>
      </div>
      <div class="checkbox-filter">
        <input type="checkbox" name="career" id="career" checked @change="setFilter"/>
        <label for="career">Career</label>
      </div>
</template>

<script>
export default {
  emits: ['change-filter'],
  data(){
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      }
    };
  },
  methods: {
    setFilter(event){
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive        
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  }
}
</script>

<style scoped>
.checkbox-filter {
    display: inline-block;
    margin-right: 1.2rem;
} 

.checkbox-filter input {
    margin-right: 0.5rem;
}
</style>