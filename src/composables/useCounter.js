import {ref} from 'vue';
export default function useCounter(initialCount = 0, stepCount = 1){
    const count = ref(initialCount)

    function increament(){
        count.value += stepCount
    }
    return {count, increament}
}