//変数numに1以上の正の数を代入する
let num = Math.floor(Math.random()*100)+1 ;

//変数numの値が3と5倍数ならば「3の倍数です」という文字を出力する
if (num%3 === 0 && num%5 === 0) {
    console.log("3と5の倍数です")
}
//変数numの値が3の倍数ならば「3の倍数です」という文字を出力する
else if (num%3 === 0) {
    console.log("3の倍数です")
}
//変数numの値が5の倍数ならば「3の倍数です」という文字を出力する
else if (num%5 === 0) {
    console.log("5の倍数です")
}
//それ以外の３と５の倍数以外の数字の時は変数numを出力する
else {
    console.log(num) ;
}




