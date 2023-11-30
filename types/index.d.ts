export { };

declare global {
  interface I_ItemsHourList {
    date: string,
    times: {
      clockIn: string,
      clockOut: string,
      totalHours: string,
    }[],
    total: string,
  }
}