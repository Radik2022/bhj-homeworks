const openChat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatWidgetInput = document.getElementById('chat-widget__input');

openChat.addEventListener('click', () => {
  openChat.classList.add('chat-widget_active');
});

const botAnswers = [
    'Напишите в следующей жизни.', 
    'Не пишите нам больше.', 
    'Кто тут?', 
    'Добрый день! Досвидания!', 
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!'
];

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
      messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
        </div>
      `;
      chatWidgetInput.value = '';

      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
        </div>
      `;
    }
  });
