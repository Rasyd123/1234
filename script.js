document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil file foto
    const photoFile = document.getElementById('photoUpload').files[0];
    const photoUrl = URL.createObjectURL(photoFile);
    document.getElementById('uploadedImg').src = photoUrl;

    // Ambil file audio
    const audioFile = document.getElementById('audioUpload').files[0];
    const audioUrl = URL.createObjectURL(audioFile);
    const audioElement = document.getElementById('uploadedAudio');
    audioElement.src = audioUrl;
    audioElement.style.display = 'block';
});
