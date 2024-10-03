
//السؤال الاول :ارجاع اكبر عدد في المصفوفة
//function arr(array) {
//    let total = array[0]; 
//    for (let i = 1; i < array.length; i++) { 
//        if (array[i] > total) {
//            total = array[i];
//        }
//
//        
//    }
//    return total;
//}
//
//let myArray = [1, 60, 8, 9, 4,11];
//console.log('max',arr(myArray));

////////////////////////
//السؤال الثاني:اصغر عدد في المصفوفة 
//function arr(array) {
//    let total = array[0]; 
//    for (let i = 1; i < array.length; i++) { 
//        if (array[i] < total) {
//            total = array[i];
//        }
//    }
//    return total;
//}
//
//let myArray = [10, 2, 6, 1, 9, 4];
//console.log(arr(myArray))
////////////////////////
//السؤال الثالث: تحويل درجات الحرارة 
//function nums (numx){
//    let change =(numx * 1.8) + 32;
//    return change
//}
//console.log(nums(20));


//السؤال الرابع:  اكتب دالة تجمع جميع الأرقام الموجودة في مصفوفة وتعيد الناتج 
////////////////////////
//function arr(array) {
//    let count = 0;
//    for (const ar of array) {
//            count = count +ar;
//    }
//    console.log('count is:', count);
//
//}
//let myArray = [1, 4, -8, -7, 8, -8, -9, -6, 12]
//arr(myArray)
//
//السؤال الخامس: اكتب دالة تأخذ رقما كمدخل وتعيد ضعف هذا الرقم

//function double(num) {
//    console.log(num*2);
//    
//}
//double(200)
//


//السؤال السادس : اكتب دالة تعيد دالة أخرى عند استدعائها
////////////////////////
//function forTest(number) {
//    console.log(number * 2);
//}
//
//function double(num) {
//
//    forTest(num)
//}
//double(200)
//
//
//السؤال السابع:اكتب دالة تأخذ مصفوفة وتعيد مصفوفة جديدة تحتوي فقط على القيم الفردية   ) (
////////////////////////
//هذا السؤال ما حسنت اعمله في شغلات كثيرة ما عرفت اشلون انسقها بس هذا الكود اللذي حاولت فيه كتبت كود على حسب الشغلات اللي فهمتها 
//function newAr(array) {
//    for (let ar of array) {
//        if(ar%2 !== 0 ){
//            console.log(ar)
//        }
//        
//
//    }
//}
//let myArray = [1, 3, 7, 8, 9, 4, 6]
//newAr(myArray)



//السؤال الثامن : اكتب دالة تقوم بدمج مصفوفتين وإرجاع النتيجة كمصفوفة واحدة
////////////////////////

//let myArray = [1, 4, -8, -7, 8, -8, -9, -6, 12]
//let mySecArray = [8, 3, 36, 4, -5, 78, 2, 36, 47]
//let newArray= [...myArray,...mySecArray]
//console.log(newArray);
//




//السؤال التاسع : أكتب دالة تأخذ مصفوفة وتعيد العنصر المكرر ضمن المصفوفة
//function arr(array) {
//    let seen = new Set();
//    let duplicate = new Set();
//
//    for (let ar of array) { 
//        if(seen.has(ar)){
//            duplicate.add(ar)
//        }else{
//        seen.add(ar)
//        }
//
//    }
//    return Array.from(duplicate);
//}
//let myArray = [4, 6, 7, 4, 12, 4, 3, 6, 4, 7]
//const duplicate = arr(myArray)
//console.log(duplicate);



///////////////////////////////


//QE 9
//function arr(firstArray, secondArray) {
//    const set1 = new Set(firstArray);
//    const commonElements = new Set();
//
//    for (let element of secondArray) {
//        if (set1.has(element)) {
//            commonElements.add(element)
//        }
//    }
//    return Array.from(commonElements)
//}
//
//let array1 = [4, 6, 7, 3, 143, 445, 3, 43, 5, 7]
//let array2 = [4, 6, 7, 4, 12, 4, 3, 6, 4, 7]
//let common = arr(array1,array2);
//console.log(common);



///////////////////////////
//QE10



//function findCommonEle(arr1, key) {
//    const updateArray = arr1.filter(el => el !== key);
//    return updateArray;
//}
//let array1 = [4, 6, 7, 3, 143, 445, 3, 43, 5, 7]
//let key = 7
//let common = findCommonEle(array1, key);
//console.log(common);
////////////////////

function square() {
    let x = document.getElementById("num-Inp").value;
    let toplam = x * x; 
    document.getElementById("total").textContent = toplam;
    

}
