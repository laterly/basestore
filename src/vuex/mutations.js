//import {example1,example2} from '@/vuex/mutations'
let mutations = {
    setHomePageData(state, data) {
        state.homePageData =  data;
    }
}

//mutations=Object.assign(mutations,example1,example2)if
export default mutations;
