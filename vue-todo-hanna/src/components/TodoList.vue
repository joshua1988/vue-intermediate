<template>
  <div>
      <ul>
          <li v-for="item in todoItems" v-bind:key="item">
              {{item}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            todoItems: []
        }
    },
    created: function(){
        if(localStorage.length > 0) {
            for (var i=0; i<localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style>

</style>