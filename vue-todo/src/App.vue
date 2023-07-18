<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: { // component 명 : component 
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
  }
}
</script>

<style>
body{
  text-align:center;
  background-color:#F6F6D4;
}

input{
  boarder-style:groove;
  width: 200px;
}

button{
  boarder-style:groove;
}

.shadow{
  box-shadow :5px 10ps 10px grba(0,0,0,0.03) 
}

</style>
