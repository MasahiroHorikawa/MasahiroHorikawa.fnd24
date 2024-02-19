'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let p = document.getElementById('text');

//タイピングする文字列をここで用意
let textLists = [
    'toyotaMotorCorporation',
    'wovenByToyota',
    'justInTime',
    'toyotaProductionSystem',
    'statisticalQualityControl',
    'digitalTransformation',
    'totalQualityManagement',
    'kaizen',
    'andon',
    'kanban',
    'genchiGenbutu'
];
let checkTexts = [];

createText();
function createText() {
    //文字列をランダムに取得する
    let rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    
    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd].split('').map(function(value) {
        let span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

document.addEventListener('keydown', keyDown);

function keyDown(e) {

    //キーボードからの入力は「e.key」に格納
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';

        //0番目の配列要素を削除して、次の1文字を比較対象に
        checkTexts.shift();

        //配列要素が空になったら次の問題を出す
        if(!checkTexts.length) createText();
    }
}
