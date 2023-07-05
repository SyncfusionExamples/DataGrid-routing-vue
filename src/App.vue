<template>
  <div id="app">
    <nav>
      <ul class="router-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
.router-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0d6efd;
}

.router-list li {
  float: left;
}

.router-list li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none !important;
}

.router-list li a:hover {
  background-color: hsl(200, 38%, 55%);
  text-decoration: none;
}
</style>