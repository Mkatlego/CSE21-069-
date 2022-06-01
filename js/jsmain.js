  //Show video
  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let hisvideo = document.querySelector("#hisvideo");
  let closebtn = document.querySelector(".close-video");


  playButton.onclick= () => {
    video.classList.add("show-video");

    hisvideo.play();
  };
  
  closebtn.onclick= () => {
    video.classList.remove("show-video");

    hisvideo.pause();
  };
