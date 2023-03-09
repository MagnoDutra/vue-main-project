import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Magno',
                    lastName: 'Dutra',
                    areas: ['frontend', 'backend'],
                    description: "Me chamo magno bla bla bla bla",
                    hourlyPrice: 30,
                },
                {
                    id: 'c2',
                    firstName: 'Jeh',
                    lastName: 'Sato',
                    areas: ['frontend', 'backend', 'career'],
                    description: "Me chamo Jeh bla bla bla bla",
                    hourlyPrice: 30,
                },
                {
                    id: 'c4',
                    firstName: 'Linkinho',
                    lastName: 'Max',
                    areas: ['frontend', 'career'],
                    description: "Me chamo link au au au",
                    hourlyPrice: 30,
                },
            ]
        };
    },
    mutations,
    actions,
    getters,
}