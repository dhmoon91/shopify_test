var total = 0; 
var clock_total =0; 
var w_total =0;
function restTotalGet() {
	
	//fetch the list
	for (var i =0; i <=5;i++)
	{
		var url = "http://shopicruit.myshopify.com/products.json?page="+i
		$.get(url, restGetCallback);

	}

	
}

function restGetCallback(obj) {
	
	for (var i =0; i <obj.products.length; i++)
	{
		

		if (obj.products[i].product_type == "Clock" || obj.products[i].product_type == "Watch" ) {
			
			console.log(obj.products[i].product_type)
			var variants = obj.products[i].variants;

			for (var j = 0; j < variants.length; j++) {
				total += parseFloat(variants[j].price);
				console.log(variants[j].price);
			}
		}
	}
	console.log("TOTAL OF CLOCK,Watch:"+total);
	//console.log(total);
	document.getElementById("Total").innerHTML = total
	
}

//////////////////////////////////////////
function restClockGet() {
	
	//fetch the list
	for (var i =0; i <=5;i++)
	{
		var url = "http://shopicruit.myshopify.com/products.json?page="+i
		$.get(url, restGetClockCallback);

	}
	
}

function restGetClockCallback(obj) {
	
	for (var i =0; i <obj.products.length; i++)
	{
		

		if (obj.products[i].product_type == "Clock" ) {
			
			console.log(obj.products[i].product_type)
			var variants = obj.products[i].variants;

			for (var j = 0; j < variants.length; j++) {
				clock_total += parseFloat(variants[j].price);
				console.log(variants[j].price);
			}
		}
	}
	console.log("TOTAL OF CLOCK: "+total);
	//console.log(total);
	document.getElementById("C_Total").innerHTML = clock_total
}


/////////////////////////////////////////////
function restWatchGet() {
	
	
	for (var i =0; i <=5;i++)
	{
		var url = "http://shopicruit.myshopify.com/products.json?page="+i
		$.get(url, restGetWatchCallback);

	}
	
	
}

function restGetWatchCallback(obj) {
	//var total = getTotal(obj.products);
	for (var i =0; i <obj.products.length; i++)
	{
		

		if (obj.products[i].product_type == "Watch" ) {
			
			console.log(obj.products[i].product_type)
			var variants = obj.products[i].variants;

			for (var j = 0; j < variants.length; j++) {
				w_total += parseFloat(variants[j].price);
				console.log(variants[j].price);
			}
		}
	}
	console.log("TOTAL OF Watch: "+total);
	//console.log(total);
	document.getElementById("W_Total").innerHTML = w_total
}



