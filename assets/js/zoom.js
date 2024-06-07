document.querySelectorAll('.zoomable-image').forEach(function(image) {
    image.addEventListener('click', function() {
        var aspectRatio = this.naturalWidth / this.naturalHeight;
        if (aspectRatio >= 1) {
            // Landscape image
            this.classList.toggle('zoomed-landscape');
        } else {
            // Portrait image
            this.classList.toggle('zoomed-portrait');
        }
    });
});
