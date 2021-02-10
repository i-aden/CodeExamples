import PostListItem from "@/components/PostListItem";
import { shallowMount } from "@vue/test-utils";

describe("Testing the PostListitem component", () => {
  it("should do nothing if description length is less than 50 characters", () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        description: "Less than 50 characters",
      },
    });

    expect(wrapper.text()).toEqual("Less than 50 characters");
  });

  it("should truncate description to 50 characters and append '...' when length is longer than 50 characters", () => {
    const wrapper = shallowMount(PostListItem, {
      propsData: {
        description:
          "Should be more than the 50 allowed characters by a small amount",
      },
    });

    expect(wrapper.text()).toEqual("Should be more than the 50 allowed characters by a..."
    );
  });
});
