<template>
  <div class="period">
    <p>
      <span>Period</span>
      <span>{{ startDate }} - {{ endDate }}</span>
    </p>
    
    <p>
      <span>Total Hours in Period</span>
      <span>{{ totalHours }}h</span>
    </p>
    
    <p>
      <span>Total Hours Worked</span>
      <span>{{ workedHours }}H</span>
    </p>

    <p>
      <span>Hour Balance</span>
      <span>{{ balanceHours }}H</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  totalHours: {
    type: Number,
    required: true
  },
  workedHours: {
    type: Number,
    required: true
  },
  balanceHours: {
    type: Number,
    required: true
  }
})
</script>

<style scoped lang="scss">
.period {
  margin-bottom: 20px;
  text-align: center;

  p {
    display: flex;
    justify-content: space-between;
  }
}
</style>