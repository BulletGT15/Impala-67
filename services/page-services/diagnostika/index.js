document.querySelector('form').onsubmit = function() {
    return confirm('Вы действительно хотите отправить заявку?');
  };