import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe("Testing the App component", () => {
  it("renders blog title correctly", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch("The Cardiomyopathy Blog")
  })
})

