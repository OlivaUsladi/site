function sendMessageToTelegram() {
  // Получаем данные из формы
  let message = document.getElementById("message").value;

  // Создаем объект для отправки данных через метод POST
  let request = new XMLHttpRequest();
  let url = "https://api.telegram.org/bot6070616607:AAG4XrI9TYG8PzcmLlLUZq96Ahnh1SFTGVM/sendMessage";

  // Указываем параметры запроса
  let params = `chat_id={@rmstorebottest}&text=${message}`;
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Обрабатываем ответ сервера
  request.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      console.log('Сообщение отправлено!');
    }
  }

  // Отправляем запрос на сервер
  request.send(params);
}