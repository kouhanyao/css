
window.onload=function(){
    var player=document.getElementById("player");
    var audio=new Audio("music/value.mp3");
    player.onclick=function(){
        if(audio.error){
            alert(audio.error.code);
        }
        if(audio!==null){
            //��ⲥ���Ƿ�����ͣ.audio.paused �ڲ���������ʱ����false.�ڲ�������ͣʱ����true

            if(!audio.paused)
            {
                audio.pause();// ���������ͣ//audio.play();// ������ǲ���
            }else audio.play();
        }
    }
};