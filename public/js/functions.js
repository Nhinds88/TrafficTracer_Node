
$(document).ready(function(){
   
   // $(".favoriteIcon").on("click", function(){
      
   //    var imageURL = $(this).prev().attr("src");
      
   //    if ($(this).attr("src") == "img/favorite.png"){
   //      $(this).attr("src", "img/favorite_on.png");
   //      updateFavorite("add", imageURL);//inserts a new record
   //    } else {
   //        $(this).attr("src", "img/favorite.png");
   //        updateFavorite("delete", imageURL);//Delete a new record
   //    }
   // });
   
   // $(".keywordLink").on("click", function(){
      
   //    $.ajax({
   //       method: "get",
   //       url: "/api/displayFavorites",
   //       data: {"keyword" : $(this).text().trim()},
   //       success: function(rows, status) {
            
   //          $("#favorites").html("");
   //          rows.forEach(function(row, p){
               
   //             if (p % 4 == 0 && p != 0){
   //                $("#favorites").append("<br>");
   //             }
   //             $("#favorites").append("<img class='image' src='"+row.imageURL+"' width='150' height='150'>");
   //             $("#favorites").append("<img class='favoriteIcon' src='img/favorite_on.png' width='20' height='20'>");
   //          });
   //          $(".favoriteIcon").on("click", function(){
   //             var imageURL = $(this).prev().attr("src");
   //             $(this).attr("src", "img/favorite_on.png");
   //             updateFavorite("delete", imageURL);//Delete a new record
   //             $(this).prev().remove();
   //             $(this).remove();
   //          });
   //       }
   //    });//ajax
   // });
   
   // function updateFavorite(action, imageURL) {
      
   //    $.ajax({
   //       method: "get",
   //       url: "/api/updatefavorites",
   //       data: {"imageURL" : imageURL,
   //              "keyword" : $("#keyword").val(),
   //              "action" : action
   //             }
   //    });//ajax
   // }
    
});