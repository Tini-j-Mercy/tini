<!-- 
<template>
  <div class="profile">
    <div class="profile-header">
      <img src="~/assets/profile-picture.jpg" alt="Profile Picture" class="profile-picture">
      <h1 class="profile-name">TINI J MERCY</h1>
      <p class="profile-place">KANYAKUMARI</p>
    </div>
    <p class="profile-email">
      <strong>Email:</strong> tinijmercy2001@gmail.com
    </p>
  </div>
</template>
 
<script>
export default {
  name: 'ProfileDetailPath',
  data() {
    return {
      // You can add any additional data or functionality here
    };
  },
};
</script>
 
<style scoped>
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
  font-size: 24px;
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
  -->

<!--   
<template>
  <div class="profile">
    <h2 class="profile-title">PERSONAL DETAILS</h2>
 
    <div class="profile-details">
      <div class="profile-info">
        <p class="profile-detail"><strong>Name:</strong> TINI J MERCY</p>
        <p class="profile-detail"><strong>Phone Number:</strong> 9597812075</p>
        <p class="profile-detail"><strong>Email:</strong> tinijmercy2001@gmail.com</p>
        <p class="profile-detail"><strong>Address:</strong> Kanyakumari, TAMILNADU</p>
        <p class="profile-detail"><strong>Known Languages</strong>Tamil , Malayalam, English</p>
      </div>
    </div>
 
  </div>
</template>
 
<script>
export default {
  name: 'ProfileDetailPath',
  data() {
    return {
      // You can add any additional data or functionality here
    };
  },
};
</script>
 
<style scoped>


.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  background-image: url('~assets/images.jpg');
  font-family: 'Arial', sans-serif;
  color: #333333;
}
 
.profile-title {
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #8e44ad;
}
 
.profile-details {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
 
.profile-detail {
  font-size: 18px;
  margin: 10px 0;
}
 
.profile-detail strong {
  font-weight: bold;
  color: #e67e22;
}
 
.known-languages {
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
 
.languages-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #2ecc71;
  text-transform: uppercase;
}
 
.language-list {
  list-style-type: none;
  padding: 0;
}
 
.language {
  font-size: 16px;
  margin: 5px 0;
  color: #333333;
  background-color: #f5f5f5;
  padding: 5px 10px;
  border-radius: 5px;
}
</style> -->

<template>
  <div class="profile">
    <h2 class="profile-title">Personal Info</h2>
 
    <div class="profile-details">
      <div class="profile-info">
        <p><strong>Name:</strong>   TINI J MERCY</p>
        <p><strong>Phone Number:</strong>  9597812075</p>
        <p><strong>Email:</strong>  tinijmercy2001@gmail.com</p>
        <p><strong>Address:</strong>   Kanyakumari ,  TamilNadu</p>
        <!-- <p><strong>Family Details:</strong> Parents, Siblings, etc.</p> -->
        <p class="profile-detail"><strong>Known Languages</strong>   Tamil , Malayalam, English</p>
      </div>
    </div>
 
  </div>
</template>
 
<script>
export default {
  name: 'ProfileDetailPath',
  data() {
    return {
      // You can add any additional data or functionality here
    };
  },
};
</script>
 
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~/assets/images.jpg'); /* Add the path to your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
 
.profile-title {
  font-size: 36px; /* Increase the font size for the title */
  font-weight: bold;
  color: #fff; /* Set text color to white */
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a text shadow for a classic effect */
}
 
.profile-details {
  background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white background */
  border-radius: 10px; /* Increase the border radius for a classic look */
  padding: 20px;
  text-align: left;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Add a box shadow for depth */
}
 
.profile-info p {
  font-size: 20px; /* Increase the font size for details */
  margin: 10px 0;
  color: #333; /* Set text color to dark gray */
}
 
.profile-info strong {
  font-weight: bold;
}
 
.known-languages {
  background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white background */
  border-radius: 10px; /* Increase the border radius for a classic look */
  padding: 20px;
  text-align: left;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); /* Add a box shadow for depth */
}
 
.languages-title {
  font-size: 24px; /* Increase the font size for the title */
  margin-bottom: 10px;
  color: #333; /* Set text color to dark gray */
}
 

</style>