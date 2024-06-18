<script setup lang="ts"></script>

<template>
  <div class="context">
    <div class="pd">
      <slot name="pd"></slot>
    </div>
  </div>
</template>

<style scoped>
.context {
  background: #f7f7f7;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 0px #008af3;
}

.context:before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 56px;
  background-image: url('../assets/images/layout/context-top.png');
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.pd {
  padding: 0 15px 15px 15px;
}
</style>
