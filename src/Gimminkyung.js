<>
<nav className="nav_bar">
  <div className="nav_left">
    <img src="../img/instagram.png" alt="instagramLogoImg" />
    <div className="insta_border">
      <p>instagram</p>
    </div>
  </div>
  <div className="nav_middle">
    <input type="text" placeholder="검색" />

    <i className="fa-solid fa-magnifying-glass"></i>
  </div>
  <div className="nav_right">
    <i className="fa-regular fa-heart"></i>
    <i className="fa-regular fa-compass"></i>
    <i className="fa-regular fa-user"></i>
  </div>
</nav>
</>
<!--피드 구역-->
<div className="feed_container">
  <!--피드-->
  <div className="feed">
    <!--피드 탑-->
    <div className="feed_top">
      <div className="feed_top_left">
        <div className="feed_img">
          <img src="../img/me.JPG" alt="me1" />
        </div>
        <div className="feed_id">
          <span className="font-bold">minngaeng</span>
        </div>
      </div>

      <div className="feed_top_right">
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </div>
    <!--피드 메인 이미지 -->
    <div className="feed_main_img">
      <img src="../img/photo.PNG" alt="" />
    </div>
    <!--좋아요 댓글 저장하기 -->
    <div className="feed_menu">
      <div className="feed_menu_left">
        <i className="fa-regular fa-heart"></i>
        <img src="../img/chat.png" alt="" />
        <i className="fa-regular fa-share-from-square"></i>
      </div>
      <div className="feed_menu_right">
        <img src="../img/save-instagram.png" alt="" />
      </div>
    </div>
    <!--외 몇 명이 좋아합니다.-->
    <div className="feed_text">
      <img className="like_img" src="../img/pingu.JPG" alt="" />
      <span className="font-bold">sora_amazon</span
      ><span>님 외 몇 명이 좋아합니다.</span>
    </div>
    <!--피드 코멘트-->
    <div className="writing">
      <div className="writing_text_div">
        <span className="font-bold">minngaeng</span>
        <span>크리스마스🐶</span>
      </div>
      <div className="writing_text_more">
        <span className="more_text">더 보기</span>
      </div>
    </div>
    <!--댓글 창-->
    <ul id="ul" className="comment_ul type_cmt">
      <li>
        <span className="font-bold">sr_amazon</span>
        <span>헤헷 내년에도 함께해! 🥰</span>
      </li>
    </ul>
    <!--3분 전-->
    <div className="text_tme">
      <span>3 분전</span>
    </div>
    <!--댓글 input-->
    <div className="comment_input_container">
      <div className="comment_input_width">
        <input
          id="input"
          className="comment_input"
          type="text"
          placeholder="댓글 달기..."
        />
      </div>

      <!--댓글 게시 버튼 -->
      <div className="comment_btn_container">
        <button id="button" type="button" className="comment_btn">게시</button>
      </div>
    </div>
  </div>
  <!--right article 1st div-->
  <div className="feed_right_article">
    <div className="right_article_img_id_wrapper">
      <div className="right_article_img_container">
        <img className="right_article_img" src="../img/me2.JPG" alt="" />
      </div>
      <div className="right_id_container">
        <span id="me" className="font-bold right_id">minngaeng_amazon</span>
        <p>김민경</p>
      </div>
    </div>
    <!--right article 2nd div-->
    <div className="second_story_div">
      <div className="wrapper">
        <span>스토리</span>

        <div className="right_img_id_wrapper">
          <div className="right_article_img_container">
            <img className="right_article_img" src="../img/me2.JPG" alt="" />
          </div>
          <div className="right_id_container">
            <span className="font-bold right_id">minngaeng_amazon</span>
            <p>16분 전</p>
          </div>
        </div>
        <div className="second_wrapper">
          <div className="right_img_id_wrapper">
            <div className="right_article_img_container">
              <img className="right_article_img" src="../img/me2.JPG" alt="" />
            </div>
            <div className="right_id_container">
              <span id="me" className="font-bold right_id"
                >minngaeng_amazon</span
              >
              <p>16분 전</p>
            </div>
          </div>
        </div>
      </div>

      <div className="view_all">
        <span>모두 보기</span>
      </div>
    </div>
    <!--right article 3rd div-->
    <div className="second_story_div">
      <div className="wrapper">
        <span>회원님을 위한 추천</span>

        <div className="right_img_id_wrapper">
          <div className="right_article_img_container">
            <img className="right_article_img" src="../img/me2.JPG" alt="" />
          </div>
          <div className="right_id_container">
            <span className="font-bold right_id">minngaeng_amazon</span>
            <p>회원님을 팔로우 합니다.</p>
          </div>
          <span className="right_article_follow">팔로우</span>
        </div>
        <div className="right_img_id_wrapper">
          <div className="right_article_img_container">
            <img className="right_article_img" src="../img/me2.JPG" alt="" />
          </div>
          <div className="right_id_container">
            <span className="font-bold right_id">minngaeng_amazon</span>
            <p>회원님을 팔로우 합니다.</p>
          </div>
          <span className="right_article_follow">팔로우</span>
        </div>
      </div>

      <div className="view_all">
        <span>모두 보기</span>
      </div>
    </div>
  </div>
</div>

