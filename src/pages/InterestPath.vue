
<template>
  <div class="interests">
    <h2><i><b>SKILLS AND HOBBIES</b></i></h2>
    
    <div class="interest-section">
      <h3><b>Technical Skills</b></h3>
      <ul class="interest-list">
        <li>python</li>
        <li>java</li>
        <li>Windows</li>
        <li>Linux</li>
        <li>Vue js</li>
      </ul>
    </div>
    
    <div class="interest-section">
      <h3><b>Hobbies</b></h3>
      <ul class="interest-list">
        <li>Playing Badminton</li>
        <li>Cooking</li>
        
      </ul>
    </div>
 
    
  </div>
</template>
 
<script>
export default {
  name: 'InterestPath',
  data() {
    return {
      // You can add any additional data or functionality here
    };
  },
};
</script>
 
<style scoped>
.interests {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color:darkred;
}
 
.interest-section {
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
 
h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
 
.interest-list {
  list-style-type: disc;
  padding-left: 20px;
  color:black
}
 
li {
  font-size: 16px;
  margin: 5px 0;
}
</style>