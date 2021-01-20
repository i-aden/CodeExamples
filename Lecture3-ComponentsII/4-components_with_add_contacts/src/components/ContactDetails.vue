<template>
  <el-card class="box-card-main">
      <!-- Name -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-button style="padding: 0px 5px; font-size: 34px" type="plain">{{ friend.name + " (" + friend.numMedals + " Medal)" }}</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- Button -->
    <el-row>
      <div class="grid-content-show-detail bg-white">
          <el-button style="width: 100%;" type="success" @click="toggleMedal">Toggle Medal Status</el-button>
          <el-divider></el-divider>
        <el-button style="width: 100%" type="success" @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</el-button>
      </div>
    </el-row>

    <!-- Details -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white" v-if="detailsAreVisible">
          <el-card>Phone: {{ friend.phone }}</el-card>
          <el-card>Email: {{ friend.email }}</el-card>
        </div>
      </el-col>
    </el-row>

  </el-card>
</template>


<script>
import { ref } from "vue";

export default {
  name: "ContactDetails",

  props: {
      id: {
          type: String,
          required: true,
      },
      friend: {
          type: Array,
          required: true,
      }
  },

  emits: ["toggle-medal"],

  setup(props, context) {
    const detailsAreVisible = ref(false);

    function toggleDetails() {
      detailsAreVisible.value = !detailsAreVisible.value;
    }

    const hasWonMedal = ref(false);

    function toggleMedal() {
        hasWonMedal.value = !hasWonMedal.value;
        context.emit("toggle-medal", props.id, hasWonMedal);
    }

    return { detailsAreVisible, toggleDetails, hasWonMedal, toggleMedal };
  },
};
</script>


<style scoped>
.box-card-main {
  margin-bottom: 20px;
}
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
}
</style>
