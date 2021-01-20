
// ********************WORKING EXCEPT QUESTION STYLE 
const q = document.querySelectorAll('.question');
const a = document.querySelectorAll('.answer');

q.forEach((q) => q.addEventListener('click', function () {
  if (this.nextElementSibling.className === 'open'){
        this.nextElementSibling.className = 'close';
        this.className = 'question';
      
      } else {
        a.forEach((a) => { a.className = 'answer close';})
        q.nextElementSibling.className = 'open';
        q.forEach((q) => { q.className = 'question';})
        q.className = 'question active';
      };
})); 
 


 
