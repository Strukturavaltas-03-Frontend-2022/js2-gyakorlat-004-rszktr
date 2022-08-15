import customDateFormats from '../solutions/app3';

describe('3. feladat', () => {
    test('Egyedi dátumforma: short és long', () => {
        expect(customDateFormats(new Date(2021, 5, 11, 11, 20))).toEqual(
            {short: '2021. jún. 11. 11:20', long: '2021. június 11. 11:20:00'}
        );
    });
});
