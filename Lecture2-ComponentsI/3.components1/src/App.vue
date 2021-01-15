<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-green">
          <el-button style="font-size: 40px" type="success">Contacts List</el-button>
        </div>
      </el-col>
    </el-row>

    <ContactDetails />
    <!-- The commneted out code below is now the component 'ContactDetails' above. -->
    
    <!-- <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-button style="padding: 0px 5px; font-size: 34px" type="plain">James Biden</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="grid-content-show-detail bg-white">
          <el-button style="width: 100%" type="success">Show Details</el-button>
        </div>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content-black bg-white">
            <el-card class="box-card"> Phone: 01234 5678 991 </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content-black bg-white">
            <el-card class="box-card">
              Email: james.biden@thewhitehouse.com
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card> -->
    <el-divider></el-divider>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-button style="padding: 0px 5px; font-size: 34px" type="plain">Donald Trump</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="grid-content-show-detail bg-white">
          <el-button style="width: 100%" type="success">Show Details</el-button>
        </div>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content-black bg-white">
            <el-card class="box-card"> Phone: 09876 543 221 </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content-black bg-white">
            <el-card class="box-card">
              Email: donald.trump@thewhitehouse.com
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </el-card>
</template>

<script>
import ContactDetails from './components/ContactDetails.vue';

export default {
  name: "App",
  components: { ContactDetails },
  setup() {

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
.bg-green {
  background: rgb(123, 224, 64);
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
