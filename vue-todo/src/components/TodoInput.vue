<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">add</button> 
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem: ''  // v-model을 통해 input에 입력된 값을 newTodoItem에 바인딩 된다. data 에 선언된 newTodoItem은 input에 입력된 값과 동기화 된다.
        }
    },
    methods:{
        addTodo: function(){  // v-on:click="addToto" : click 이벤트가 발생하면 addTodo 메소드를 실행한다.
        console.log('this.newTodoItem :>> ', this.newTodoItem);
        // 로컬 스토리지에 저장한다.
        localStorage.setItem(this.newTodoItem, this.newTodoItem)  // 로컬 스토리지에 저장한다. key, value // localstorage 는 key, value 형태로 저장한다. application tab 에서 확인 가능  
        this.clearInput();    
    },
        clearInput: function(){
            this.newTodoItem='';// input에 입력된 값을 초기화 한다. input box 초기화
        }
    }
}
</script>

<style>

</style>