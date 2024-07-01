//textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('text')

//open-btnというidをもつHTML要素を取得し、定数に代入する。
const btn = document.getElementById('btn') ;

//HTML要素がクリックされたときにイベント処理を行う
btn.addEventListener('click' , () => {
   //クリック後に「ボタンをクリックしました」に表示を変更する
   text.textContent = 'ボタンをクリックしました'
})
