import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import TaskItem from '../components/TaskItem.vue';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/20/solid';

describe('TaskItem.vue', () => {
  it('renders task text', () => {
    const task: Task = { id: 1, text: 'Test Task' };
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    expect(wrapper.text()).toContain('Test Task');
  });

  it('emits delete-task event with task id when delete button is clicked', async () => {
    const task: Task = { id: 1, text: 'Test Task' };
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    await wrapper.find('button.bg-dandelion-700').trigger('click');

    const emitted = wrapper.emitted('delete-task');
    expect(emitted).toBeTruthy();
    expect(emitted![0]).toEqual([1]);
  });

  it('renders PencilSquareIcon and XCircleIcon', () => {
    const task: Task = { id: 1, text: 'Test Task' };
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    const pencilIcon = wrapper.findComponent(PencilSquareIcon);
    const xCircleIcon = wrapper.findComponent(XCircleIcon);

    expect(pencilIcon.exists()).toBe(true);
    expect(xCircleIcon.exists()).toBe(true);
  });
});