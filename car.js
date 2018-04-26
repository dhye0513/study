$(function(){
    var moveCar = new MoveCar('.carMoveCont');
});

// Movecar 클래스
function MoveCar(selector){
    this.init(selector);
    this.initEvt();
}

// 요소 초기화
MoveCar.prototype.init = function(selector){
    this.$carMoveCont = $(selector);
    this.$carMoveList = null;
    this.$obj = this.$carMoveCont.find('.car');
}

MoveCar.prototype.initEvt = function(){
    this.swingCar();
}

MoveCar.prototype.swingCar = function(e){
    var objThis = this;
    this.$obj.animate({'top':'30px'}, 600).animate({'top':'35px'},600, function(){
        objThis.swingCar();
    });
}
