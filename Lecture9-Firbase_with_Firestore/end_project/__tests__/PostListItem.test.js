import { shallowMount } from '@vue/test-utils'
import PostListItem from "@/components/PostListItem";

describe("Testing the PostListItem component", () => {
  it("renders title and description correctly", () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        title: "Blog Post Title",
        description: "Blog Post Description"
      }
    });

    expect(wrapper.text()).toMatch("Blog Post Title");
    expect(wrapper.text()).toMatch("Blog Post Description");
  })

  it("renders tags with a prepended #", () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        tags: ["hcm", "symptoms"]
      }
    });
    expect(wrapper.text()).toMatch("#hcm");
    expect(wrapper.text()).toMatch("#symptoms");
  })

  it("truncates long descriptions", () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        description: "Very long blog post description that goes over 50 characters"
      }
    });
    expect(wrapper.text()).toMatch("Very long blog post description that goes over 50 ...");
  })
})

