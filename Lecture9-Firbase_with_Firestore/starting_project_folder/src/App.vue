<template>
  <div class="common-layout globalfont center">
    <router-link :to="{ name: 'PostList' }">
      <el-button type="success" icon="el-icon-s-home" circle></el-button>
    </router-link>
    <h2>The Cardiomyopathy Blog</h2>
    <!-- <post-list :posts="posts"></post-list> -->
  </div>
  <router-view :posts="posts" class="globalfont center" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const posts = ref([
      {
        slug: "cardiomyopathy-hcm",
        title: "What are the symptoms of HCM?",
        description: "Common symptoms of HCM",
        content: `Shortness of breath, Chest pain, Palpitations, Light headedness and fainting.
             You may find that you never have any serious problems related to your condition, and with treatment, your symptoms should be controlled. 
             However some people may find that their symptoms worsen or become harder to control in later life.
 
             The area of heart muscle that is affected by HCM and the amount of stiffening that occurs will determine how the symptoms affect you.`,
        tags: ["hcm", "hcm symptoms"],
      },
      {
        slug: "cardiomyopathy-dcm",
        title: "What are the symptoms of DCM?",
        description: "Common symptoms of DCM",
        content: `In most cases, DCM develops slowly, so some people can have quite severe symptoms before they are diagnosed. The most common symptoms are:
            shortness of breath, swelling of the ankles and abdomen, excessive tiredness and palpitations.`,
        tags: ["dcm", "dcm symptoms"],
      },
    ]);

    return { posts };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

.globalfont {
  font-family: "Open Sans Condensed", sans-serif;
}
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
}
</style>
