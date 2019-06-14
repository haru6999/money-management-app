jQuery(function($){
    $('#footerLeft').click(function(){
        $('#footerLeft').css({
            'color':'var(--blue)'
        });
        $('#footerCenter').css({
            'color':'#f9fafc'
        });
        $('#footerRight').css({
            'color':'#f9fafc'
        });
        $('.input').css({
            'display':'inline'
        });
        $('.calender').css({
            'display':'none'
        });
        $('.confirmation').css({
            'display':'none'
        });
        $('#pops').css({
            'animation': 'none',
            'bottom':'-250px'
        });
        $('#calendar').css({
            'margin-bottom':'0px'
        });
    });
    $('#footerCenter').click(function(){
        $('#footerLeft').css({
            'color':'#f9fafc'
        });
        $('#footerCenter').css({
            'color':'var(--blue)'
        });
        $('#footerRight').css({
            'color':'#f9fafc'
        });
        $('.input').css({
            'display':'none'
        });
        $('.calender').css({
            'display':'inline'
        });
        $('.confirmation').css({
            'display':'none'
        });
        $('#pops').css({
            'animation': 'none',
            'bottom':'-250px'
        });
        $('#calendar').css({
            'margin-bottom':'0px'
        });
    });
    $('#footerRight').click(function(){
        $('#footerLeft').css({
            'color':'#f9fafc'
        });
        $('#footerCenter').css({
            'color':'#f9fafc'
        });
        $('#footerRight').css({
            'color':'var(--blue)'
        });
        $('.input').css({
            'display':'none'
        });
        $('.calender').css({
            'display':'none'
        });
        $('.confirmation').css({
            'display':'inline'
        });
        $('#pops').css({
            'animation': 'none',
            'bottom':'-250px'
        });
        $('#calendar').css({
            'margin-bottom':'0px'
        });
    });
    $('#spending').click(function(){
        $('#spendingForm').css({
            'display':'inline'
        });
        $('#incomeForm').css({
            'display':'none'
        });
        $('#spending').css({
            'color':'#4D4D4D'
        });
        $('#income').css({
            'color':'#cccccc'
        });
    });
    $('#income').click(function(){
        $('#spendingForm').css({
            'display':'none'
        });
        $('#incomeForm').css({
            'display':'inline'
        });
        $('#spending').css({
            'color':'#cccccc'
        });
        $('#income').css({
            'color':'#4D4D4D'
        });
    });
    // カレンダー一覧のばってん
    $('.cross').click(function(){
        $('#pops').css({
            'animation': 'none',
            'animation': 'popdown 0.5s ease-out',
            'bottom':'-250px'
        });
        $('#calendar').css({
            'margin-bottom':'0px',
            'animation':'calendardown 0.5s ease-out'
        });
    });
});




let sum = 0;
var yyyy;
var mm;
var dd;

// １ページ目
// 支出
document.myform1.btn.addEventListener('click', function() {

    if(document.myform1.money.value.match(/[^0-9]+/) || document.myform1.money.value==""){
        $('#comment').html('金額を半角数字で記入してください');
        $('#comment').css({
            'animation': 'fade-in 2s'
        });
        setTimeout(function(){
            $('#comment').html(" ");
            $('#comment').css({
                'animation': 'none'
            });
        },2000);   
        return;
    }

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
    newTag2.innerHTML = '<p class="liCategory">'+category+'</p><p class="liMoney">-'+money+'円</p><button type="button" class="delate" onclick="delate(this)" id="0-'+money+'">削除</button>';
    target2.appendChild(newTag2);
    sum -= Number(money);
    console.log("合計:"+sum);
    document.getElementById("sum").innerHTML =sum+'円';
    if(sum<0){
        $('#sum').css({
            'color':'#f577ab'
        })
        console.log("aaa")
    }else{
        $('#sum').css({
            'color':'#333333'
        })
        console.log("bbb")
    }
    $('#comment').html('保存されました');
    $('#comment').css({
        'animation': 'fade-in 2s'
    });
    setTimeout(function(){
        $('#comment').html(" ");
        $('#comment').css({
            'animation': 'none'
        });
   },2000);

    //金額の中身をリセット
    document.getElementById( "target" ).value ="" ;    
    
});
// 収入
document.myform2.btn.addEventListener('click', function() {

    if(document.myform2.money.value.match(/[^0-9]+/) || document.myform2.money.value==""){
        $('#comment').html('金額を半角数字で記入してください');
        $('#comment').css({
            'animation': 'fade-in 2s'
        });
        setTimeout(function(){
            $('#comment').html(" ");
            $('#comment').css({
                'animation': 'none'
            });
        },2000);   
        return;
    }

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
    newTag2.innerHTML = '<p class="liCategory">'+category+'</p><p class="liMoney">+'+money+'円</p><button type="button" class="delate" onclick="delate(this)" id="1-'+money+'">削除</button>';
    target2.appendChild(newTag2);
    sum += Number(money);
    console.log("合計:"+sum);
    document.getElementById("sum").innerHTML =sum+'円';
    if(sum<0){
        $('#sum').css({
            'color':'#f577ab'
        })
        console.log("aaa")
    }else{
        $('#sum').css({
            'color':'#333333'
        })
        console.log("bbb")
    }
    $('#comment').html('保存されました');
    $('#comment').css({
        'animation': 'fade-in 2s'
    });
    setTimeout(function(){
        $('#comment').html(" ");
        $('#comment').css({
            'animation': 'none'
        });
   },2000);

   //金額の中身をリセット
   document.getElementById( "target2" ).value ="" ;
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


var target = document.getElementById("pops");
for(var y=2010;y<=2020;y++){
// for(var y=2019;y<=2019;y++){
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
// 削除
function delate(element) {
    $(element).parent().css({
        'animation': 'delate 1s ease-out'
    });
    setTimeout(function(){
        $(element).parent().css({
            'animation': 'none'
        });
        $(element).parent().remove(); 
   },1000);
    
    var ele = element.id.split('-');
    if(ele[0] == 0){
        sum += Number(ele[1]);
        document.getElementById("sum").innerHTML =sum+'円';
    }else if(ele[0] == 1){
        sum -= Number(ele[1]);
        document.getElementById("sum").innerHTML =sum+'円';
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
        'animation': 'popup 0.5s ease-out',
        'bottom':'0px'
    });
    $('#calendar').css({
        'margin-bottom':'250px',
        'animation':'none'
    });
}

// // ドーナツチャート
// var doughnutData = [
//     {
//       value: 500,
//       color:"#9bcad0",
//       highlight: "#a7d7de",
//       label: "スマートフォン"
//     },
//     {
//       value: 150,
//       color: "#d5a87f",
//       highlight: "#e4b68a",
//       label: "PC"
//     },
//     {
//       value: 80,
//       color: "#cca9ca",
//       highlight: "#dcb7da",
//       label: "タブレット"
//     },
//     {
//       value: 20,
//       color: "#edef9c",
//       highlight: "#fcfea6",
//       label: "その他デバイス"
//     }
// ];
// window.onload = function(){
//     var ctx = document.getElementById("graph").getContext("2d");
//     window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
//         responsive : true
//     });
// }


var target2= document.getElementById("conf");
var newTagPop2 = document.createElement("div");
newTagPop2.innerHTML = '<h2>貯金額</h2><p id="sum">'+sum+'円</p>';
target2.appendChild(newTagPop2);

document.getElementById('prev').addEventListener('click', moveCalendar);
document.getElementById('next').addEventListener('click', moveCalendar);

showCalendar(year, month)
// 今日の日付
window.onload = function () {
    //今日の日時を表示
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var toTwoDigits = function (num, digit) {
    num += ''
    if (num.length < digit) {
        num = '0' + num
    }
    return num
    }
    
    yyyy = toTwoDigits(year, 4)
    mm = toTwoDigits(month, 2)
    dd = toTwoDigits(day, 2)
    var ymd = yyyy + "-" + mm + "-" + dd;
    
    document.getElementById("today").value = ymd;
    document.getElementById("today2").value = ymd;

    
    let mm0;
    let dd0;
    if(01<=mm && mm<=09){
        let mm2 = mm.split('0');
        mm0 = mm2[1];
    }else{
        mm0 = mm;
    }
    if(01<=dd && dd<=09){
        let dd2 = dd.split('0');
        dd0 = dd2[1];
    }else{
        dd0 = dd;
    }
    $('#td'+String(yyyy)+String(mm0)+String(dd0)).addClass("is-today");
}
