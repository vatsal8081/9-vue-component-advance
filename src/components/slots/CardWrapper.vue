<template>
  <div>
      <h2>common html and logic and style of  {{ name }}</h2>

        <!-- this slot will be replace by html which we provide inside of cardComponent when using it -->
      <slot></slot>

  </div>
</template>

<script>
export default {
data(){
    return{
        name: 'Wrapper Component'
    };
}

}
</script>

<style scoped>
h2{
    color: blue;
}

</style>