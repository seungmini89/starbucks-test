  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api"; // 바꾸면 안됨
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() { //onYouTubeIframeAPIReady << 절대 바꾸면 안됨(위에 링크와)
    new YT.Player('player', {
      videoId: 'jW-QKemMdeg', //최초 재생할 유튜브 영상 id
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'jW-QKemMdeg' //반복 재생할 유튜브 영상 id 목록
      },
      events: {
        onReady: function (event) {
          event.target.mute() //음소거
        }
      }
    });
  }