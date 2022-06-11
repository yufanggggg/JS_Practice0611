let foodImages =[
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg",
    "https://shop.8way.com.tw/images/ProSlide/P001/Pork-Dumpling.png"
    


]
$(function(){
$("input").on("click",function(){
    
   //alert("Hi");
   var numberOfListItem =$("#choices li").length;
   var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("#choices li").eq(randomChildNumber).text());
    $("img").attr("src",foodImages[randomChildNumber]);
});

})


