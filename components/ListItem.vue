<template>
  <tr>
    <td class="date" @click="toggleAccordion">{{ clock.date }}</td>
    <td class="clocks" ref="hoursClocked">
      <ol>
        <li v-for="(time, i) in clock.times" :key="i">
          <span>{{ time.clockIn }} - {{ time.clockOut }}</span>
          <span>{{ time.totalHours }}</span>
        </li>
      </ol>
    </td>
    <td class="total" @click="toggleAccordion">{{ clock.total }}</td>
  </tr>
</template>

<script setup lang="ts">
defineProps({
  clock: {
    type: Object as PropType<I_ItemsHourList>,
    required: true
  }
})

const hoursClocked = ref();

function toggleAccordion() {
  if (hoursClocked.value.style.maxHeight) {
    hoursClocked.value.style.maxHeight = null;
  } else {
    hoursClocked.value.style.maxHeight = hoursClocked.value.scrollHeight + 'px';
  }
}
</script>

<style scoped lang="scss">
tr {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: grid;
  grid-template-areas: "date total" "clocks clocks";

  &:last-child {
    border-bottom: none;
  }

  td {
    display: block;
    padding: 10px 0;

    &:first-child {
      font-weight: bold;
    }

    &.date {
      grid-area: date;
      font-weight: bold;
      cursor: pointer;
    }

    &.clocks {
      grid-area: clocks;
      padding: 0;
      overflow: hidden;
      max-height: 0;
      transition: max-height .3s ease-out;

      ol {
        list-style: none;
        padding-left: 10%;
        margin: 0;

        li {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;

          span {
            flex: 1;
            text-align: left;

            &:last-child {
              text-align: right;
            }
          }
        }
      }
    }

    &.total {
      grid-area: total;
      text-align: right;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>