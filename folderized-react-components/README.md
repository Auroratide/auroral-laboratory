# Folderized React Components

See the **[Folderized React Components](https://auroratide.com/posts/folderized-react-components)** article for more details.

This project demonstrates one way of packaging React components into folders. A React component can be composed of the following files and possibly more:

* A presentational component (for structure)
* Styling (for look and feel)
* A state container (for interactive behaviour)
* Some subcomponents (to break down complex structures)

Rather than put these different files into different folders, separate from one another, we can "folderize" the component and put them all into the same folder.

```
/ComponentName
  component.jsx (the presentational component)
  style.css (the styling)
  container.jsx (the state container)
  index.js (the component's entrypoint)
  /SubComponent (any subcompoents as folders)
    component.jsx
    index.js
```

## Running the App

To run the app:

1. Run `npm install` to install dependencies
2. Run `npm start` to turn on the app
3. Go to `http://localhost:5000` to view
