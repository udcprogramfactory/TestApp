
application.service('ajaxService', function($http){     
   
	      this.post=function(url, params, callback){
	    	  
	    	  	/*var div = document.createElement("div");
	    	  	div.setAttribute("class","loadingIndicator" );
	    	    var span = document.createElement("span");
	    	    span.setAttribute("class","loadingSpinner");
	    	    div.appendChild(span);
	    	    document.getElementById(elementid).appendChild(div);*/
	    	  
	    	  
	    	  $http.post(url, angular.toJson(params)).
	    	  success(function(data, status, headers, config) {
	    	    // this callback will be called asynchronously
	    		  callback(data);
	    	    // when the response is available
	    	  }).
	    	  error(function(data, status, headers, config) {
	    	    // called asynchronously if an error occurs
	    	    // or server returns response with an error status.
	    		  console.log(data);
	    	  });
	      }
	
 
});