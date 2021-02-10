import { mount } from "@vue/test-utils";
import PostList from "@/components/PostList";

describe("Testing the PostList component", () => {
  it("renders the title and description for each post that is passed to PostListItem", () => {
    const wrapper = mount(PostList, {
      propsData: {
        posts: [
          {
            title: "Blog Post Title 1",
            description: "Blog Post Description 1",
          },
          {
            title: "Blog Post Title 2",
            description: "Blog Post Description 2",
          }
        ],
      },
    });

    const outputText = wrapper.text();
    expect(outputText).toContain("Blog Post Title 1");
    expect(outputText).toContain("Blog Post Description 1");
    expect(outputText).toContain("Blog Post Title 2");
    expect(outputText).toContain("Blog Post Description 2");
  });

  it("renders tags for each post", () => {
    const wrapper = mount(PostList, {
      propsData: {
        posts: [
          {
            tags: ["hcm", "symptoms"]
          },
          {
            tags: ["dcm", "symptoms"]
          }
        ]
      }
    })
    const outputText = wrapper.text()
    expect(outputText).toContain("#hcm")
    expect(outputText).toContain("#symptoms")
    expect(outputText).toContain("#dcm")
    expect(outputText).toContain("#symptoms")
  })
});
