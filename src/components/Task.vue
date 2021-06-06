<template>
  <div class="task">
      <div class="properties">
          <div>{{ trim(task.username, 20) }}</div>
          <div>{{ trim(task.email, 20) }}</div>
          <textarea v-on:blur="textBlur" v-if="this.isLoggedIn" v-model="text"></textarea>
          <div v-if="!this.isLoggedIn">{{ trim(task.text, 20) }}</div>
          <div>{{ trim( codeToText(task.status, this.isLoggedIn), 20) }}</div>
      </div>
    <input v-model="status" v-on:click="statusClick" v-if="this.isLoggedIn" type="checkbox">
  </div>
</template>

<script>
import { trimToFixedLength, codeToText } from "@/actions/utils"
import editTask from '@/actions/editTask'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Task',
  props: {
      task: Object
  },
  data() {
      return {
          text: "",
          status: false,
          statusCode: ""
      }
  },
  mounted() {
      this.text = this.task.text;
      this.statusCode = this.task.status;
      this.status = (this.statusCode == '1' || this.statusCode == '0') ? false : true;
  },
  methods: {
      ...mapMutations(['setMessage', 'setEditedText', 'setEditedStatus']),
      trim(text, length) {
          return trimToFixedLength(text, length);
      },
      codeToText(code, isLoggedIn) {
          return codeToText(code, isLoggedIn);
      },
      async textBlur(event) {
          if(!this.isLoggedIn) {
              this.setMessage("Please log in")
          }
          
          let res = await editTask({id: this.task.id, text: this.text, status: this.statusCode })
          if(res) this.setMessage(res)
      },
      async statusClick(event) {
          if(!this.isLoggedIn) {
              this.setMessage("Please log in");
          }
          this.statusCode = this.status ? '1' : '11';
          let res = await editTask({id: this.task.id, text: this.text, status: this.statusCode })
          if(res) this.setMessage(res)
      }
  },
  computed: {
      ...mapGetters(['isLoggedIn','getEditedFields'])
  }
}
</script>

<style scoped lang="scss">
.properties {
    display: grid;
    height: 50px;
    width: 70vw;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
}
.properties > div {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
}
input {
    
}
</style>
