var submit = document.getElementById('submitButton');
var fileButton = document.getElementById('fileButton');
var file;
fileButton.addEventListener('change', function(e){
  //get File
  file = e.target.files[0];
});



function submitClick() {
  //get the reference of the file location
  var storageRef = firebase.storage().ref('Images/' + file.name);
  //upload the image to the firebase storage
  var task = storageRef.put(file);
  storageRef.getDownloadURL().then(function(url) {
    document.querySelector('img').src = url;
  });
  console.log('upload finished');
}
