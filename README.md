# Dátumok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. feladat
- Fájl: `solutions/app1.js`
- Függvény neve: `getSecondsOfThisYearUntilNow`
- Írj egy függvényt, amelynek a visszatérési értéke az adott év 01. 01-től 08. 31-ig eltelt másodperceinek a száma! 
- _Kerekítést használj, amikor osztasz 1000-rel! (Math.round())_

## 2. feladat
- Fájl: `solutions/app2.js`
- Függvény neve: `countOfWorkingDays`
- Írj egy függvényt, amelynek a visszatérési értéke az adott évben 08. 31-ig 
eltelt munkanapok (hétfő-péntek) száma!

## 3. feladat
- Fájl: `solutions/app3.js`
- Függvény neve: `customDateFormats`
- Írj egy függvényt, amely paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, amely a következő formátumban tartalmazza a paraméterként kapott dátumot:
- `short`: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
- `long`: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
