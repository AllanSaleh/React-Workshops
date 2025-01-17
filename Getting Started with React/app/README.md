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
