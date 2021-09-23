<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoInput from './components/TodoInput.vue';

// var my_cmp = {
//   template: '<div>my component</div>',
// };

// new Vue({
//   el: '',
//   components: {
//     'my-cmp': my_cmp,
//   },
// });

export default {
  components: {
    //컴포넌트 태그명: 컴포넌트 내용  --태그명은 내가 임의로 지정 , 컴포넌트 내용은 임포트로 지정한 것
    TodoHeader: TodoHeader, //TodoHeaer라는 컴포넌트 내용을 들고와서 TodoHeader라는 태그에 박아 넣음
    //즉 변수가 컴포넌트에 등록되는 과정
    TodoList: TodoList,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  widows: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0 0.03);
}
</style>
