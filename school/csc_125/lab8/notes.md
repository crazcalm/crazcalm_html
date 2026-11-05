# Lab 8

Build an interactve single-page System Service Registry & Theme Dashboard.

## Overview

You have been hired by an enterprise infrustructure team to create a management dashboard prototype. The dashboard needs to feature two interactive panels.

### Theme Switcher Panel

An Interactive UI box that allows users to toggle between Light and Dark diplay mode cleanly using professional addEventListener() bindings and classList.toggle().

### Dynamic service Registry

A data-driven module list that stores system services in an array and automatically lops thorugh the using .forEach() to render interactive list items with statu badges into the DOM.

## "Detailed Implementation guide":

### Header Section:

- [ ] A navigation bar or header displaying "DevPortal|Intermediate JS Lab"

### Card 1: Theme Switcher Card:

- [ ] A styled text box container with an `id=theme-box`
- [ ] A toggle button with an `id="toggle-btn"`

### Card 2: Dynamic Service Registry Card:

- [ ] A card header displaying "Active System Modules"
- [ ] An empty unordered list container with an `id="module-list"` and the Bootstrap class list-group. (I assume this is the list of the them related classes...)

### Javacript Implementation Instructions

#### Modern event listener logic

- [ ] document.querySelector
- [ ] addEventListener('click') handler to manage class toggling (bg-dark, text-white, border-dark) and button text updates safely.

#### Array Definition & Console Diagnostics

- [ ] Declare an array named systemModules containing at last 4 string names (These are the services in Card 2, i think).
- [ ] Output diagnostic information to the console using conole.log()

#### Dynamic DOM Rendering Logic

- [ ] Select the list container (#module-list) using document.querySelector
- [ ] Use .forEach to iterate through the `systemModules` array.
- [ ] Inside the loop, create new <li> elements using document.createElement, apply Bootstrap layout classes, inject structured HTML via template literal containing `badges` (I think this is a boostrap things...), and append them using appendChild.

## Thoughts:

- [x] I should look up how theming is actually done with bootstrap as a reference
- [x] Go over the docs for adding HTML Document Fragments.
- [x] Figure out what the `badges` thing is about. I was not paying attention in class when he talked about it.

### Theme switcher example

This may be an overly simplified example, but they toggle a single class for the theme (a button and a classList.toggle call)

https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

### Badge docs

Its just a span with some Bootstrap classes

https://getbootstrap.com/docs/5.3/components/badge/

### Document Fragement example

These docs are actually an example of how annoying it is to write everything out yourself and why you should use a framework, but they do go through the steps of building a TODO app from scartch with vanilla JS.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction

## Thoughts on implementation Phases

- [ ] html document with 2 cards and bootstrap grid working for mobile and dektop layouts

Note: Do Card 2 first because the Theme toggle is suppose to affect the Card two items

- [ ] Write the code to fill in the "systemModules" to fill out the html along with spans for the "badges"

- [ ] Create the Theme toggle button and figure out how I want to "cascade" the them classes (I am really torn about whether or not I want a Theme class that requires all the component classes to register and then the class has methods for applying and switching themes.)
