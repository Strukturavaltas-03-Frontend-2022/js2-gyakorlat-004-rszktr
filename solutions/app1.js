const getSecondsOfThisYearUntilNow = () => {
    const todayDate = Date.now();
    const january1st = new Date(new Date(todayDate).getFullYear(), 0, 1);
    const august31st = new Date(new Date(todayDate).getFullYear(), 7, 31);
    return Math.round((august31st - january1st) / 1000)
}

export default getSecondsOfThisYearUntilNow;
