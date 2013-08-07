// getItems = (link, cssid) ->
//   $.ajax
//     url: link
//     type: "get"
//     dataType: "json"
//     success: (results) ->
//       list = $(cssid)
//       $(results).each (index, result) ->
//         item = $("<li><img src='" + result["picture"]["thumb"]["url"] + "'></li>")
//         list.append item
//         item.attr('item_id', result["id"])


// $(document).ready ->
//   $('#dec-pillows').load(getItems('/decorative-pillows.json', '#dec-pillows'))
//   $('#duvet-sets').load(getItems('/duvet-sets.json', '#duvet-sets'))


  // $('.list').on('click', 'li', ->
  //   info = $('#product-data')
  //   li = $(this)
  //   itemId = li.attr('item_id')
  //   info.html('')
  //   $.ajax
  //     url: '/product-details.json'
  //     data: q: info
  //     debugger
  //     type: 'get'
  //     dataType: 'json'
  //     success: (result) ->
  //       info.append('some text here')
  //       console.log(result)
  //   )




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
}


$(document).ready(function() {
  $('#dec-pillows').load(getItems('/decorative-pillows.json', '#dec-pillows'));
  $('#duvet-sets').load(getItems('/duvet-sets.json', '#duvet-sets'));

  $('.list').on('click', 'li', function() {
    var list = $('.list');
    list.css({
              'width': '154px',
              'float': 'right',
             'height': '90%',
        'margin-left': '0px'
    });


    $('.item-list').removeClass('grid');
    var li = $(this);
    var itemId = li.attr('item_id');
    getItemDetails(itemId);
  });
});