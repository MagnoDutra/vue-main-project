<template>
    <section>
        <card-base>
            <h2>{{ fullName }}</h2>
            <h3>${{ price }}/hour</h3>
        </card-base>
    </section>
    <section>
        <card-base>
            <div>
                <h2>Send me a message!</h2>
                <base-button link :to="contactLink" @click="hideButton" v-if="!isContactOpen">Contact</base-button>
            </div>
            <router-view></router-view>
        </card-base>
    </section>
    <section>
        <card-base>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </card-base>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            selectedCoach: null,
            isContactOpen: false,
        };
    },
    computed: {
        fullName(){
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        areas(){
            return this.selectedCoach.areas;
        },
        description(){
            return this.selectedCoach.description;
        },
        price(){
            return this.selectedCoach.hourlyPrice;
        },
        contactLink(){
            return this.$route.path + '/contact';
        },
    },
    methods:{
        hideButton(){
            this.isContactOpen = true;
        }
    },
    created(){
        if(this.$route.path.includes('/contact')){
            this.isContactOpen = true;
        } else {
            this.isContactOpen = false;
        }

        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
    }
}
</script>

<style scoped>
h2{
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>