var DateCal = /** @class */ (function () {
    function DateCal() {
    }
    /**
     * 선택한 날짜의 한주를 가져온다.
     * @param { Date }fullyear fullyear
     */
    DateCal.getSelectDays = function (fullyear) {
        var array = [];
        var thisMonth = fullyear;
        var day = thisMonth.getDay();
        var date = thisMonth.getDate();
        var year = thisMonth.getFullYear();
        var firstDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1).getDate();
        var lastDay = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0).getDate();
        var currentMonth = thisMonth.getMonth();
        var nowDate = thisMonth;
        if (day === 0) {
            //sunday
            for (var i = 1; i <= 7; i++) {
                nowDate.setDate(date + i - 7);
                array.push({ year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDay(), date: nowDate.getDate() });
            }
        }
        else {
            //other
            var memoCountDay = 0;
            var memoPrevMonthLastDay = 0;
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
     * @param {Week} day 해당 요일
     */
    DateCal.getNextWeek = function (day) {
        if (day === void 0) { day = 0; }
        var idx = day;
        var checkDay = DateCal.week[idx];
        var nextDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date + 7);
        var lastDay = new Date(checkDay.year, checkDay.month - 1, 0).getDate();
        if (checkDay.date + 7 > lastDay) {
            DateCal.week = this.getSelectDays(new Date(checkDay.year, checkDay.month - 1, checkDay.date + 7 - lastDay));
        }
        else {
            DateCal.week = this.getSelectDays(nextDate);
        }
        return DateCal.week;
    };
    /**
     * 전주를 가져온다
     * @param {Week} day 해당 요일
     */
    DateCal.getPrevWeek = function (day) {
        if (day === void 0) { day = 0; }
        var idx = day;
        var checkDay = DateCal.week[idx];
        var prevDate = new Date(checkDay.year, checkDay.month - 1, checkDay.date - 7);
        if (checkDay.date - 7 < 1) {
            var lastDay = new Date(checkDay.year, checkDay.month - 1, 0).getDate();
            DateCal.week = this.getSelectDays(new Date(checkDay.year, checkDay.month - 2, lastDay + checkDay.date - 7));
        }
        else {
            DateCal.week = this.getSelectDays(prevDate);
        }
        return DateCal.week;
    };
    /**
     * 금주를 가져온다.
     * @param fullyear new Date() use
     */
    DateCal.getCurrentWeek = function () {
        return this.getSelectDays(new Date(Date.now()));
    };
    DateCal.week = DateCal.getSelectDays(new Date(Date.now()));
    return DateCal;
}());
export default DateCal;
