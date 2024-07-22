import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TaskList from '../components/TaskList.vue';
import TaskItem from '../components/TaskItem.vue';

describe('TaskList.vue', () => {
  it('renders tasks in reverse order', () => {
    const tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' }
    ];
    const wrapper = mount(TaskList, {
      props: { tasks },
    });

    const taskItems = wrapper.findAllComponents(TaskItem);
    expect(taskItems).toHaveLength(3);
    expect(taskItems[0].props('task').text).toBe('Task 3');
    expect(taskItems[1].props('task').text).toBe('Task 2');
    expect(taskItems[2].props('task').text).toBe('Task 1');
  });

  it('emits delete-task event with task id when a task is deleted', async () => {
    const tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' }
    ];
    const wrapper = mount(TaskList, {
      props: { tasks },
    });

    await wrapper.findComponent(TaskItem).vm.$emit('delete-task', 3);
    expect(wrapper.emitted('delete-task')).toBeTruthy();
    expect(wrapper.emitted('delete-task')![0]).toEqual([3]);
  });
});