
import axios from 'axios';

export default {
    async contactCoach(context, payload){
        const newRequest = {
            email: payload.email,
            message: payload.message,
        };

        const response = await axios.post(`https://vue-http-coache-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, JSON.stringify(newRequest))

        const responseData = await response.data;

        if (response.status < 200 || response.status >= 300) {
            const error = new Error('Failed to send request');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId // só para ter a informação local
        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;

        const response = await axios.get(`https://vue-http-coache-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.data;

        if (response.status < 200 || response.status >= 300) {
            const error = new Error('Failed to fetch request');
            throw error;
        }

        const myRequests = [];

        for(const key in responseData){
            const newReq = {
                id: key,
                coachId: coachId,
                email: responseData[key].email,
                message: responseData[key].message,
            };

            myRequests.push(newReq)
        }

        context.commit('setRequests', myRequests);
    },
};