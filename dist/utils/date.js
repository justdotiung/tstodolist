var Week = /** @class */ (function () {
    function Week() {
    }
    /**
     * 선택한 날짜의 한주를 가져온다.
     * @param { Date }fullDate fullDate
     */
    Week.getSelectDays = function (fullDate) {
        var array = [];
        var thisMonth = fullDate;
        var day = thisMonth.getDay();
        var date = thisMonth.getDate();
        var year = thisMonth.getFullYear();
        var firstDay = 1;
        var currentMonth = thisMonth.getMonth();
        var nowDate = thisMonth;
        var memoCountDay = 0;
        var memoPrevMonthLastDay = 0;
        if (day === 0) {
            var lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 0).getDate();
            for (var i = 1; i <= 7; i++) {
                var setDay = date + i - 7;
                if (setDay < firstDay) {
                    nowDate = new Date(year, currentMonth - 1, lastDay + date + i - 7);
                    array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
                }
                else {
                    nowDate = new Date(year, currentMonth, date + i - 7);
                    array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
                    memoCountDay = nowDate.getDay() - 1;
                }
            }
        }
        else {
            var lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate();
            //other
            for (var i = 1; i <= 7; i++) {
                var setDay = date + i - day;
                if (setDay < firstDay) {
                    memoPrevMonthLastDay = new Date(year, currentMonth, 0).getDate();
                    nowDate = new Date(nowDate.getFullYear(), currentMonth - 1, memoPrevMonthLastDay - day + i + 1);
                    array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
                }
                else if (setDay > lastDay) {
                    nowDate = new Date(year, currentMonth + 1, i - day - memoCountDay);
                    array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
                }
                else {
                    nowDate = new Date(year, currentMonth, date + i - day);
                    array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
                    memoCountDay = nowDate.getDay() - 1;
                }
            }
        }
        return array;
    };
    /**
     * 차주를 가져온다.
     * @param {WeekNumber} day 해당 요일
     */
    Week.getNextWeek = function () {
        var checkDay = Week.week[0];
        var nextDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date + 7);
        var lastDay = new Date(checkDay.year, checkDay.month, 0).getDate();
        if (checkDay.date + 7 > lastDay) {
            Week.week = this.getSelectDays(new Date(checkDay.year, checkDay.month, checkDay.date + 7 - lastDay));
        }
        else {
            Week.week = this.getSelectDays(nextDate);
        }
        return Week.week;
    };
    /**
     * 전주를 가져온다
     * @param {WeekNumber} day 해당 요일
     */
    Week.getPrevWeek = function () {
        var checkDay = Week.week[0];
        var prevDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date - 7);
        if (checkDay.date - 7 < 1) {
            var lastDay = new Date(checkDay.year, checkDay.month - 1, 0).getDate();
            Week.week = this.getSelectDays(new Date(checkDay.year, checkDay.month - 2, lastDay + checkDay.date - 7));
        }
        else {
            Week.week = this.getSelectDays(prevDate);
        }
        return Week.week;
    };
    /**
     * 금주를 가져온다.
     * @param fullyear new Date() use
     */
    Week.getCurrentWeek = function () {
        return this.getSelectDays(new Date(Date.now()));
    };
    Week.getYear = function () {
        return new Date(Date.now()).getFullYear();
    };
    Week.getMonth = function () {
        return new Date(Date.now()).getMonth() + 1;
    };
    Week.getDate = function () {
        return new Date(Date.now()).getDate();
    };
    Week.week = Week.getSelectDays(new Date(Date.now()));
    return Week;
}());
export default Week;
