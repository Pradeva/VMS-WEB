function generateVideos(path) {
  fetch(`/getVideo/${path}`)
  .then(response => response.json())
  .then(videoFiles => {
    const videoContainer = document.getElementById(`videoContainer${path}`);

    videoContainer.innerHTML = "";

    videoFiles.forEach((videoFile, index) => {
      
      setTimeout(() => {
      const videoElement = document.createElement("video");
      videoElement.src = `http://10.168.1.22:7878/static/video/NVRJS_CAMERA_RECORDINGS/${path}/${videoFile}`; 
      videoElement.type = "video/mp4";
      videoElement.height = 150;
      videoElement.width = 300;
      videoElement.style.display = "inline-block";
      videoElement.controls = true; 

      const videoTitle = document.createElement("div");
      videoTitle.textContent = videoFile;
      videoTitle.style.color = "white";
      videoTitle.style.fontWeight = 600;

      const videoTitleContainer = document.createElement("div");
      videoTitleContainer.style.backgroundColor = '#576CBC';
      videoTitleContainer.style.width = "300px";
      videoTitleContainer.style.height = "30px";
      videoTitleContainer.style.borderTopRightRadius = "5px";
      videoTitleContainer.style.borderTopLeftRadius = "5px";
      videoTitleContainer.style.display = "flex";
      videoTitleContainer.style.justifyContent = "center";
      videoTitleContainer.style.alignItems = "center";
      videoTitleContainer.appendChild(videoTitle);

      const videoElementContainer = document.createElement("div");
      videoElementContainer.style.height = "160px";
      videoElementContainer.style.width = "300px";
      videoElementContainer.style.backgroundColor = "white";
      videoElementContainer.style.borderBottomRightRadius = "5px";
      videoElementContainer.style.borderBottomLeftRadius = "5px";
      videoElementContainer.style.display = "flex";
      videoElementContainer.style.justifyContent = "center";
      videoElementContainer.style.alignItems = "center";
      videoElementContainer.appendChild(videoElement);


      const selfContainer = document.createElement("div");
      selfContainer.style.marginRight = "10px";
      selfContainer.appendChild(videoTitleContainer);
      selfContainer.appendChild(videoElementContainer);

      videoContainer.appendChild(selfContainer);
      }, index * 1000);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}