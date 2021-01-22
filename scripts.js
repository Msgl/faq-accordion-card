
const q = document.querySelectorAll('.question');
const a = document.querySelectorAll('.answer');

q.forEach((q) => q.addEventListener('click', function () {
  if (q.nextElementSibling.className === 'open'){
       
        q.nextElementSibling.className = 'close';
        q.className = 'question';
      } else {
        a.forEach((a) => { a.className = 'answer close';
        a.previousElementSibling.className = 'question';})
        
        q.nextElementSibling.className = 'open';
        q.className = 'question active';
      };
})); 
 

