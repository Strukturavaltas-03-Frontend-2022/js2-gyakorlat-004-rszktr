const todayDate = Date.now();
const january1st = new Date(new Date(todayDate).getFullYear(), 0, 1);
const august31st = new Date(new Date(todayDate).getFullYear(), 7, 31);
const whatDayJan1stIs = january1st.getDay();
const whatDayAugust31stIs = august31st.getDay();

const firstWeekDays = () => {
    if (whatDayJan1stIs !== 0) {
        return 8 - whatDayJan1stIs
    } return 1
}

const lastWeekDays = () => {
    if (whatDayAugust31stIs !== 0) {
        return whatDayAugust31stIs
    } return 7
}

const firstWeekWorkingDays = () => {
    if (whatDayJan1stIs !== 0) {
        return 6 - whatDayJan1stIs
    } return 0
};

const lastWeekWorkingDays = () => {
    if (whatDayAugust31stIs !== 0) {
        return 6 - whatDayAugust31stIs
    } return 0
}

const countOfWorkingDays = () => {
    return (Math.round((august31st - january1st) / 1000 / 60 / 60 / 24) - firstWeekDays() - lastWeekDays() + 1) / 7 * 5
        + firstWeekWorkingDays() + lastWeekWorkingDays()
}

/* alternatív megoldás: csináljon egy tömböt az év eddigi dátumaival, 
menjen végig egy map metódus, amely minden elemen elvégez egy getDay() átalakítást.
számolja össze az összes 1,2,3,4,5 értéket. */

export default countOfWorkingDays;
