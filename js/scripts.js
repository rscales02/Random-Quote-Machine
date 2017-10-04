$(document).ready(function() {

	var quote;
	var author;

    function getNewQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp',
            },
            success: function(response) {
            	quote = response.quoteText;
            	$("#quote").text(quote);
            	author = response.quoteAuthor;
            	if (author) {
            		$("#author").text("-" + author);
            	}else {
            		$("#author").text("-Anonymous");
            	}
            }
        });
    }
    getNewQuote();

    $('#newQuote').on('click', function(event){
    	event.preventDefault();
    	getNewQuote();
    });

    $('.twitter-share').on('click', function(event) {
    	event.preventDefault();
    	window.open('https://www.twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -- ' + author));
    });
});