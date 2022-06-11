$(function () {
    var currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            //開始作答
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio' value='${index}>'<label>${element[0]}</label><br><br>  `);
            });
            $("#startButton").attr("value","Next");
        }else{
            //已經開始
            //哪一個選項被選取
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                    //已經要通往最終結果了(A~D)
                    var finalResult = questions[currentQuiz].answers[i][1];
                    $("#question").text(finalAnswers[finalResult][0]);
                    $("#options").empty();
                    $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                    currentQuiz=null;
                    $("#startButton").attr('value','重新開始');
                }else{
                    //正常跳下一題(原始資料為紙本資料，-1對照js陣列)
                    currentQuiz=questions[currentQuiz].answers[i][1]-1;
                    
                    $("#question").text(questions[currentQuiz].question);
                    $("#options").empty();
                    questions[currentQuiz].answers.forEach(function(element,index,array){
                        $("#options").append(`<input name='options' type='radio' value='${index}>'<label>${element[0]}</label><br><br>  `);
                    });
                }
                return false;
                }

            });
        }
    });
});

