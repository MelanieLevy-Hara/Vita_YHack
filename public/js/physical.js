$(document).ready(function(){
	Parse.initialize("Us5rJHb10zbJ5y2NKxHFe3TtfMN45w1gz0dus1XH", "5r2RSpjtAoAlQtaER5DklX0VMDJs9qqzgVcFz2JG");
	var Physical = Parse.Object.extend("Physical");
	var query = new Parse.Query(Physical);
	query.find({
	  success: function(results) {
	    alert("Successfully retrieved " + results.length + " questions.");
	    // Do something with the returned Parse.Object values
	      var object = results[Math.floor(Math.random()*results.length)];
	      $('#question').html(object.get('Questions'));

	    
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
});