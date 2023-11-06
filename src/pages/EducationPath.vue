
<template>
  <div class="education">
    <h2> <I>EDUCATION DETAILS </I></h2>
    <ul>
      <li>
        <strong>School:</strong> Fr. John Bonal Matriculation School
        <br>
        <strong>10th Percentage:</strong> 96%
        <br>
        <strong>Year of Passing:</strong> 2017
      </li>
      <li>
        <strong>School:</strong> St. Little Flower  School
        <br>
        <strong>12th Percentage:</strong> 81%
        <br>
        <strong>Year of Passing:</strong> 2019
      </li>
      <li>
        <strong>College:</strong> Panimalar Engineering College
        <br>
        <strong>Degree:</strong> Bachelors Of Information Technology
        <br>
        <strong>Percentage:</strong> 92%
        <br>
        <strong>Year of Passing:</strong> 2023
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  name: 'EducationPath',
  data() {
    return {
      // You can add any additional data or functionality here
    };
  },
};
</script>
 
<style scoped>
.education {
  padding: 20px;
}
 
.education ul {
  list-style-type: none;
  padding: 0;
}
 
.education li {
  margin-bottom: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
</style>