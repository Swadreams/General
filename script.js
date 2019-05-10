(function(){
    var carousel = {
        init: {
            slideIndex : 1
        },

        beginShow: function(){
            this.showSlide(1);
            document.getElementById('prevBtn').addEventListener('click', function(){
                carousel.prevSlide(-1);
            });
            document.getElementById('nextBtn').addEventListener('click', function(){
                carousel.nextSlide(1)
            });
        },

        prevSlide : function(index) {
            this.showSlide(this.init.slideIndex -= index);
        },

        nextSlide : function(index) {
            this.showSlide(this.init.slideIndex += index);
        },

        showSlide : function(index) {
            var i;
            var slides = document.getElementsByClassName('slide');

            var slideIndex = this.init.slideIndex;
            if(index > slides.length) {
               // this.init.slideIndex = 1;
               slideIndex = 1;
            }

            if(index < 1) {
                //this.init.slideIndex = slides.length;
                slideIndex = slides.length;
            }

            for(i=0; i < slides.length; i++) {
                // slides[i].style.display = "none";
                slides[i].querySelector('.slide-text').classList.remove('swapnil');                
                slides[i].querySelector('.slide-text').classList.remove('linpaws');                
            }

            //slides[slideIndex - 1].style.display = 'flex';
            slides[slideIndex].querySelector('.slide-text').classList.add('linpaws');
            slides[slideIndex - 1].querySelector('.slide-text').classList.add('swapnil');
            this.init.slideIndex = slideIndex;
        }
    }
    carousel.beginShow();
})(window.carousel);