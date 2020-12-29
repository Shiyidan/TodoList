<template>
  <div>
    <input type="check" class="todo-item"><label >111</label>
    
    <button></button>
  </div>
</template>

<script>
export default {
  name:'TodoItem'
}
</script>

<style scoped>
  .todo-item{
    display:flex;
    justify-content:space-between;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size:24px;
    justify-content: space-between;
  }
  input{
    width :50px;
    height :30px;
    appearance: none;
    border:none;
    outline:none;
  }
   

 

   
</style>