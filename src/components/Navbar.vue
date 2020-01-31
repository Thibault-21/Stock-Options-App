<template>
<div class="main"> 
  <div class="link">
    <router-link class="stockTrader" to="/" tag="li" active-class="active" exact><a>Stock Trader</a></router-link>
    <router-link class="portfolio" to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
    <router-link class="stocks" to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
    <!--  -->
  </div>
  <div class="time">
    <button class="btn btn-1">End Day</button>
    <form action="">
      <select options="save&load">
        <option value="Save Data">Save Data</option>
        <option value="Load Data">Load Data</option>
      </select>
    </form>
    <p><strong>Funds: {{myFunds}} $</strong></p>
  </div>
</div>
    
</template>

<script>
export default {
  name: 'Navbar', 
  computed: {
    myFunds(){
      return this.$store.state.funds;
    }
  }
}
</script>

<style scoped>
router-link {
  margin : auto 10px;
}
.active {
  background-color: cadetblue;
  border-radius: 5px;
}
li, a {
  margin: auto;
  list-style-type: none;
  text-decoration: none;
  padding: 10px 5px;
  height: 20px;
  color: black;
}
.btn {
  border-radius: 5px;
  border: 1px solid rgb(54, 84, 180);
  color: white;
  background-color: rgb(54, 84, 180);
  height: 40px;
  width: 100px;
  margin: auto 5px;
  grid-template-columns: 1;
  grid-column-end: 2;
}

select {
  border: none;
  height: 40px;
  margin: auto 5px;
  padding: 5px;
  grid-template-columns: 2;
  grid-column-end: 3;
  background-color: rgba(255, 255, 255, 0)
}
.portfolio {
grid-column-start: 2;
grid-column-end: 3;
}
.stocks {
grid-column-start: 3;
grid-column-end: 4;
}
.stockTrader {
grid-column-start: 1;
grid-column-end: 2;
}
.link {
  display: grid;
  grid-template-columns: 25% 25% 25% auto;
  grid-template-rows: 100%;
  margin: 10px 1px 1px 1px; 
}
.time {
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-template-rows: 100%;
  margin: 10px 1px 1px 1px; 
}
.main {
  display: grid; 
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  grid-gap: 10px;
  border: 1px solid cadetblue;
  border-radius: 5px;
  padding: 20px;
  margin: auto 20px;
}
</style>
