$( document ).ready(function() {
    //line
    var h = window.screen.height;
    var i = (h / 72) + 2;
    var j = 0;

    while (j < i) {
        $("#bg-line").append("<div class='line'></div>");
        j++;
    }

	if(!window.console) console = {
    	log: function() {}
    };

    console.log(h);
    console.log(i);

});

