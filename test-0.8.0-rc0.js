if (Meteor.isClient) {
    var Photos = new Meteor.Collection(null);

    Template.photos.rendered = function() {
		var el = this.find(".content");
		if(el) {
			$(el).on('click', function() {
				event.stopPropagation();
			});
		}
	}

    Template.photos.events({
		'click .item' : function(event, template){
	    	console.log('click');
		}
    });

    Template.photos.helpers({
    	photos: function() {
    		return Photos.find();
    	}
    })
    
    Meteor.startup(function(){
		if(!Photos.findOne()){
	    	Photos.insert({url: "http://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/320px-Hopetoun_falls.jpg"});
		}
    });
}
