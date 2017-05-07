var map = new BMap.Map("myMap");
var point = new BMap.Point(120.2, 30.3);
map.centerAndZoom(point, 15);
window.setTimeout(function() {
  map.panTo(new BMap.Point(120.2, 30.3));
}, 2000);

map.centerAndZoom(new BMap.Point(120.2, 30.3), 11);  
map.enableScrollWheelZoom(); 
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州");

var marker = new BMap.Marker(point);    
	map.addOverlay(marker);
	marker.enableDragging();    
	marker.addEventListener("dragend", function(e){    
    alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
	})


	
	var local = new BMap.LocalSearch(map, {
  	pageCapacity: 8,
  	renderOptions: {
    map: map,
    panel: "subresult"
  	}
	});
	local.searchNearby("宾馆", "西湖");

	
	var transit = new BMap.TransitRoute(map, {
    renderOptions: {
    map: map,
    panel: "result"
    }
	});
	transit.search("杭州师范大学-东南门", "西湖,宾馆");

	var opts = {
    width: 250,    
    height: 250,  
    title: "<span style='color:#FF0000'>"+"地址：", 
      
    }

    var adress_array=[
        [120.020039,30.294819,"恕园1号楼"],
        [120.017441,30.295483,"食堂"],
    	[120.015008,30.296067,"博文苑7号楼"],
    	[120.013208,30.29502,"操场"],
	];


for(var i = 0;i < adress_array.length;i++){
	var point= new BMap.Marker(new BMap.Point(adress_array[i][0],adress_array[i][1]));
	var address="<p style='margin:0 0 5px 0;padding:0'>"+ adress_array[i][2]+"</p>";
	var imgaddress="<img style='width:200px;height:200px' src='img/ex9/0"+i+".jpg' />";
	var box=address+imgaddress;
	OnClick(box,point);
	map.addOverlay(point);
}

function OnClick(div,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}
  
	

