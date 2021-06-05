<template>
    <div id="wrapper">
        <div class="heading">
            <div>username</div>
            <div>email</div>
            <div>text</div>
            <div>status</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Heading'
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
</style>
