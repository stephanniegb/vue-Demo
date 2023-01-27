    import Vue from "vue";
    import VueX from 'vuex';
    
    Vue.use(VueX)

    export default {
        state: {
            count: 23
        },
        mutation: {
            increament(state, num){
                state.count += num;
            }
        },
        actions: {
            asyncIncreament({commit},asyncNum){
                setTimeout(() => {
                    commit('increament', asyncNum);
                }, 3000)
            }
        },
        getters: {
            doubleCount(state) {
                return state.count * 2
            }
        }
    }