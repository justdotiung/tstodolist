export type WeekData = {
  year: number;
  month: number;
  day: number;
  date: number;
};
type WeekNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export default class Week {
  private static week: Array<WeekData> = Week.getSelectDays(new Date(Date.now()));

  /**
   * 선택한 날짜의 한주를 가져온다.
   * @param { Date }fullDate fullDate
   */
  static getSelectDays(fullDate: Date): Array<WeekData> {
    const array: Array<WeekData> = [];
    const thisMonth = fullDate;
    const day = thisMonth.getDay();
    const date = thisMonth.getDate();
    const year = thisMonth.getFullYear();
    const firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1).getDate();
    const lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate();
    const currentMonth = thisMonth.getMonth();

    let nowDate = thisMonth;
    if (day === 0) {
      //sunday
      for (let i = 1; i <= 7; i++) {
        nowDate.setDate(date + i - 7);
        array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
      }
    } else {
      //other
      let memoCountDay = 0;
      let memoPrevMonthLastDay = 0;
      for (let i = 1; i <= 7; i++) {
        const setDay = date + i - day;
        if (setDay < firstDay) {
          memoPrevMonthLastDay = new Date(year, currentMonth, 0).getDate();
          nowDate = new Date(nowDate.getFullYear(), currentMonth - 1, memoPrevMonthLastDay - day + i + 1);
          array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
        } else if (setDay > lastDay) {
          nowDate = new Date(year, currentMonth + 1, i - day - memoCountDay);
          array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
        } else {
          nowDate = new Date(year, currentMonth, date + i - day);
          array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
          memoCountDay = nowDate.getDay() - 1;
        }
      }
    }
    return array;
  }

  /**
   * 차주를 가져온다.
   * @param {WeekNumber} day 해당 요일
   */
  static getNextWeek(): Array<WeekData> {
    const checkDay = Week.week[0];
    const nextDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date + 7);
    const lastDay = new Date(checkDay.year, checkDay.month, 0).getDate();
    if (checkDay.date + 7 > lastDay) {
      Week.week = this.getSelectDays(new Date(checkDay.year, checkDay.month, checkDay.date + 7 - lastDay));
    } else {
      Week.week = this.getSelectDays(nextDate);
    }

    return Week.week;
  }

  /**
   * 전주를 가져온다
   * @param {WeekNumber} day 해당 요일
   */
  static getPrevWeek(): Array<WeekData> {
    const checkDay = Week.week[0];
    const prevDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date - 7);
    if (checkDay.date - 7 < 1) {
      const lastDay = new Date(checkDay.year, checkDay.month - 1, 0).getDate();
      Week.week = this.getSelectDays(new Date(checkDay.year, checkDay.month - 2, lastDay + checkDay.date - 7));
    } else {
      Week.week = this.getSelectDays(prevDate);
    }
    return Week.week;
  }

  /**
   * 금주를 가져온다.
   * @param fullyear new Date() use
   */
  static getCurrentWeek(): Array<WeekData> {
    return this.getSelectDays(new Date(Date.now()));
  }

  static getYear(): number {
    return new Date(Date.now()).getFullYear();
  }

  static getMonth(): number {
    return new Date(Date.now()).getMonth() + 1;
  }

  static getDate(): number {
    return new Date(Date.now()).getDate();
  }
}
