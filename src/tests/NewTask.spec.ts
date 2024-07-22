import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NewTask from '../components/NewTask.vue';

describe('NewTask.vue', () => {
  it('should render the component correctly', () => {
    const wrapper = mount(NewTask);
    expect(wrapper.find('textarea').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should emit add-task event with task text when button is clicked', async () => {
    const wrapper = mount(NewTask);
    await wrapper.find('textarea').setValue('New Task');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('add-task')).toBeTruthy();
    expect(wrapper.emitted('add-task')![0]).toEqual(['New Task']);
  });

  it('should clear textarea after adding task', async () => {
    const wrapper = mount(NewTask);
    await wrapper.find('textarea').setValue('New Task');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('textarea').element.value).toBe('');
  });

  it('should adjust textarea height based on content', async () => {
    const wrapper = mount(NewTask);
    const textarea = wrapper.find('textarea');
    await textarea.setValue('This is a longer text that should adjust the height');
    await textarea.trigger('input');
    expect(textarea.element.style.height).not.toBe('auto');
  });
});