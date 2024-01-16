const formHtml = `<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`;

document.body.style.backgroundColor = 'lightgray';
document
  .querySelector('.main-section')
  .insertAdjacentHTML('beforeend', formHtml);

const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let feedbackObject = { email: '', message: '' };

// читаємо дані і заповнюємо поля
const storageValue = localStorage.getItem(storageKey);
if (storageValue !== null && storageValue !== '') {
  try {
    feedbackObject = JSON.parse(storageValue);

    for (const fieldName in feedbackObject) {
      formEl.elements[fieldName].value = feedbackObject[fieldName];
    }
  } catch {}
}

// слухач інпут
formEl.addEventListener('input', event => {
  const nodeName = event.target.nodeName;
  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    for (const fieldName in feedbackObject) {
      feedbackObject[fieldName] = formEl.elements[fieldName].value.trim();
    }

    localStorage.setItem(storageKey, JSON.stringify(feedbackObject));
  }
});

// слухач submit
formEl.addEventListener('submit', event => {
  event.preventDefault();

  for (const fieldName in feedbackObject) {
    if (!formEl.elements[fieldName].value) {
      alert('All field must be filled!');
      return;
    }
  }

  for (const fieldName in feedbackObject) {
    formEl.elements[fieldName].value = '';
  }

  localStorage.removeItem(storageKey);

  console.dir(feedbackObject);
});
