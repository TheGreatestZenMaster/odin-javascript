var stringToSplit = "フランスとイタリアの境にはアルプス山脈がある";
//var splitList = ["の", "と"];
//splitString(stringToSplit);

//console.log(/\u{304C}/u.test('が'));

// /[\u304C]+/g
// /(?!/[\u304C]+/)/g

// splitJapanese = japanese.match(/[^\u304C]+|が/g);

///[\u30A0-\u30FF]+/g
//japanese = ["フランスとイタリアの境にはアルプス山脈がある"];
//console.log(stringToSplit.match(/[^が]+|が/g));
var japanese = stringToSplit.match(/[^\u30A0-\u30FF]+|[\u30A0-\u30FF]+/g);
///[^\u304C]+|[^\u30A0-\u30FF]+/g
var count = 0;
	
var dash = function() {
  $('.wrapper').html(japanese[count]);
}


$(document).ready( function() {
	var count = 0;
  setInterval( function() {
  	$('.wrapper').html(japanese[count]);
    count++;
  }, 500);
});
