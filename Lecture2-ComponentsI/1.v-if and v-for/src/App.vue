<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-blue">
          <h2>Shopping List</h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-input placeholder="Input item" v-model="listItem"></el-input>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-button type="primary" @click="addItem">Add Item</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white">
          <p v-if="shoppingList.length === 0">The list is empty!</p>
          <el-card class="box-card" v-else>
            <div
              class="text item"
              v-for="(item, index) in shoppingList"
              :key="item"
            >
              {{ item }} at index {{ index }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white">
          <el-card class="box-card">
            <div
              v-for="value in { name: 'Vue', version: 3 }"
              :key="value"
              class="text item"
            >
              {{ value }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white">
          <el-card class="box-card">
            <div
              v-for="(value, key) in { name: 'Vue', version: 3 }"
              :key="value"
              class="text item"
            >
              {{ key }}: {{ value }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content-black bg-white">
          <el-card class="box-card">
            <div v-for="num in 11" :key="num" class="text item">
              {{ num }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    const shoppingList = ref([]);
    const listItem = ref("");

    function addItem() {
      shoppingList.value.push(listItem.value);
    }

    function removeItem(index) {
      shoppingList.value.splice(index, 1);
    }

    return { shoppingList, listItem, addItem, removeItem };
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
