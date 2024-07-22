<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import TaskItem from './TaskItem.vue';

const props = defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (event: 'delete-task', taskId: number): void;
}>();
</script>

<template>
  <div class="rounded shadow-md mt-16 overflow-y-auto h-[520px]">
    <ul class="grid gap-5">
      <TaskItem
        v-for="task in tasks.slice().reverse()"
        :key="task.id"
        :task="task"
        @delete-task="$emit('delete-task', $event)"
      />
    </ul>
  </div>
</template>

<style scoped>
</style>