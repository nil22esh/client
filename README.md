## Demo

[Watch Demo Video](https://vimeo.com/1042216846?share=copy)

---

# Blogging App

A simple blogging application built using React. Users can write, view, and delete blogs in an intuitive user interface. The application leverages React Hooks for state management and DOM interactions.

---

## Features

- **Add Blogs**: Users can create blogs by entering a title and content.
- **View Blogs**: All added blogs are displayed below the form.
- **Delete Blogs**: Users can remove blogs from the list.
- **Auto-Focus**: The title input field automatically gains focus upon loading the page or after submitting a blog.
- **Dynamic Document Title**: The document title dynamically updates to the latest blog title or "No Blog!!" when there are no blogs.

---

## Demo

![INITIAL RENDER](./public/images/Screenshot%202024-12-26%20111306.png)

---

## Tech Stack

- **Frontend**: React (with Hooks)

---

## Installation

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blogging-app.git
   cd blogging-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```plaintext
blogging-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Blog.js
│   │   └── Row.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

---

## Components

### `Blog.js`

- Handles the main blogging functionality, including form submission, state management, and blog list rendering.

### `Row.js`

- A reusable component to create labeled rows in the form.

---

## Usage

1. Enter a blog title and content in the respective fields.
2. Click the **ADD** button to save the blog.
3. View your blogs in the list below the form.
4. Delete a blog by clicking the **DELETE** button.

---

## Features in Code

### Auto-Focus

The title input field gains focus automatically using the `useRef` and `useEffect` hooks:

```javascript
useEffect(() => {
  titleRef.current.focus();
}, []);
```

### Dynamic Document Title

The document title updates dynamically based on the latest blog or defaults to "No Blog!!":

```javascript
useEffect(() => {
  if (blogs.length && blogs[0].title) {
    document.title = blogs[0].title;
  } else {
    document.title = "No Blog!!";
  }
});
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
