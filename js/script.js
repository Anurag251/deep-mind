// const readURL = (file) => {
//   if (file.files && file.files[0]) {
//     const reader = new FileReader();
//     const tmppath = URL.createObjectURL(event.target.files[0]);

//     reader.onload = (e) => {
//       const pdfHolder = document.querySelector('#pdfHolder');
//       const img = document.querySelector('#pdfHolder a');

//       pdfHolder.setAttribute('data', tmppath);
//       img.setAttribute('href', tmppath);
//     };
//     reader.readAsDataURL(file.files[0]);
//   }
// };

const dropArea = document.querySelector('.drop-area');
dragText = dropArea.querySelector('#name');
button = dropArea.querySelector('#button');
input = dropArea.querySelector('#input');
let file;

button.onclick = () => {
  input.click();
};

input.addEventListener('change', function () {
  file = this.files[0];
  showFile();
  dropArea.classList.add('active');
});

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  dragText.textContent = 'Release to Upload File';
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('active');
  dragText.textContent = 'Drag & Drop to Upload File';
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.add('active');
  file = event.dataTransfer.files[0];
  showFile();
});

const showFile = () => {
  let fileType = file.type;
  let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileUrl = fileReader.result;

      let pdfTaf = `<img src="${fileUrl}" alt="">`;
      dropArea.innerHTML = pdfTaf;
    };
    fileReader.readAsDataURL(file);
  } else {
    alert('This is not image file!');
    dropArea.classList.remove('active');
  }
};
