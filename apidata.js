$(function () {
	var $jsondata = $('#jsondata');
	$.ajax({
		url: "http://ec2-18-220-107-77.us-east-2.compute.amazonaws.com:9000/api/product_inventory_history?sku=101",
		type: 'GET',
		dataType: 'jsonp',
		
		success:function(data) {
			$.each(data.History, function(i, piece){
				$jsondata.append('<li>' + data.History[i] + ' </li>');
			});
		}
	});
});
