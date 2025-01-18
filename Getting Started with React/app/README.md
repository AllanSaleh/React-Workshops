# React State

## What is State?

- Define state as a way to store and manage dynamic data in a React Component

## Why State Matters

- Drives the User Interface (Toggling a menu, form handling)

## Key Characteristics of State:

- Local to a component
- Can trigger re-render when updated

## Basic Syntax

const [state, setState] = useState(initialValue);

## Updating State

- Asynchronous (takes time)
- Updating State with a static value: setState(newValue)
- Updating State depending on the previous value: setState(prevState => prevState + 1)

# Props

## Key Points about Props:

Props are inputs for components.
A parent component sends props to a child component to tell it what to display.

Props are read-only.
Once you pass props to a child component, the child cannot change them. It can only use them.

Props can be anything.
Props can include strings, numbers, objects, functions, or even other components.