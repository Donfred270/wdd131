document.addEventListener('DOMContentLoaded', function() {

    const thumbnails = document.querySelectorAll('.thumbnails img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const mainImage = document.getElementById('main-product-image');
            mainImage.src = this.src;
            
            // translation animation
            mainImage.style.transition = 'opacity 0.2s ease-in-out';
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.style.opacity = 1;
            }, 100);
            
            
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
           
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            

            const images = JSON.parse(this.getAttribute('data-images'));
            
        
            const mainImage = document.getElementById('main-product-image');
            mainImage.src = images[0];
            
            const thumbnails = document.querySelectorAll('.thumbnails img');
            thumbnails.forEach((thumb, index) => {
                thumb.src = images[index];
                thumb.classList.remove('active');
            });
            
            thumbnails[0].classList.add('active');
            

            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.style.opacity = 1;
            }, 100);
        });
    });


    if (colorOptions.length > 0) {
        colorOptions[0].click(); 
    }
});