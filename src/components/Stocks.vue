<template>
  <div>  <div class="main">
    <div class="options Alphabet">
      <div class="title">
        <h3>Google</h3><p>(price: {{alphabetPrice}} )</p>
      </div>
        <input type="text">
        <button>Buy</button>
      
    </div>
     <div class="options Amazon">
      <div class="title">
        <h3>Amazon</h3><p>(price: {{amazonPrice}} )</p>
      </div>
        <input type="text">
        <button>Buy</button>
      
    </div>
     <div class="options Alibaba">
      <div class="title">
        <h3>Alibaba</h3><p>(price: {{alibabaPrice}} )</p>
      </div>
        <input type="text">
        <button>Buy</button>
    </div>
     <div class="options Tesla">
      <div class="title">
        <h3>Tesla</h3><p>(price: {{teslaPrice}})</p>
      </div>
        <input :teslaQuantity="quantity" type="text">
        <button @click="buy">Buy</button>
    </div>
 
  </div></div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'Stocks',
  computed: {
    ...mapGetters([
      'alphabetPrice',
      'amazonPrice',
      'alibabaPrice',
      'teslaPrice', 
      'teslaQuantity'
    ]),
  
  }, 
  methods: {
    ...mapMutations([
      'buyAlphabet'
    ]),
    // behind the scene a mutation syntax is : 
      teslaQuantity() {
        this.$store.dispatch('teslaQuantity')
      }, 
      buy(){
        // this.$store.commit('buy', sum)
        // this.$store.state.funds - sum }
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 10px;
  margin: auto 5px;
}
button {
  background-color: cadetblue;
  color: white;
  border-radius: 5px;
  border: 1px solid cadetblue;
  margin: auto 10px;
  padding: 10px;
}
.title {
  background-color: cadetblue;
  color: white;
  margin: 5px 5px 10px 5px;
  padding: 2px 0px 2px 15px;
  border-radius: 5px;
}
.options {
   border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  margin: 20px 40px;
  padding: 10px;
  width: 75%;
}
.main {
  display: grid; 
  grid-template-columns: 50% 50%;
}
</style>
