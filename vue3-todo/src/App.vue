<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <!-- <TodoInput @하위컴포넌트 이벤트 이름="상위컴포넌트의 메서드 이름"></TodoInput> -->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!-- <TodoList :프롭스이름="상위 컴포넌트의 데이터이름"></TodoList> -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import { useTodo } from './hooks/useTodo'
import { onBeforeMount } from 'vue';

export default {
  components: {
    // '컴포넌트 이름': 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList
  },

  data() {
    return {
      title: '할일 앱'
    }
  },
  
  setup() {
    const {
      todoItems,
      addTodoItem,
      fetchTodos
    } = useTodo();

    // 라이프 사이클 API
    onBeforeMount(() => {
      // console.log('2 : onBeforeMount called')
      todoItems.value = fetchTodos();
    })

    return { todoItems, addTodoItem }
  },
  methods: {
    removeTodoItem(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>