import { getHomePage} from '../js/service.js'
import { loading } from 'lin-popup';
let actions = {
    getHomePageData({ commit }) {
        let load = loading('正在加载');
        getHomePage().then(res => {
            console.log('res', res);
            load.hide();
            if(res.status===200)
            commit('setHomePageData', res.data.data);
        });
    }
}

export default actions;
