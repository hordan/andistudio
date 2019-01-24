 $(document).ready(function() {
     console.log("here will be some js code");
 
   });

  var navlnks = document.querySelectorAll(".tab-pane fade show");
// $.getJSON( "data.json", function( json ) {
//     for(var i in json.fabrics){
//         addCardNew(json.fabrics[i]);
//     }
//  });


//var $maibdiv = $("<div>", {class: "col-md-4 col-lg-4"});
//$("body").append($maindiv);
var num = 1 ;
function addCardNew(dataItem){
    var $mainDiv = $("<div>", {class: "col-md-4 col-lg-4"});
    var $mainFugure = $("<figure>", {class: "card card-product"});
    var $mainImgDiv = $("<div>", {class: "img-wrap"})
    var $mainImg = $("<img>", {class: "img-wrap"}).attr("src", dataItem.imgsrc);
    $mainImgDiv.append($mainImg);
    var $figCaption = $("<figcaption>", {class: "info-wrap"});
    var $figText = $("<h5>").text(dataItem.title);
    var $mainList = $("<ul>", {class: "list-group"});

    var $listItem = $("<li>", {class: "list-group-item d-flex justify-content-between align-items-center"});
    var $badgeHeader = $("<div>", {class: "badge-header"}).text("Производство");
    var $badgeList = $("<div>", {class: "badge-list"});
    for(var i in dataItem.contries){ 
        var $badgeSpan = $("<span>", {class: "badge badge-primary badge-pill"}).text(dataItem.contries[i]);
        $badgeList.append($badgeSpan);
    }
    $listItem.append($badgeHeader).append($badgeList);
    var $listItem2 = $("<li>", {class: "list-group-item d-flex justify-content-between align-items-center"});
    var $badgeHeader2 = $("<div>", {class: "badge-header"}).text("Производство");
    var $badgeList2 = $("<div>", {class: "badge-list"});
    for(var i in dataItem.colors){ 
        var $badgeSpan = $("<span>", {class: "badge badge-primary badge-pill"}).text(dataItem.colors[i]);
        $badgeList2.append($badgeSpan);
    }
    $listItem2.append($badgeHeader2).append($badgeList2);
    $mainList.append($listItem).append($listItem2);
    var $butNumber = $("<button>", {class: "btn btn-success"}).text("Наименований в наличии");
    var $butSpan = $("<span>", {class: "badge badge-light"}).text(dataItem.number);
    $butNumber.append($butSpan);
    var $accordDiv = $("<div>", {id: "accordion"});
    var $cardDiv = $("<div>", {class: "card"});
    var $cardHeader = $("<div>", {class: "card-header" , id: "heading" + num });
    var $cardText = $("<h5>", {class: "mb-0"});
    var $cardButton = $("<button>", {class: "btn btn-link"}).attr({
        "data-toggle": "collapse",
        "data-target": "#collapse" + num,
        "aria-expanded": "true" , 
        "aria-controls": "collapse" + num
    }).text("Описание ткани");
    var $collapseOne = $("<div>", {id: "collapse" + num , class: "collapse"}).attr({
        "aria-labelledby":"heading"+ num ,
        "data-parent": "#accordion"});
    var $cardBody =  $("<div>", {class: "card-body"}).text(dataItem.description);
    var $bottomWrap =  $("<div>", {class: "bottom-wrap"});
    var $bottomWrapH5 =  $("<div>", {class: "price-wrap h5"});
    var $spanPrice = $("<span>", {class: "price"}).text("От " + dataItem.price + " ");
    var $spanPriceCur = $("<span>", {class: "price-currency"}).text("бел.руб");
    var $spanPriceAmount = $("<span>", {class: "price-amount"}).text("за 1 метр погонный");
    $spanPrice.append($spanPriceCur).append($spanPriceAmount);
    $bottomWrapH5.append($spanPrice);
    $bottomWrap.append($bottomWrapH5);
    $collapseOne.append($cardBody);
    $cardText.append($cardButton);
    $cardHeader.append($cardText);
    $cardDiv.append($cardHeader).append($collapseOne);
    $accordDiv.append($cardDiv);
    $figCaption.append($figText).append($mainList);
    $mainFugure.append($mainImgDiv).append($figCaption).append($butNumber).append($accordDiv).append($bottomWrap);
    $mainDiv.append($mainFugure);
    $("#mainlist").append($mainDiv);
    num++;
}

//   function addCard(dataItem){
//     var newDiv = document.createElement("div");
//     newDiv.className = "card";
//     var newImg = document.createElement("img");
//     newImg.className = "card-img-top";
//     newImg.alt = dataItem.title;
//     newImg.src = dataItem.imgsrc;
//     var newH5Text = document.createElement("H5");
//     newH5Text.className  = "card-title";
//     var text = document.createTextNode("Shop ItemJS");
//     newH5Text.appendChild(text);
//     var newCardText = document.createElement("p");
//     newCardText.className  = "card-text";
//     var mainText = document.createTextNode(dataItem.text); 
//     newCardText.appendChild(mainText);
//     var newCardFooter = document.createElement("div");
//     newCardFooter.class = "card-footer";
//     var newSmallText = document.createElement("small");
//     newSmallText.className = "text-muted";
//     var footerText = document.createTextNode(dataItem.footerText);
//     newSmallText.appendChild(footerText);
//     newCardFooter.appendChild(newSmallText);
//     newDiv.appendChild(newImg);
//     newDiv.appendChild(newH5Text);
//     newDiv.appendChild(newCardText);
//     newDiv.appendChild(newCardFooter);
//     var newDivCol = document.createElement("div");
//     newDivCol.className = "col-lg-2";
//     newDivCol.appendChild(newDiv);
//     document.querySelector("#v-pills-fabrics").children[0].appendChild(newDivCol);
//   }