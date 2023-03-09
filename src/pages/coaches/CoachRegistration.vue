<template>
    <section>
        <card-base>
            <h2>Register as a coach.</h2>
            <coach-form @save-data="saveData"></coach-form>
        </card-base>
    </section>    
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm,
    },
    methods: {
        saveData(data){
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches'); // ao inves do push para n voltar para o form
        },      
    }
}
</script>