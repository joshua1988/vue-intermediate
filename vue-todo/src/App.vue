<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- 올라와서 신호를보내면 addOnItem메소드가 실행됨  -->
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOnItems"></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="togleOneItem"
    >
      <!-- toggleItem을 받아서 togleOneItem 메소드를 실행시킴 -->
    </TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
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
  data: function() {
    return {
      todoItems: []
    };
  },
  methods: {
    //아래에서 받은 todoItem 즉 인자로 받은거임. 오브젝트 만들고 setItem한거임
    addOnItems: function(todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    }, //removeOneItem을 받아서 removeOneItem을 실행시키는데 배열은 하나 없애고 로컬 스트리지도 없애는 코드
    togleOneItem: function(todoItem, index) {
      //todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;

      //로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },

  components: {
    //컴포넌트 태그명: 컴포넌트 내용  --태그명은 내가 임의로 지정 , 컴포넌트 내용은 임포트로 지정한 것
    TodoHeader: TodoHeader, //TodoHeaer라는 컴포넌트 내용을 들고와서 TodoHeader라는 태그에 박아 넣음
    //즉 변수가 컴포넌트에 등록되는 과정
    TodoList: TodoList,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput
  }
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
