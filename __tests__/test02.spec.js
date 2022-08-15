import countOfWorkingDays from '../solutions/app2';

describe('2. feladat', () => {
    test('Az év eleje óta eltelt munkanapok száma', () => {
        expect(countOfWorkingDays()).toEqual(173);
    });
});
