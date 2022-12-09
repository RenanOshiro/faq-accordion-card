const questions = document.querySelectorAll('.question');

questions.forEach((q) => {
  q.addEventListener('click', (e) => {
    const opened = document.querySelector('.answer.max-h-14');
    const answer = e.target.closest('.question').nextElementSibling;
    const arrow = e.target.nextElementSibling;
    if (answer.classList.contains('max-h-14') === false) {
      if (opened) {
        hideAnswer(opened);
      }
      showAnswer(answer, e, arrow);
    } else if (opened !== null) {
      hideAnswer(opened);
    }
  });
});

function hideAnswer(opened) {
  opened.classList.remove('max-h-14');
  opened.classList.add('max-h-0');
  opened.classList.remove('mb-5');
  document.querySelector('.question.font-bold').classList.remove('font-bold');
  document.querySelector('.rotate-180').classList.remove('rotate-180');
}

function showAnswer(answer, e, arrow) {
  answer.classList.add('max-h-14');
  answer.classList.remove('max-h-0');
  answer.classList.add('mb-5');
  e.target.closest('.question').classList.add('font-bold');
  arrow.classList.add('rotate-180');
}
