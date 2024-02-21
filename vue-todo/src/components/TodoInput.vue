<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem">
    <span class="addContainer" v-on:click="addTodo">
      <span class="addBtn">add</span>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
          <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!
        <span class="closeModalBtn" @click="showModal = false">닫기</span>
      </h3>
      <div slot="body">
        아무것도 입력하지 않으셨습니다.
      </div>
    </modal>
  </div>
</template>
<script>
import Modal from './common/Modal.vue'
export default {
  data: function(){
    return{
      newTodoItem:"",
      showModal: false
    }
  },
  methods: {
    addTodo: function(){
      if (this.newTodoItem !== ''){
        this.$emit('addToDoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function(){
       this.newTodoItem = '';
    }
  },
  components: {
  /*축약형 적용*/
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0.5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color : #42b983;
}
</style>