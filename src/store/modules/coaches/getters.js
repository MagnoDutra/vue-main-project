export default {
    coaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    // Talvez seria interessante eu utilizar uma variavel em state
    // para verificar e não precisar ficar iterando sobre a array sempre
    isCoach(_, getters, _2, rootGetters){
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        return coaches.some(coach => coach.id === userId);
    }
};