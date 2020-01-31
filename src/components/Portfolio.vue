<template>
  <div class="main">
    <div class="card">
      <div class="title">
        <h3>Title of option</h3><p>(Price: | Quantity: )</p>
      </div>
        <input type="text">
        <button>Sell</button>
    </div>
    <div class="card">
      <div class="title">
        <h3>Title of option</h3><p>(Price: | Quantity: )</p>
      </div>
        <input type="text">
        <button>Sell</button>
    </div>
    <div class="card">
      <div class="title">
        <h3>Title of option</h3><p>(Price: | Quantity: )</p>
      </div>
        <input type="text">
        <button>Sell</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  display: grid; 
  grid-template-columns: 33% 33% 33%;
}
.card {
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  margin: 20px 40px;
  padding: 10px;
  width: 75%;
}
.title {
  background-color: lightblue;
  padding: 1px 15px;
  border-radius: 5px;
  margin: 5px auto;
}
input {
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 10px auto;
  padding: 20px;
}
button {
  border-radius: 5px;
  background-color: lightcoral;
  color: white;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid lightcoral;
}
</style>
