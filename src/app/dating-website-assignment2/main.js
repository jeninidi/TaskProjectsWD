document.querySelector('#imgFile').addEventListener('change', function(){
    // gets first selected file
    const file = this.files[0];

    // Using FileReader to display the image content
    const reader = new FileReader();
    reader.onload = function(e) {
        document.querySelector('#preview').src = e.target.result;
    };
   reader.readAsDataURL(file);

}, false);

