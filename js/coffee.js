$(document).ready(function(){
    //header에 햄버거 버튼 클릭 시
    $('header button').click(function(){
        $('nav').stop().slideDown();
        if( $(this).text() == 'X' ) { //버튼의 글자가 X 이면,
            $(this).html('&#x2630;');   //버튼의 글자를 entity &#x2630; 로 변경
            $('nav').stop().slideUp();
        }
        else {
            $(this).text('X');  //버튼의 글자가 X가 아닐 때 누르면 X로 변경
            $('nav').stop().slideDown();
        }
    });

    //메뉴항목 클릭했을 때
    $('nav a').click(function(){
        $('header button').html('&#x2630');
        $('nav').stop().slideUp();
    });

}); //////////END