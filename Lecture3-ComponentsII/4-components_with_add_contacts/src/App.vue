<template>
  <!-- Header -->
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-green">
          <el-button style="font-size: 40px" type="success">Contacts List</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- New Contact Component -->
    <new-contact @add-contact="addContact"></new-contact>

    <!-- Contact Details Component -->
    <contact-details 
      v-for="friend in friends"
      :key="friend.id"
      :friend="friend"
      :id="friend.id"
      @toggle-medal="toggleMedalStatus"  
    >
    </contact-details>

  </el-card>
</template>

<script>
import { reactive } from "vue";
import ContactDetails from "./components/ContactDetails.vue";
import NewContact from './components/NewContact.vue';

export default {
  name: "App",
  components: { ContactDetails, NewContact },
  setup() {
    const friends = reactive([
      {
        id: "paul",
        name: "Paul Green",
        phone: "01234 5678 991",
        email: "paul.green@garmisch-partenkirchen.com",
        numMedals: 0
      },
      {
        id: "bianca",
        name: "Bianca Walkden",
        phone: "0223 344 5567",
        email: "bianca.walkden@garmisch-partenkirchen.com",
        numMedals: 0
      }]
    );

    function toggleMedalStatus(friendID, hasWonMedal) {
      const returnedFriend = friends.find( friend => friend.id === friendID );

      if (hasWonMedal.value) {
        returnedFriend.numMedals++;
      }
      else {
        if (returnedFriend.numMedals > 0)  {
          returnedFriend.numMedals--;
        }
      }
    }

    function addContact(name, phone, email) {
        const newContact = reactive({
            id: new Date().toISOString(),
            name: name,
            phone: phone,
            email: email,
            numMedals: 0
        });

        friends.push( newContact );
    }

    return { friends, toggleMedalStatus, addContact };
  },
};
</script>

<style>
.box-card {
  width: 480px;
  margin: 0 auto;
}

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
