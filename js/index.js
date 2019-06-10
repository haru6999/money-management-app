jQuery(function($){
    $('#footerLeft').click(function(){
        $('.input').css({
            'display':'inline'
        });
        $('.calender').css({
            'display':'none'
        });
    });
    $('#footerRight').click(function(){
        $('.input').css({
            'display':'none'
        });
        $('.calender').css({
            'display':'inline'
        });
    });
    $('#spending').click(function(){
        $('#spendingForm').css({
            'display':'inline'
        });
        $('#incomeForm').css({
            'display':'none'
        });
    });
    $('#income').click(function(){
        $('#spendingForm').css({
            'display':'none'
        });
        $('#incomeForm').css({
            'display':'inline'
        });
    });
    // カレンダー一覧のばってん
    $('.cross').click(function(){
        
        $('#pops').css({
            'animation': 'popdown 1s ease-out',
            'bottom':'-250px'
        });
    });
});




// １ページ目

let sum = 0;
// 支出
document.myform1.btn.addEventListener('click', function() {
    let money;
    let category;
    let year0;
    let month0;
    let date0;
    console.log( document.myform1.money.value );
    console.log( document.myform1.category.value );
    console.log( document.myform1.date.value );
    // document.myform.submit();
    // let calendarHtml = ''
    // calendarHtml += 'document.myform.date.value'
    money = document.myform1.money.value;
    category = document.myform1.category.value
    let result = document.myform1.date.value.split('-');
    year0 = result[0];
    let month1 = result[1];
    let date1 = result[2];
    // 月と日の表示を揃える
    if(01<=month1 && month1<=09){
        let month2 = month1.split('0');
        month0 = month2[1];
    }else{
        month0 = month1;
    }
    if(01<=date1 && date1<=09){
        let date2 = date1.split('0');
        date0 = date2[1];
    }else{
        date0 = date1;
    }
    console.log(year0);
    console.log(month0);
    console.log(date0);

    // popupのli要素の追加
    let id2 = String(year0)+String(month0)+String(date0);
    var target2 = document.getElementById(id2);
    let newTag2 = document.createElement("li");
    newTag2.innerHTML = '<p class="liCategory">'+category+'</p><p class="liMoney">'+money+'円</p>';
    target2.appendChild(newTag2);
    sum -= Number(money);
    console.log("合計:"+sum);
});

// 収入
document.myform2.btn.addEventListener('click', function() {
    let money;
    let category;
    let year0;
    let month0;
    let date0;
    console.log( document.myform2.money.value );
    console.log( document.myform2.category.value );
    console.log( document.myform2.date.value );
    // document.myform.submit();
    // let calendarHtml = ''
    // calendarHtml += 'document.myform.date.value'
    money = document.myform2.money.value;
    category = document.myform2.category.value
    let result = document.myform2.date.value.split('-');
    year0 = result[0];
    let month1 = result[1];
    let date1 = result[2];
    // 月と日の表示を揃える
    if(01<=month1 && month1<=09){
        let month2 = month1.split('0');
        month0 = month2[1];
    }else{
        month0 = month1;
    }
    if(01<=date1 && date1<=09){
        let date2 = date1.split('0');
        date0 = date2[1];
    }else{
        date0 = date1;
    }
    console.log(year0);
    console.log(month0);
    console.log(date0);

    // popupのli要素の追加
    let id2 = String(year0)+String(month0)+String(date0);
    var target2 = document.getElementById(id2);
    let newTag2 = document.createElement("li");
    newTag2.innerHTML = '<p class="liCategory">'+category+'</p><p class="liMoney">+'+money+'円</p>';
    target2.appendChild(newTag2);
    sum += Number(money);
    console.log("合計:"+sum);
});



// ２ページ目
const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
const config = {
    show: 1,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month,1)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}

function createCalendar(year, month,date) {
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year  + '年' + month + '月</h1>'
    calendarHtml += '<table>'

    // 曜日の行を作成
    
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td class="weeks">' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前(グレーの色の部分)
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた(グレーの色の部分)
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            } else {
                // 今月の日にちの描画
                calendarHtml += '<td id="td'+year+month+dayCount+'" class="calenderClass" onclick="getID(this)">' + dayCount + '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    return calendarHtml
}

function moveCalendar(e) {
    document.querySelector('#calendar').innerHTML = ''

    if (e.target.id === 'prev') {
        month--

        if (month < 1) {
            year--
            month = 12
        }
    }

    if (e.target.id === 'next') {
        month++

        if (month > 12) {
            year++
            month = 1
        }
    }

    showCalendar(year, month)
}

document.querySelector('#prev').addEventListener('click', moveCalendar)
document.querySelector('#next').addEventListener('click', moveCalendar)

showCalendar(year, month)

var target = document.getElementById("pops");
// for(var y=2010;y<=2020;y++){
for(var y=2019;y<=2019;y++){
    for(var m=1;m<=12;m++){
        for(var d=1;d<=31;d++){
            // ボタンが押されたらタグを作って追加
            var newTagPop = document.createElement("div");
            // 作成したタグの中身を作成
            // newTagPop.innerHTML = '<p>'+y+'年'+m+'月'+d+'日</p>'
            newTagPop.innerHTML = '<ul id="'+String(y)+String(m)+String(d)+'" class="calenderUl"><p class="calenderP">'+y+'年'+m+'月'+d+'日</p></ul>';
            // 作ったタグを指定した要素の子要素として追加
            target.appendChild(newTagPop);
            
        }
    } 
}

// popupの中身
function getID(element) {
    // idはカレンダー一覧のtd
    var id = element.id;    
    var id2 = id.split('td');
    var id3 = id2[1];
    // 購入一覧のul
    $('.calenderUl').css({
        'display':'none'
    });
    $('#'+id3).css({
        'display':'inline'
    });
    $('#pops').css({
        'animation': 'popup 1s ease-out',
        'bottom':'0px'
    })
}
