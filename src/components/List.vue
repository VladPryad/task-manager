<template>
<div>
    <div class="list">
        <ul>
            <li v-for="task in this.getTasks" :key="task.id" >
                <Task v-bind:task=task />
            </li>
        </ul>
    </div>
    <div id="pages">
        <ul>
                <li v-for="i in Math.ceil(this.getTotal/3)" :key="i"><a  @click="changePage"> {{i}} </a></li>
        </ul>
    </div>
</div>
</template>

<script>
import Task from "@/components/Task.vue";
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'List',
  async mounted() {
      this.fetchTasks({page: this.getPage});
  },
  components: {
      Task
  },
  computed: {
      ...mapGetters(['getTasks', 'getPage', 'getTotal'])
  },
  methods: {
      ...mapActions(['fetchTasks']),
      ...mapMutations(['setPage']),
      changePage(event) {
          event.stopPropagation()
          this.setPage(event.srcElement.innerText);
          this.fetchTasks({page: this.getPage});
      }
  }
}
</script>

<style scoped lang="scss">
.list {
    display: flex;
    justify-content: center;
}

ul {
    list-style: none;
    padding: 0;
}
#pages {
    display: flex;
    justify-content: center;
}

#pages ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

#pages li{
    float: left;
}
#pages li a {
    display: inline;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}
</style>
