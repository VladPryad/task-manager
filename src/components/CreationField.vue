<template>
    <div>
        <div id="wrapper">
            <div class="forms">
                <input v-model="username" placeholder="username">
                <input v-model="email" placeholder="email">
                <textarea v-model="text"  placeholder="text"></textarea>
            </div>
            <button v-on:click="create">Create</button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import createTask from "@/actions/createTask";

export default {
  name: 'CreationField',
  methods: {
      ...mapMutations(['setUsername','setEmail','setText','setStatus']),
      async create() {
          let res = await createTask(this.getFields);
          console.log(res)
      }
  },
  computed: {
      ...mapGetters(['getFields']),
      username: {
          get() {
              return this.getFields.username;
          },
          set(value) {
              this.setUsername(value);
          }
      },
      email: {
          get() {
              return this.getFields.email;
          },
          set(value) {
              this.setEmail(value);
          }
      },
      text: {
          get() {
              return this.getFields.text;
          },
          set(value) {
              this.setText(value);
          }
      },
      status: {
          get() {
              return this.getFields.status;
          },
          set(value) {
              this.setStatus(value);
          }
      }
  }
}
</script>

<style scoped lang="scss">
.forms {
    display: grid;
    height: 250px;
    width: 70vw;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    grid-gap: 40px;
}
input {
    height: 30px;
    width: 30vw;
}
textarea {
    height: 150px;
    width: 50vw;
}
button {
    height: 30px;
    width: 70px;
    align-self: center;
}
span {
    
}
#wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}
</style>
