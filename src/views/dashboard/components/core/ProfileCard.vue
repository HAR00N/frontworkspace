<template>
  <v-card elevation="0" rounded="lg">
    <base-material-card
      class="v-card-profile"
      elevation="0"
      avatar="src/assets/mycharacter/lkh.jpg"
    >
      <v-card-text class="text-center">
        <h6 class="display-1 mb-1 grey--text">Fullstack Dev</h6>

        <h4 class="display-2 font-weight-bold mb-3 black--text">이 규 헌</h4>

        <!-- <p class="font-weight-light grey--text">
          Don't be scared of the truth because we need to restart the human
          foundation in truth And I love you like Kanye loves Kanye I love Rick
          Owens’ bed design but the back is...
        </p> -->
        <p class="font-weight-light grey--text profile-box">
          프로그래밍과 수학을 사랑하는 신입 개발자입니다. <br>
          운동과 커피, 음악을 좋아하며 <br>
          논리적으로 로직을 구성하는 것을 좋아합니다.
        </p>
      </v-card-text>
    </base-material-card>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.profile-box {
  line-height: 150%;
}
</style>