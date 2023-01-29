//TASK 2
// let txt = "Lorem ipsum@ dolor sit@ amet consectetur, adipisicing@ elit. Aliquam lorem molestias consequuntur! alexandr .Atque@ lorem adipisci delectus@ lorem facere accusantium! Aliquam voluptate lorem aut asperiores@ fugiat sunt lorem unde necessitatibus@ delectus!"

// 1) txt dagi hamma @ larni o'chirib chiqush;
// 2) txt dagi hamma lorem so'zini 'Hello' ga o'zgartirasizlar;
// 3) txt dagi hamma lorem so'zini nechi marta qaytariliyapti sanaysizlar;
// 4) txt dagi Alexandr so'zini topib uni bosh harfini katta qilasizlar;

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
let txt = "Lorem ipsum@ dolor sit@ amet consectetur, adipisicing@ elit. Aliquam lorem molestias consequuntur! alexandr .Atque@ lorem adipisci delectus@ lorem facere accusantium! Aliquam voluptate lorem aut asperiores@ fugiat sunt lorem unde necessitatibus@ delectus!"
console.log(txt.replace(/@/gi ,' '))
console.log(txt.replace(/lorem/gi, 'Hello'));
console.log(txt.replace("alexandr", 'Alexandr'));


