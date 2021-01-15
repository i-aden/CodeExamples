<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-button style="padding: 0px 5px; font-size: 34px" type="plain">{{ friend.name }}</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="grid-content-show-detail bg-white">
        <el-button style="width: 100%" type="success" @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white" v-if="detailsAreVisible">
          <el-card class="box-card">Phone: {{ friend.phone }}</el-card>
          <el-card class="box-card">Email: {{ friend.email }}</el-card>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "ContactDetails",

  setup() {
    const detailsAreVisible = ref(false);

    const friend = reactive({
      id: "biden",
      name: "James Biden",
      phone: "01234 5678 991",
      email: "james.biden@thewhitehouse.com",
    });

    function toggleDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }

    return { friend, detailsAreVisible, toggleDetails };
  },
};
</script>

<style scoped>
.bg-purple-light {
  background: #e5e9f2;
}
.bg-white {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  color: white;
}
.grid-content-show-detail {
  border-radius: 4px;
  min-height: 26px;
  text-align: center;
  margin: auto;
  font-size: 10px;
}
.grid-content-black {
  border-radius: 4px;
  min-height: 26px;
  text-align: center;
  font-weight: bold;
}</style>
