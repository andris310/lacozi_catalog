
function getItems(link, cssid) {
  $.ajax({
    url: link,
    type: 'get',
    dataType: 'json',
    success: function(results) {
      var list = $(cssid);
      $(results).each (function(index, result) {
        var item = $("<li><img src='" + result["picture"]["thumb"]["url"] + "'></li>");
        list.append(item.fadeIn(500));
        item.attr('item_id', result["id"]);
      });
    }
  });
  console.log('got items');
  console.log(window.location.pathname);
}

function getItemDetails(itemId) {
  var info = $('#product-data');
  info.html('');
  $.ajax({
    url: '/product-details.json',
    data: { q: itemId },
    dataType: 'json',
    success: function(result) {
      var r = result[0];
      info.append($('<h2>' + r['name'] + '</h2>').fadeIn(500));
      info.append($('<div class="pic"><img src=' + r['picture']['url'] + '></div>').fadeIn(500));
      info.append($('<div class="description"><p>' + r['description'] + '</p></div>').fadeIn(500));
      info.append($('<div class="code">' + r['code'] + '</div>').fadeIn(500));
    }
  });
  console.log('details loaded');
}

// function scroller() {
//   setTimeout(function() {
//     myAppShot = new iScroll('wrapper', {
//         checkDOMChanges: true
//      });
//   }, 100);

//   document.addEventListener('DOMContentLoaded', scroller, false);
//   console.log('scroller');
// }


$(document).ready(function() {
  var decPillows = $('#dec-pillows');
  var duvetSets = $('#duvet-sets');
  var babyBlankets = $('#baby-blanket-list');
  var napkins = $('#napkin-list');
  var list = $('.list');


  var pathname = window.location.pathname;
  if (pathname === '/decorative-pillows'){
    decPillows.load(getItems('/decorative-pillows.json', decPillows));
  }
  else if (pathname === '/baby-blankets'){
    babyBlankets.load(getItems('/baby-blankets.json', babyBlankets));
  }
  else if (pathname === '/duvet-sets'){
    duvetSets.load(getItems('/duvet-sets.json', duvetSets));
  }
  else if (pathname === '/napkins'){
    napkins.load(getItems('/napkins.json', napkins));
  }

    list.on('click', 'li', function() {
    list.css({
              'width': '174px',
              'float': 'right',
             'height': '90%',
        'margin-left': '0px',
         'margin-top': '-105px'
    });

    var li = $(this);
    var itemId = li.attr('item_id');
    getItemDetails(itemId);
  });
});