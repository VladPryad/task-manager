<template>
  <div class="task">
      <div class="properties">
          <div>{{task.username}}</div>
          <div>{{task.email}}</div>
          <div>{{task.text}}</div>
          <div>{{task.status}}</div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
      task: Object
  }
}
</script>

<style scoped lang="scss">
.properties {
    display: grid;
    height: 20px;
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
</style>
