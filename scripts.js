const q = document.querySelectorAll('.question');

q.forEach((q) => q.addEventListener('click', function () {
  if (this.nextElementSibling.className === 'open'){
    this.nextElementSibling.className = 'close';
    this.style.fontWeight = '';
  } else {
    this.nextElementSibling.className = 'open';
    q.style.fontWeight =  '900';
  }
}));