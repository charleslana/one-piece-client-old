<script setup lang="ts">
defineProps<{
  message: string;
}>();

const emit = defineEmits(['close']);

function closeModal(): void {
  emit('close');
}
</script>

<template>
  <div class="modal" :class="{ 'is-active': message !== '' }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Atenção</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        {{ message }}
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button" @click="closeModal">Ok</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
