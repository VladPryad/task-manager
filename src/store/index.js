import Vue from 'vue'
import Vuex from 'vuex'
import { getTasks } from "@/query"
import creation from "@/store/modules/creation"
import admin from "@/store/modules/admin"
import signIn from "@/store/modules/signIn"
import editing from "@/store/modules/editing"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    page: 1,
    total: 1
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotal(state, total) {
      state.total = total;
    }
  },
  actions: {
    async fetchTasks(context, params = {}) {
      let res = await getTasks(params);
      if(res.data.status != "ok") {
        console.log(res.data.message);
        return;
      }

      context.commit('setTasks', res.data.message.tasks);
      context.commit('setTotal', res.data.message.total_task_count);
    }
  },
  modules: {
    creation,
    admin,
    signIn,
    editing
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getPage(state) {
      return state.page;
    },
    getTotal(state) {
      return state.total;
    }
  }
})
