<script setup lang="ts">
import { ref } from 'vue';
import NewTask from './components/NewTask.vue';
import TaskList from './components/TaskList.vue';
import { items } from './tasks.json';

const tasks = ref<Task[]>(items);

const addTask = (taskText: string) => {
  const newTask = {
    id: Date.now(),
    text: taskText,
  };
  tasks.value.push(newTask);
};

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
};
</script>

<template>
  <div class="min-h-screen bg-stone-900 text-white p-5">
    <h1 class="text-3xl font-bold mb-8 text-dandelion-400">Vue Task List App</h1>
    <div class="bg-stone-800 p-5 rounded shadow-md">
      <NewTask @add-task="addTask" />
    </div>
    <TaskList :tasks="tasks" @delete-task="deleteTask" />
  </div>
</template>

<style scoped>
</style>