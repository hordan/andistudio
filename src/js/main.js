// $(document).ready(function() {
//     console.log("here will be some js code");
//   });

//   var navlnks = document.querySelectorAll(".tab-pane fade show");


//   $.getJSON( "data.json", function( json ) {
//       for(var i in json.cards){
//           addCard(json.cards[i]);
//       }
    
//  });


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