<template>
  <div class="main">
    <nav>
      <slot name="nav"></slot>
    </nav>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
      
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
nav {
  background-color: lightblue;
  text-decoration: none;
  margin: auto 10px;
}
/* router-link {
  
} */
main {
  background-color: lightcoral;
}
footer {
  background-color: lightgreen;
}


</style>
