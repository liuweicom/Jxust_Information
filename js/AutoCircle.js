function AutoCircle(){
    var webcast=document.getElementsByClassName('webcast')[0];
     var stage=new Konva.Stage({
        container:'pie',
        width:webcast.offsetWidth,
        height:webcast.offsetHeight
    });
     var flag=webcast.offsetHeight==320?webcast.offsetWidth/360:1;
     console.log(flag);
    var cenX=webcast.offsetWidth/2||120;
    // var cenX=stage.width()/2;
    var cenY=webcast.offsetHeight/2||120;
    console.log(cenX);
    console.log(cenY);
    // var cenX=120;
    // var cenY=120;
    var bgLayer=new Konva.Layer();
    stage.add(bgLayer);

    //绘制背景
    var innerRadius = 90*flag;  //内环的半径
    var outerRadius = 140*flag;    // 外环的半径

    // 创建背景内环虚线圆
    var innerCircle = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: innerRadius,
        stroke: '#203c76',
        strokeWidth: 2,
        dash: [10,4], //设置虚线，10实线， 4像素空
    });
    //把 内环虚线圆添加到背景层中
    bgLayer.add( innerCircle );

    //创建背景的外环的虚线圆
    var outerCircle = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: outerRadius,
        stroke: '#203c76',
        strokeWidth: 2,
        dash: [10,4], //设置虚线，10实线， 4像素空
    });
    bgLayer.add( outerCircle ); //把外虚线圆，添加到层中。

    // 把背景中心圆形 添加到 层中

    var cenCircleText=new CircleText({
        x: cenX,
        y: cenY,
        innerRadius: 45*flag,
        outerRadius: 55*flag,
        innerStyle: '#203c76',
        outerStyle: '#777',
        text: '实验室简介'
    });
    cenCircleText.addToGroupOrLayer( bgLayer );

    bgLayer.draw();

    var animateLayer=new Konva.Layer();
    stage.add(animateLayer);
    var L2Group=new Konva.Group({
        x:cenX,
        y:cenY
    });
    var x0=cenX+innerRadius*Math.cos(Math.PI*-60/180);
    var y0=cenY+innerRadius*Math.sin(Math.PI*-60/180);

    var L2_circleText_c33=new CircleText({
        x:innerRadius*Math.cos(Math.PI*160/180),
        y:innerRadius*Math.sin(Math.PI*160/180),
        innerRadius:20*flag,
        outerRadius:30*flag,
        innerStyle: '#FACED6',        //内圆填充的颜色呢
        outerStyle: '#777',        //外圆环填充的颜色
        text: '品牌专业'
    });

    L2_circleText_c33.addToGroupOrLayer(L2Group);

    var L2_circleText_HTML5=new CircleText({
        x:innerRadius*Math.cos(Math.PI*-60/180),
        y:innerRadius*Math.sin(Math.PI*-60/180),
        innerRadius:20*flag,
        outerRadius:30*flag,
        innerStyle: 'orange',     //内部填充样式
        outerStyle: '#777',    //外圆的样式
        text: '十一五重点学科'         // 内圆的文本
    });

    L2_circleText_HTML5.addToGroupOrLayer(L2Group);
    animateLayer.add(L2Group);

    var L3group=new Konva.Group({
        x:cenX,
        y:cenY
    });

    var L3_circle_js=new CircleText({
        x: outerRadius*Math.cos( 60 * Math.PI / 180 ),
        y: outerRadius*Math.sin( 60 * Math.PI / 180 ),
        innerRadius: 30*flag,    //内圆半径
        outerRadius: 40*flag,    //外圆半径
        innerStyle: '#91BFF8',  //内圆的填充样式
        outerStyle: '#E1E1E1',  //外圆的填充样式
        text: '本科品牌专业',        //圆形内的文字
    });
    L3_circle_js.addToGroupOrLayer(L3group);

    var L3_circle_NodeJs=new CircleText({
        x: outerRadius*Math.cos( -60 * Math.PI / 180 ),
        y: outerRadius*Math.sin( -60 * Math.PI / 180 ),
        innerRadius: 30*flag,    //内圆半径
        outerRadius: 40*flag,    //外圆半径
        innerStyle: 'yellow', //内圆的填充样式
        outerStyle: '#E1E1E1',  //外圆的填充样式
        text: '硕士学位授予权'        //圆形内的文字
    });
    L3_circle_NodeJs.addToGroupOrLayer(L3group);
    animateLayer.add(L3group);
    animateLayer.draw();

//    设置动画
    var rotateAnglPerSecond=60;
    var animate=new Konva.Animation(function(frame){
        var rotateAngle=rotateAnglPerSecond*frame.timeDiff/1000;
        L2Group.rotate(rotateAngle);
        L2Group.getChildren().each(function(item,index){
            item.rotate(-rotateAngle);
        });
        L3group.rotate(-rotateAngle);
        L3group.getChildren().each(function(item,index){
            item.rotate(rotateAngle);
        })
    },animateLayer);
    animate.start();

    animateLayer.on("mouseover",function(){
        rotateAnglPerSecond=10;
    });
    animateLayer.on("mouseout",function(){
     rotateAnglPerSecond=60;
    }); 

    // var bg_img=document.getElementById("content_info");

    // var dataURL = stage.toDataURL();
    // bg_img.style.backgroundImage='url("' + dataURL+ '")';
    
    // window.open(dataURL); 
}