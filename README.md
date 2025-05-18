# Quest Formulário em JavaScript

A responsive contact form project built with HTML, CSS, and JavaScript in DevQuest - Dev em Dobro course as a challenge.

## Features

- Responsive layout for different screen sizes.
- Custom background and modern design.
- Form fields: Full Name, Email, Phone, and Message.
- Required field validation with visual feedback.
- Error messages for empty required fields.
- Success indication for filled fields.

## How It Works

- The form is located in [index.html](index.html).
- Styles are managed in [src/css/style.css](src/css/style.css), [src/css/responsive.css](src/css/responsive.css), and [src/css/reset.css](src/css/reset.css).
- The validation logic is implemented in [src/js/index.js](src/js/index.js).
- When the "Enviar" (Send) button is clicked, each field is checked:
  - If a field is empty, it gets a red border and an error message appears.
  - If a field is filled, it gets a green border and the error message is hidden.
