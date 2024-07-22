<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { PlusCircleIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits<{
  (event: 'add-task', taskText: string): void;
}>();

const addTask = () => {
  if (newTaskText.value.trim()) {
    emit('add-task', newTaskText.value.trim());
    newTaskText.value = '';
  }
};

const textarea = ref<HTMLTextAreaElement | null>(null);
const newTaskText = ref<string>('');

const adjustHeight = () => {
  const element = textarea.value;

  if (element) {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }
};

onMounted(() => {
  adjustHeight();
});

watch(newTaskText, adjustHeight, {
  flush: 'post'
});
</script>

<template>
  <div class="flex justify-between">
    <div class="w-full">
      <textarea
        ref="textarea"
        v-model="newTaskText"
        placeholder="Add a new task..."
        class="textarea-auto-grow border border-stone-600 bg-stone-700 text-white p-2 rounded w-full placeholder-stone-400"
        required
        rows="1"
        @input="adjustHeight"
      />
    </div>
    <div class="pl-2">
      <button @click="addTask" class="bg-dandelion-500 text-white px-2 py-2 rounded">
        <PlusCircleIcon class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>