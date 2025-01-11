window.addEventListener('load', function() {
    // 定义本地图片路径
    const images = [
      '/images/top_img1.jpeg',
      '/images/top_img2.jpeg',
      '/images/top_img3.jpeg'
    ];
  
    // 随机选择一张图片
    const randomImage = images[Math.floor(Math.random() * images.length)];
  
    // 设置背景图片
    document.body.style.backgroundImage = `url(${randomImage})`;
  
    // 如果你想设置 footer 背景
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.backgroundImage = `url(${randomImage})`;
    }
  });
  