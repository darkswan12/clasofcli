function checkAnswer(id) {
    const question = document.getElementById(id);
    const options = question.querySelectorAll('input[type="radio"]');
    const feedback = question.querySelector('.feedback');
    
    let selected = null;
    options.forEach(option => {
      if (option.checked) selected = option;
    });

    if (!selected) {
      feedback.textContent = 'Silakan pilih salah satu jawaban terlebih dahulu.';
      feedback.style.color = 'orange';
    } else if (selected.value === 'correct') {
      feedback.textContent = 'Jawaban benar! 🎉';
      feedback.style.color = 'green';
    } else {
      feedback.textContent = 'Jawaban salah. Coba lagi ya!';
      feedback.style.color = 'red';
    }
  }