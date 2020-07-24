watermark(['image/logo.png'])
    .image(watermark.image.lowerRight(0.5)) // Or lowerRight() for no opacity
    .then(function (img) {
        document.getElementById('alpha-image').appendChild(img);
    });