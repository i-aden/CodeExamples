<template>
<el-button style="font-size: 30px; width: 100%" type="primary">{{ email }}</el-button>
<el-divider></el-divider>
<el-button style="font-size: 30px; width: 100%" type="primary">{{ phoneNumber.areaCode }}</el-button>
<el-divider></el-divider>
<el-button style="font-size: 30px; width: 100%" type="primary">{{ phoneNumber.phone }}</el-button>
</template>

<script>
import { isReactive, isRef, reactive, ref, toRef, toRefs } from 'vue'
export default {
  name: "App",

  setup() {
    const email = ref("abcd@thealphabet.com");
    const phoneNumber = reactive({
      areaCode: "0161",
      phone: "123 4567",
    });

    console.log(email);
    console.log(phoneNumber);

    setTimeout(() => {
      phoneNumber.areaCode = "111111111111";
      phoneNumber.phone = "222222222222222";
    }, 2000);

    console.log( "isRef(email) => ", isRef(email) );
    console.log( "isRef(email.value) => ", isRef(email.value) );
    
    console.log( "isReactive(phoneNumber.areaCode) => ", isReactive(phoneNumber.areaCode) );
    console.log( "isReactive(phoneNumber) => ", isReactive(phoneNumber) );

    const test = "No a ref";
    console.log( "isRef(test) => ", isRef(test));

    const testToRef = toRef(test);
    console.log( "isRef(test) => ", isRef(testToRef));

    const testObject = reactive({ name: "No a ref", anothername: "abc" });
    console.log( "isRef(testObject.name) => ", isRef(testObject.name));

    const testObjectToRef = toRefs(testObject);
    console.log( "isRef(testObjectToRef.name) => ", isRef(testObjectToRef.name));

    return { email, phoneNumber };
  }
}
</script>

<style>

</style>