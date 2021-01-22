
const q = document.querySelectorAll('.question');
const a = document.querySelectorAll('.answer');

q.forEach((q) => q.addEventListener('click', function () {
  //1. if we click on a question and the answer next to it is open then:
  if (q.nextElementSibling.className === 'open'){
      //  1a. close the answer
        q.nextElementSibling.className = 'close';
        // 1b. remove the question style
        q.className = 'question';
      } 
      // 2. if we click on a question and the answer next to it is closed then:
      else {
        // 2a. Reset action: we close any answers that may already be open, and reset the styling of question connected to that answer
        a.forEach((a) => { a.className = 'answer close';
        a.previousElementSibling.className = 'question';})
        
        // 2b. we then open the answer linked to the question we clicked
        q.nextElementSibling.className = 'open';
        // 2c. we style that question
        q.className = 'question active';
      };
})); 
 

