
# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers.

## Implemented Features

*   **UI:**
    *   A title "Lotto Number Generator".
    *   A heading "Lotto Number Generator".
    *   A button to generate numbers.
    *   A section to display the generated numbers.
*   **Functionality:**
    *   Clicking the button generates 6 unique random numbers between 1 and 45.
    *   The generated numbers are displayed on the screen.
*   **Styling:**
    *   Basic styling for the layout, button, and number display.

## Current Plan

*   **`index.html`:**
    *   Change the title and heading.
    *   Add a button with the ID `generate-btn`.
    *   Add a `div` with the ID `lotto-numbers` to display the numbers.
*   **`main.js`:**
    *   Create a function `generateNumbers`.
    *   The function will generate 6 unique random numbers from 1 to 45.
    *   An event listener will be added to the `generate-btn` to call `generateNumbers`.
    *   The generated numbers will be displayed in the `lotto-numbers` div.
*   **`style.css`:**
    *   Add styles for the body, container, button, and the number display.
