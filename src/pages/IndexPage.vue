<template> 
  <q-page class="flex flex-center">
    
    <div class="profile" >
    <img src="~assets\pic1.png" alt="Profile Picture" class="profile-picture">
    <!-- Other profile information goes here -->
  </div>
  <div class="profile">
    <!-- <div class="profile-header"> -->
      
      <h1 class="profile-name">
        <b> TINI MERCY </b> </h1>
      <!-- <p class="profile-place">PLACE:   KANYAKUMARI , TAMILNADU</p>
    </div>
    <p class="profile-email">
      <strong>Email:</strong> tinijmercy2001@gmail.com
    </p> -->
  </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style scoped>

.flex-center{
  background-color: #cccccc;
 }
 .profile{
  background-color: #ffffff;
 }
  /* Set your background color here */ 
 
.profile {
  text-align: center;
  padding: 20px;
}
 
.profile-header {
  margin-bottom: 20px;
}
 
.profile-picture {
  max-width: 150px;
  border-radius: 50%;
}
 
.profile-name {
  font-size: 30px;
  margin: 10px 0;
}
 
.profile-place {
  font-size: 16px;
}
 
.profile-email {
  font-size: 16px;
  margin-top: 20px;
}

</style>
