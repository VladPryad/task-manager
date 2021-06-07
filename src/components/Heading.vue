<template>
    <div id="wrapper">
        <div class="heading">
            <div> <span>username</span> <div @click="usernameSortClick" id="username" v-bind:class="this.currentClass('username')"></div> </div>
            <div> <span>email</span> <div @click="emailSortClick" id="email" v-bind:class="this.currentClass('email')"></div> </div>
            <div> <span>text</span> </div>
            <div> <span>status</span> <div @click="statusSortClick" id="status" v-bind:class="this.currentClass('status')"></div> </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Heading',
  methods: {
      ...mapMutations(['setSortField', 'setSortDirection']),
      ...mapActions(['fetchTasks']),
      usernameSortClick() {
          if(this.getSortField != 'username') {
              this.setSortDirection('');
          }
          this.setSortField('username');
          this.setSortDirection(this.nextDirection);
          if(this.getSortDirection != '') {
              this.fetchTasks({
                page: this.getPage,
                sort_field: this.getSortField,
                sort_direction: this.getSortDirection
            });
            }
        },
        emailSortClick() {
            if(this.getSortField != 'email') {
              this.setSortDirection('');
          }
          this.setSortField('email');
          this.setSortDirection(this.nextDirection);
          if(this.getSortDirection != '') {
              this.fetchTasks({
                page: this.getPage,
                sort_field: this.getSortField,
                sort_direction: this.getSortDirection
            });
            }
        },
        statusSortClick() {
            if(this.getSortField != 'status') {
              this.setSortDirection('');
          }
          this.setSortField('status');
          this.setSortDirection(this.nextDirection);
          if(this.getSortDirection != '') {
              this.fetchTasks({
                page: this.getPage,
                sort_field: this.getSortField,
                sort_direction: this.getSortDirection
            });
            }
        },
      currentClass(field) {
          if(this.getSortField != field) return 'arrowDownTransparent'
          if(this.getSortDirection == 'asc') return 'arrowUpFilled'
          if(this.getSortDirection == 'desc') return 'arrowDownFilled' 
          return 'arrowDownTransparent'
      }
        
    },
  computed: {
      ...mapGetters(['getSortField', 'getSortDirection', 'getPage']),
      nextDirection: {
          get() {
              if(this.getSortDirection == '') {
                  return 'desc';
              } else if(this.getSortDirection == 'desc') {
                  return 'asc';
              }
              return '';
          }
      }
  }
}
</script>

<style scoped lang="scss">
.heading {
    display: grid;
    height: 20px;
    width: 70vw;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
}
.heading > div {
    border-width: 0 1px 0 1px;
    border-style: solid;
    background-color: rgb(224, 224, 224);
    display: flex;
    align-items: center;
    justify-content: center;
}
#wrapper {
    display: flex;
    justify-content: center;
}
.arrowDownTransparent {
    width: 0; 
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #ffffff;
    margin-left: 10px;
}
.arrowUpFilled {
    width: 0; 
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid #24375B;
    margin-left: 10px;
}
.arrowDownFilled {
    width: 0; 
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #24375B;
    margin-left: 10px;
}
</style>
