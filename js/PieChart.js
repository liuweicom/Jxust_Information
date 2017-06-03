/**
 * Created by Administrator on 2017/1/19.
 */
function PieChart(option){
    this._init(option);
}

PieChart.prototype={
    _init:function(option){
        this.x=option.x||0;
        this.y=option.y||0;
        this.r=option.r||0;
        this.data=option.data||0;

        this.group=new Konva.Group({
            x:this.x,
            y:this.y
        });
        this.wedgeGroup=new Konva.Group({
            x:0,
            y:0
        });
        this.textGroup=new Konva.Group({
            x:0,
            y:0
        });
        this.group.add(this.wedgeGroup);
        this.group.add(this.textGroup);
        var self=this;
        var tempAngel=-90;
        this.data.forEach(function(item,index){
            var angle=360*item.value;
            var wedge=new Konva.Wedge({
                x:0,
                 y:0,
                radius:self.r,
                fill:item.color,
                angle:angle,
                rotation:tempAngel
            });
            self.wedgeGroup.add(wedge);

            var textAngle=tempAngel+angle/2;
            var text=new Konva.Text({
                x:(self.r+20)*Math.cos(Math.PI*textAngle/180),
                y:(self.r+20)*Math.sin(Math.PI*textAngle/180),
                text:item.value*100+"%",
                fill:item.color
            
            });
            if(textAngle>90&&textAngle<270){
                //让文本向左边 移动文字宽度的位置。
                text.x( text.x() - text.getWidth() );
            }
            self.textGroup.add(text);
            tempAngel+=angle;
        });
        var cir=new Konva.Circle({
            x:0,
            y:0,
            radius:110,
            stroke:"#ccc",
            strokeWidth:2
        });
        this.group.add(cir);
        this._animateIndex=0;
    },
    playAnimate:function(){
        var self=this;
        if(this._animateIndex==0){
            this.wedgeGroup.getChildren().each(function(item,index){
                item.angle(0);
            });

        }
        var item= this.wedgeGroup.getChildren()[self._animateIndex];
        item.to({
            angle:this.data[this._animateIndex].value*360,
            duration:2*this.data[this._animateIndex].value,
            onFinish:function(){
                self._animateIndex++;
                if(self._animateIndex>=self.data.length){
                    self._animateIndex=0;
                    return;
                }
                self.playAnimate();
            }
        });
    },
    //把饼状图添加到层里面的方法
        addToGroupOrLayer: function( arg ) {
        arg.add( this.group );
    }

}