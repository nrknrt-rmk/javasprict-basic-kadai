//年月日の呼び出し
const today = new Date() ;
year = today.getFullYear() ;
monthIndex =today.getMonth()+1 ;
day = today.getDate() ;

//コンソールに表示
console.log(year+"年"+monthIndex+"月"+day+"日") ;

