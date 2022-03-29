$(document).ready(function(){
    /*
    $("nav > ul > li").hover(function(){  //마우스가 영역 내부로 진입했을 때(mouseenter)
        $(this).find("ul").stop().slideDown();  //펼쳐지듯 보여준다.
    }, function(){  //마우스가 영역 밖으로 빠져나왔을 때(mouseleave)
        $(this).find("ul").stop().slideUp();  //말아올라가듯 감춘다.
    });
    //this : 이벤트가 발생한 장소 또는 요소. 분기점에 대한 특정 요소를 지목
    // $("선택자1").find("선택자2") : 선택자1의 하위요소 중 선택자2를 찾아서 선택하겠다는 (인접 선택자)선택자 메서드
    // stop() : 한번만 실행하고 끊어버리겠다는 메서드
    */
    $("nav > ul > li").click(function(){
        $("nav > ul > li > ul").stop().slideUp();
        $(this).find("ul").stop().slideDown();
        return false;
    });
    //<a href="">다른 페이지로 연동할 영역에 대한 단어</a>
    //href="" : 현재 페이지를 다른 주소를 가진 페이지로 이동시키겠다는 의미. 현재 페이지를 새로고침

    $(".ex_02 .menu > ul > li").hover(function(){
        // 마우스가 영역 내로 진입시
        $(this).find("ul").stop().slideDown();
        // this : 이벤트가 발생한 공간
        // find : 하위 요소 중에서 일부 요소를 선택;탐색 선택자
        // stop : 메모리에 의한 반복 실행을 막고 한번만 실행하도록 구성
    }, function(){
        // 마우스가 영역 밖으로 이탈시
        $(this).find("ul").stop().slideUp();
    })
});