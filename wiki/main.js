
$(document).ready(function(){

  $(".loader").hide();

  $('div.icon-div').on('click',function(){
    $('.search-div').removeClass('hide');
    $('.icon-div').addClass('hide');
  });

  $('span.x').on('click',function(){
    $('input#query').val('');
    $('.icon-div').removeClass('hide');
    $('.search-div').addClass('hide');
    $('div.search-list').html('');
    $('.container').removeClass('top-semi');
    $('.container').addClass('top');
  });

  $('button').on('click',function(){
    var input = $('input#query').val();
    $.ajax({
        type: "GET",x
        url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+ input +"&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        beforeSend: function(){
          $('div.search-list').html('');
          $(".loader").show();
        },
        complete: function(){
          $('.container').removeClass('top');
          $('.container').addClass('top-semi');
          $(".loader").hide();
        },
        success: function (data, textStatus, jqXHR) {
          var pages = data.query.pages;
          var title, description;
          Object.keys(pages).forEach(function(key) {
            title = pages[key].title;
            description = pages[key].extract;
            pageid = pages[key].pageid;
            $('div.search-list').append("<div class='result'><a class='link' href='https://en.wikipedia.org/?curid=" + pageid + "' target='_blank' '><p><span>" + title + '</span></p><p>' + description + '</p></a></div>');
          });
        },
        error: function (errorMessage) {
        }
    });
  });
})
