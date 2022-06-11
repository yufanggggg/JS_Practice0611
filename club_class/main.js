$(function () {
    $("#courseTable").append("<tr><td>場次</td><td>時間</td><td>主題</td></tr>");
    
    var topicCount =topic.length;
    //1 sec = 1000 ms
    //計算一天的秒數量
    let millisecsPerDay = 24*60*60*1000;

    for (var x =0; x<topicCount;x++){
        var thisDateObject = new Date(startDate.getTime()+7*x*millisecsPerDay);
        $("#courseTable").append(
            
            "<tr>"+`<td>${x+1}</td>`+`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`+`<td>${topic[x]}</td>`+"</tr>"
          
        );
    }

});  


