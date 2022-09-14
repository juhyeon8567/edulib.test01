        <div class="side_area">
            <div class="side_menu">
                <? if ($menu == 'intro') { ?>
                <h3 class="side-title">소개</h3>
                <ul class="lnb">
                    <li class="fir-menu">
                        <a href="#">에듀립 소개</a>
                        <span class="open-btn"><i class="fi fi-rr-caret-down"></i></span>
                        <ul class="sec-menu">
                            <li><a href="#">소개1</a></li>
                            <li><a href="#">소개2</a></li>
                            <li><a href="#">소개3</a></li>
                            <li><a href="#">소개4</a></li>
                        </ul>
                    </li>
                    <li class="fir-menu">
                        <a href="#">회사 소개</a>
                        <span class="open-btn"><i class="fi fi-rr-caret-down"></i></span>
                        <ul class="sec-menu">
                            <li><a href="#">회사소개1</a></li>
                            <li><a href="#">회사소개2</a></li>
                        </ul>
                    </li>
                    <li class="fir-menu">
                        <a href="#">이용가이드</a>
                        <span class="open-btn"><i class="fi fi-rr-caret-down"></i></span>
                        <ul class="sec-menu">
                            <li><a href="#">이용가이드1</a></li>
                            <li><a href="#">이용가이드2</a></li>
                            <li><a href="#">이용가이드3</a></li>
                        </ul>
                    </li>
                    <li class="fir-menu">
                        <a href="#">구독권 안내</a>
                        <span class="open-btn"><i class="fi fi-rr-caret-down"></i></span>
                        <ul class="sec-menu">
                            <li><a href="#">구독권안내1</a></li>
                            <li><a href="#">구독권안내2</a></li>
                        </ul>
                    </li>
                </ul>
                <? } elseif ($menu == 'cs') { ?>
                <h4 class="side-title">고객센터</h4>
                <ul class="lnb">
                    <li class="fir-menu"><a href="#">공지사항</a></li>
                    <li class="fir-menu"><a href="#">자주 묻는 질문</a></li>
                    <li class="fir-menu"><a href="#">1:1 문의</a></li>
                    <li class="fir-menu"><a href="#">제휴 / 콘텐츠 구매</a></li>
                    <li class="fir-menu"><a href="#">단체 구독 신청</a></li>
                    <li class="fir-menu"><a href="#">이벤트 게시판</a></li>
                </ul>
                <? } elseif ($menu == 'mypage') { ?>
                <h4 class="side-title">마이 에듀립</h4>
                <ul class="lnb">
                    <li class="fir-menu"><a href="#">나의 관심주제</a></li>
                    <li class="fir-menu"><a href="#">내가 찜한 콘텐츠</a></li>
                    <li class="fir-menu"><a href="#">나의 구독권</a></li>
                    <li class="fir-menu on">
                        <a href="#">나의 결제 내역</a>
                        <div class="mynew-alarm">
                            <span>N</span>
                        </div>
                    </li>
                    <li class="fir-menu">
                        <a href="#">단체 구독권 신청내역</a>
                        <div class="mynew-alarm">
                            <span>N</span>
                        </div>
                    </li>
                    <li class="fir-menu">
                        <a href="#">나의 문의</a>
                        <div class="mynew-alarm">
                            <span>N</span>
                        </div>
                    </li>
                    <li class="fir-menu"><a href="#">회원정보</a></li>
                </ul>
                <? } elseif ($menu == 'content') { ?>
                <h4 class="side-title">중단원별 콘텐츠</h4>
                <div class="side-grade">
                    <div class="semester">
                        <a href="#"><span class="fir-half on">1-1</span></a>
                        <a href="#"><span class="fir-half">1-2</span></a>
                    </div>
                </div>
                <!-- 중단원 메뉴 예제 -->
                <ul class="lnb2">
                    <!-- 타이틀 고정 타입1 -->
                    <li class="fir-menu">
                        <a href="#" class="fir-menu-a">
                            <div class="fir-tit fir-idn-tit">
                                <p>15. 제국주의 침략과 국민 국가 건설 운동</p>
                            </div>
                            <img src="../../static/image/i_downarrow.png" alt="화살표다운아이콘"/>
                        </a>
                        <ul class="sec-menu">
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <!-- 자릿수 하나 일시 -->
                                    <div class="two-tit idn-tit-t01">
                                        <span>1. 세계 종교 제국주의 침략과 국민 국가 건설 운동</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; </span>하위메뉴 테스트</a></li>
                                    <li class="on"><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul> 
                            </li>
                            <li class="one-menu on">
                                <a href="#" class="one-tit">
                                    <!-- 자릿수 둘 일시 -->
                                    <div class="two-tit idn-tit-t02">
                                        <span>11. 열대 우림 기후 지역의 생활우림 기후 지역의 생활</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit idn-tit-t02">
                                        <span>16. 민주주의 이념과 기본민주주의 이념과 기본 원리</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul> 
                            </li>
                        </ul>    
                    </li>
                    <!-- 숫자 두자릿수일때 -->
                    <li class="fir-menu">
                        <a href="#" class="fir-menu-a">
                            <div class="fir-tit">
                                <p>5. 열대우림 기후 지역의 생활</p>
                            </div>
                            <img src="../../static/image/i_downarrow.png" alt="화살표다운아이콘"/>
                        </a>
                        <ul class="sec-menu">
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <!-- 자릿수 하나 일시 -->
                                    <div class="two-tit idn-tit-t01">
                                        <span>1. 중단원명</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul> 
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <!-- 자릿수 둘 일시 -->
                                    <div class="two-tit idn-tit-t01">
                                        <span>2. 중단원명</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                        </ul>    
                    </li>

                    <!-- 타이틀 흐르게 타입2 -->
                    <li class="fir-menu flow" style="display: none;">
                        <a href="#" class="fir-menu-a">
                            <div class="fir-tit">
                                <p class="">세계 종교의 확산과 지역 문화의 형성</p>
                            </div>
                            <img src="../../static/image/i_downarrow.png" alt="화살표다운아이콘"/>
                        </a>
                        <ul class="sec-menu">
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>1. 세계 종교의 확산과 지역 문화의 형성</span>
                                    </div>
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul> 
                            </li>
                            <li class="one-menu on">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>2. 열대 우림 기후 지역의 생활</span>
                                    </div>
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183;</span>1. 문자의 사용과 식의 계산</a></li>
                                    <li class="hover on"><a href="#"><span class="num">&#183;2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>3. 민주주의 이념과 기본 원리</span>
                                    </div>
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>4. 중단원 메뉴</span>
                                    </div>
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>5. 중단원 메뉴</span>
                                    </div>    
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                            <li class="one-menu">
                                <a href="#" class="one-tit">
                                    <div class="two-tit">
                                        <span>6. 중단원 메뉴</span>
                                    </div> 
                                </a>
                                <ul class="two-menu">
                                    <li><a href="#"><span class="num">&#183; 1차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 2차시</span>하위메뉴</a></li>
                                    <li><a href="#"><span class="num">&#183; 3차시</span>하위메뉴</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <? } elseif ($menu == 'subject') { ?>
                <h4 class="side-title">단원별 콘텐츠</h4>
                <div class="side-grade">
                    <div class="semester">
                    <a href="#"><span class="fir-half on">1-1</span></a>
                    <a href="#"><span class="fir-half">1-2</span></a>
                    </div>
                </div>
                <ul class="lnb2">
                    <!-- 자릿수 하나일때 (타입01) -->
                    <li class="one-menu">
                        <a href="#" class="one-tit idn-tit01">1. 바른 자세로 읽고 쓰기 바른 자세로 읽고 쓰기</a>
                        <ul class="two-menu">
                            <li class="ind-txt"><a href="#"><span class="num">&#183;</span> 바르게 듣는 자세 익히기 텍스트 소메뉴 차시 들여쓰기 테스트입니다.</a></li>
                            <li><a href="#"><span class="num">&#183; 2차시</span>바르게 읽는 자세 익히기</a></li>
                            <li><a href="#"><span class="num">&#183; 3~4차시</span>소리 내어 낱말 따라 읽기</a></li>
                            <li><a href="#"><span class="num">&#183; 5~6차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 7~8차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 9~10차시</span>차시명 텍스트</a></li>
                        </ul>
                    </li>
                    <!-- 자릿수 둘일때 (타입02) -->
                    <li class="one-menu on">
                        <a href="#" class="one-tit idn-tit02">15. 바른 자세로 읽고 쓰기 바른 자세로 읽고 쓰기</a>
                        <ul class="two-menu">
                            <li class="hover"><a href="#"><span class="num">&#183; 1차시</span>차시명 텍스트 소메뉴 차시 들여쓰기 테스트입니다.</a></li>
                            <li><a href="#"><span class="num">&#183; 2차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 3~4차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 5~6차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 7~8차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 9~10차시</span>차시명 텍스트</a></li>
                        </ul>
                    </li>
                    <li class="one-menu">
                        <a href="#" class="one-tit idn-tit-n">바른 자세로 읽고 쓰기 바른 자세로 읽고 쓰기</a>
                        <ul class="two-menu">
                            <li><a href="#"><span class="num">&#183; 1차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 2차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 3~4차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 5~6차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 7~8차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 9~10차시</span>차시명 텍스트</a></li>
                        </ul>
                    </li>
                    <li class="one-menu">
                        <a href="#" class="one-tit">4. 단원명</a>
                        <ul class="two-menu">
                            <li><a href="#"><span class="num">&#183; 1차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 2차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 3~4차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 5~6차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 7~8차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 9~10차시</span>차시명 텍스트</a></li>
                        </ul>
                    </li>
                    <li class="one-menu">
                        <a href="#" class="one-tit">5. 단원명</a>
                        <ul class="two-menu">
                            <li><a href="#"><span class="num">&#183; 1차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 2차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 3~4차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 5~6차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 7~8차시</span>차시명 텍스트</a></li>
                            <li><a href="#"><span class="num">&#183; 9~10차시</span>차시명 텍스트</a></li>
                        </ul>
                    </li>
                </ul>
                <? } elseif ($menu == 'general') { ?>
                <h4 class="side-title">범교과 콘텐츠</h4>
                <ul class="lnb">
                    <li class="fir-menu"><a href="#">안전 &#183; 건강 교육</a></li>
                    <li class="fir-menu"><a href="#">인성 교육</a></li>
                    <li class="fir-menu"><a href="#">진로 교육</a></li>
                    <li class="fir-menu"><a href="#">통일 &#183; 독도 교육</a></li>
                    <li class="fir-menu"><a href="#">창의 &#183; 과학 교육</a></li>
                    <li class="fir-menu"><a href="#">역사 &#183; 독서 교육</a></li>
                    <li class="fir-menu"><a href="#">경제 &#183; 금융 교육</a></li>
                    <li class="fir-menu"><a href="#">ESD 교육</a></li>
                    <li class="fir-menu"><a href="#">SW 교육</a></li>
                    <li class="fir-menu"><a href="#">미디어리터러시 교육</a></li>
                </ul>
                <? } elseif ($menu == 'issue') { ?>
                <h4 class="side-title">교육이슈 콘텐츠</h4>
                <ul class="lnb">
                    <li class="fir-menu"><a href="#">교수학습법</a></li>
                    <li class="fir-menu"><a href="#">학교 이슈</a></li>
                </ul>
                <? } elseif ($menu == 'month') { ?>
                <h4 class="side-title">월별 콘텐츠</h4>
                <ul class="lnb">
                    <li class="fir-menu"><a href="#">1월</a></li>
                    <li class="fir-menu"><a href="#">2월</a></li>
                    <li class="fir-menu"><a href="#">3월</a></li>
                    <li class="fir-menu"><a href="#">4월</a></li>
                    <li class="fir-menu"><a href="#">5월</a></li>
                    <li class="fir-menu"><a href="#">6월</a></li>
                    <li class="fir-menu"><a href="#">7월</a></li>
                    <li class="fir-menu"><a href="#">8월</a></li>
                    <li class="fir-menu"><a href="#">9월</a></li>
                    <li class="fir-menu"><a href="#">10월</a></li>
                    <li class="fir-menu"><a href="#">11월</a></li>
                    <li class="fir-menu"><a href="#">12월</a></li>
                </ul>
                <? } elseif ($menu == 'package') { ?>
                <h4 class="side-title">주제별 콘텐츠</h4>
                <ul class="lnb">
                   <li class="fir-menu"><a href="#">인기 패키지</a></li>
                   <li class="fir-menu"><a href="#">신규 패키지</a></li>
                </ul>
                <? } ?>
            </div>
            <div class="side_menu_bottom"></div>
        </div>