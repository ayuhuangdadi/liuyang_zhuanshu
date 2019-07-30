import Vue from 'vue'
import Vuex from "vuex"
import {getGongYiList} from '../api/index';

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        getData(){
            return getGongYiList()
        }
    },
    getters: {},
    modules: {}
})

export default store