<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-blue">
          <h2>Exercise</h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <!-- 1. Add code to manage a list of tasks. -->
          <el-input placeholder="Input item" v-model="inputTask"></el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <!-- 1. When "Add Task" is clicked, a new task with the entered text should be added. -->
          <el-button type="primary" @click="addTask">Add Task</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="taskListIsVisible">
      <el-col :span="24">
        <div class="grid-content-black bg-white">
          <el-card class="box-card">
            <div class="text item" v-for="task in tasks" :key="task">
              <!-- 2. Output the list of tasks here. -->
              {{ task }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <!-- 3. When the button below is clicked, the list should be shown or hidden. -->
          <!-- BONUS: Also update the button caption. -->
          <el-button type="primary" @click="toggleTaskList">{{ buttonCaption }}</el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "App",

  setup() {
    const inputTask = ref("");
    const tasks = ref([]);
    const taskListIsVisible = ref(true);

    const buttonCaption = computed(() => {
      return taskListIsVisible.value ? "Hide List" : "Show List";
    });

    function addTask() {
      tasks.value.push(inputTask.value);
    }

    function toggleTaskList() {
      taskListIsVisible.value = !taskListIsVisible.value;
    }

    return { inputTask, tasks, taskListIsVisible, addTask, toggleTaskList, buttonCaption };
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-blue {
  background: #68a1f1;
}
.bg-purple {
  background: #d3dce6;
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
.grid-content-black {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  color: black;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-button {
  display: block;
  width: 100%;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
