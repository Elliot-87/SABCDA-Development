//Hero-FallBack
document.addEventListener('DOMContentLoaded', function() {
  // Check video support and fallback to image if needed
  const heroVideo = document.querySelector('.hero-background-container video');
  
  if(heroVideo) {
    // Check if video can play (handles mobile restrictions)
    const videoPromise = heroVideo.play();
    
    if (videoPromise !== undefined) {
      videoPromise.catch(error => {
        // Autoplay failed - show fallback image
        console.log('Video autoplay prevented, falling back to image');
        const fallbackImg = heroVideo.querySelector('img');
        if(fallbackImg) {
          heroVideo.style.display = 'none';
          fallbackImg.style.display = 'block';
        }
      });
    }
    
    // Fallback if video fails to load
    heroVideo.addEventListener('error', function() {
      console.log('VidGIT eo failed to load, falling back to image');
      const fallbackImg = this.querySelector('img');
      if(fallbackImg) {
        this.style.display = 'none';
        fallbackImg.style.display = 'block';
      }
    });
  }
  
  // Mobile height adjustment
  function adjustHeroHeight() {
    const hero = document.querySelector('.hero-background-container');
    if(hero && window.innerWidth < 640) {
      hero.style.height = `${window.innerHeight * 0.9}px`;
    }
  }
  
  // Initial adjustment
  adjustHeroHeight();
  
  // Adjust on resize
  window.addEventListener('resize', adjustHeroHeight);
});