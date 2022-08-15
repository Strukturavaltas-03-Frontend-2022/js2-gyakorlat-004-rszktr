import getSecondsOfThisYearUntilNow from '../solutions/app1';

describe( '1. feladat', () => {
    test( 'Az év eleje óta eltelt másodpercek száma', () => {
        const response = getSecondsOfThisYearUntilNow();
        expect([20908800, 20905200].includes(response)).toBeTruthy();
    });
});
