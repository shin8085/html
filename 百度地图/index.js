//初始化地图
var map = new BMap.Map("container");// 创建地图实例  
var gpoint = new BMap.Point(119.545430,26.643857); // 创建点坐标  

//将谷歌坐标转换为百度坐标
var convertor=new BMap.Convertor();
var pointArr=[];
pointArr.push(gpoint);
convertor.translate(pointArr,3,5,this.translateCallback);

//回调函数
function translateCallback(data){
    if(data.status === 0) {
    map.setCenter(data.points[0]);
    map.centerAndZoom(data.points[0], 15);// 初始化地图，设置中心点坐标和地图级别 
    var marker=new BMap.Marker(data.points[0]);
    map.addOverlay(marker);
    }
}

