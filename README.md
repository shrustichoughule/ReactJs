# ReactJS practice


# parcel
- It  create dev build
- Also create local server
- HMR =  Hot Module Replacement
- File Watching Algorithm -  written in C++
- Caching - Faster builds.
- Image Optimization

# npx parcel index.html
# npx parcel build index.html
# npm start = npm run start

# React Element 

- h1 element - attributes(id,..) - children(u cn give name)
=> const heading = React.createElement("h1",  {id: "heading"}, "Namaste React")
- It is React element an Object when u render it to  DOM then becomes HTML element  React.createElement => Object => HTMLElement(render)

# ReactDOM.createRoot(document.getElementById("root")); 
- whatever will happen in react it will inside root. 
- if we want to render something it  will happen inside root.


# what React.createElement do?
- It will create JS Object.


# DOM 
- Elements are html elements.

# JSX 
- Javascript syntax  to create react element.
- JSX like HTML or XML syntax.
- JSX => transpiled/convert to React.createElement => ReactElement -JS Object then rendered to HTMLElement(DOM)


# Javascript understands EcmaScript language
- JSX code is transpiled before it reaches the JS Engine (Parcel alone is not transpiling the code, Babel is transpiling/converting the code). 
- Babel takes the  code and convert  it into which browsers/React/JS Engine understands 
- parcel installed babel.

# Babel 
-javascipt compiler/transpiler.
- It is nothing but it connvert the JSX to react code which browser understands.
- Babel is converting JSX code.=> React element.
- Babel transpile the Es6 (newer versionn of js) to a older browser understands.
