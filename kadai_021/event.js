//textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('text')

//open-btnというidをもつHTML要素を取得し、定数に代入する。
const btn = document.getElementById('btn') ;

//ボタンをクリックするとイベントを実行する
btn.addEventListener('click' ,() => {
    //クリックして２秒後に「ボタンをクリックしました」に表示を変更する
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました'
    },2000) ;
}) ;