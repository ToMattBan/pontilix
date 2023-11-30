<template>
  <div class="container">
    <ListTotals :startDate="entries[0].date" :endDate="entries[entries.length - 1].date" :totalHours="totalHours"
      :workedHours="workedHours" :balanceHours="balanceHours" />

    <table>
      <thead></thead>
      <tbody>
        <ListItem v-for="(entry, index) in entries" :key="index" :clock="entry" />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const entries: I_ItemsHourList[] = [
  {
    date: "2023-11-30",
    times: [
      {
        clockIn: "08:30",
        clockOut: "12:30",
        totalHours: "04:00",
      },
      {
        clockIn: "13:30",
        clockOut: "17:30",
        totalHours: "04:00",
      },
      {
        clockIn: "09:00",
        clockOut: "13:00",
        totalHours: "04:00",
      },
    ],
    total: "12.00H",
  },
  {
    date: "2023-12-01",
    times: [
      {
        clockIn: "08:45",
        clockOut: "12:15",
        totalHours: "03:30",
      },
      {
        clockIn: "13:45",
        clockOut: "17:15",
        totalHours: "03:30",
      },
      {
        clockIn: "09:15",
        clockOut: "12:45",
        totalHours: "03:30",
      },
      {
        clockIn: "13:15",
        clockOut: "16:45",
        totalHours: "03:30",
      },
    ],
    total: "14.00H",
  },
  {
    date: "2023-12-02",
    times: [
      {
        clockIn: "09:00",
        clockOut: "12:30",
        totalHours: "03:30",
      },
      {
        clockIn: "13:30",
        clockOut: "18:00",
        totalHours: "04:30",
      },
    ],
    total: "08.00H",
  },
  {
    date: "2023-12-03",
    times: [
      {
        clockIn: "08:00",
        clockOut: "11:30",
        totalHours: "03:30",
      },
      {
        clockIn: "12:30",
        clockOut: "17:00",
        totalHours: "04:30",
      },
      {
        clockIn: "09:15",
        clockOut: "13:45",
        totalHours: "04:30",
      },
    ],
    total: "12.00H",
  },
  {
    date: "2023-12-04",
    times: [
      {
        clockIn: "09:30",
        clockOut: "12:45",
        totalHours: "03:15",
      },
      {
        clockIn: "13:45",
        clockOut: "18:15",
        totalHours: "04:30",
      },
      {
        clockIn: "09:00",
        clockOut: "13:00",
        totalHours: "04:00",
      },
      {
        clockIn: "13:00",
        clockOut: "17:00",
        totalHours: "04:00",
      },
    ],
    total: "15.45H",
  },
  {
    date: "2023-12-05",
    times: [
      {
        clockIn: "08:15",
        clockOut: "12:00",
        totalHours: "03:45",
      },
      {
        clockIn: "13:30",
        clockOut: "17:45",
        totalHours: "04:15",
      },
    ],
    total: "08.00H",
  },
  {
    date: "2023-12-06",
    times: [
      {
        clockIn: "08:45",
        clockOut: "11:45",
        totalHours: "03:00",
      },
      {
        clockIn: "13:15",
        clockOut: "17:30",
        totalHours: "04:15",
      },
      {
        clockIn: "09:00",
        clockOut: "13:30",
        totalHours: "04:30",
      },
      {
        clockIn: "13:30",
        clockOut: "18:00",
        totalHours: "04:30",
      },
    ],
    total: "15.75H",
  },
  {
    date: "2023-12-07",
    times: [
      {
        clockIn: "09:00",
        clockOut: "12:30",
        totalHours: "03:30",
      },
      {
        clockIn: "13:30",
        clockOut: "18:00",
        totalHours: "04:30",
      },
      {
        clockIn: "09:00",
        clockOut: "13:00",
        totalHours: "04:00",
      },
      {
        clockIn: "13:00",
        clockOut: "17:00",
        totalHours: "04:00",
      },
      {
        clockIn: "08:30",
        clockOut: "12:30",
        totalHours: "04:00",
      },
    ],
    total: "18.00H",
  },
  {
    date: "2023-12-08",
    times: [
      {
        clockIn: "08:00",
        clockOut: "11:45",
        totalHours: "03:45",
      },
      {
        clockIn: "13:15",
        clockOut: "17:00",
        totalHours: "03:45",
      },
    ],
    total: "07.30H",
  },
  {
    date: "2023-12-09",
    times: [
      {
        clockIn: "09:30",
        clockOut: "14:15",
        totalHours: "04:45",
      },
      {
        clockIn: "13:15",
        clockOut: "17:45",
        totalHours: "04:30",
      },
      {
        clockIn: "08:45",
        clockOut: "12:15",
        totalHours: "03:30",
      },
      {
        clockIn: "09:15",
        clockOut: "12:45",
        totalHours: "03:30",
      },
    ],
    total: "16.75H",
  },
];

const totalHours = entries.length * 8;
const workedHours = entries.reduce(
  (total, current) => total + Number(current.total.replace('H', '')),
  0
)
const balanceHours = workedHours - totalHours;
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;

  thead {
    display: none;
  }

}
</style>
