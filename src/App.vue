<template>
  <div>
    <main-header>
      
    </main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
import './assets/styles/global.css'
import MainHeader from './components/MainHeader.vue'
import MainTodo from './components/MainTodo/MainTodo.vue'

export default {
  name: 'App',
  components:{
    MainHeader,
    MainTodo
  },
  data(){
    return {
      todoData:["todo1","todo2","todo3"],
      content:''
    }
  },
  methods:{
    addTodo(){//完成添加新todo
      if(this.content==="") return
      this.todoData.push(this.content)
      this.content=""
    }
  }
}
</script>

<style>

</style>
