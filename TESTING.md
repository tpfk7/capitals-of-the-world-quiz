# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/#textarea) | ![screenshot](/documentation/testing/html/index.png) | No errors found |
| Game | [W3C](https://validator.w3.org/nu/#textarea) | ![screenshot](/documentation/testing/html/game.png) | Section lacks header h2-h6 warning |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.


| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator) | ![screenshot](/documentation/testing/css/css.png) | Pass: No Errors |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](/documentation/testing/js/script.png) | Unused variables |
| questions.js | ![screenshot](/documentation/testing/js/game.png) | Unused variables |


## Browser Compatibility

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](/documentation/testing/browsers/chrome.png) | Works as expected |
| Firefox | ![screenshot](/documentation/testing/browsers/firefox.png) | Works as expected |
| Safari | ![screenshot](/documentation/testing/browsers/Safari.png) | Works as expected |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Samsung Galaxy S9 (DevTools) | ![screenshot](/documentation/responsive/galaxys9.png) | Works as expected |
| Ipad(DevTools) | ![screenshot](/documentation/responsive/ipad.png) | Works as expected |
| Desktop | ![screenshot](/documentation/responsive/responsive-desktop.png) | Works as expected |
| Ipad pro (DevTools) | ![screenshot](/documentation/responsive/ipad-pro.png) | Works as expected |
| Iphone x(DevTools) | ![screenshot](/documentation/responsive/iphonex.png) | Works as expected |
| Samsung Galaxy A52 | ![screenshot](/documentation/responsive/samsunggalaxya52.jpg) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](/documentation/lighthouse/home-mobile.png) | No major warnings |
| Home | Desktop | ![screenshot](/documentation/lighthouse/home-desktop.png) | No major warnings  |
| Game | Mobile | ![screenshot](/documentation/lighthouse/question-mobile.png) | No major warnings  |
| Game | Desktop | ![screenshot](/documentation/lighthouse/continent-desktop.png) | No major warnings  |


## User Story Testing

| User Story | Screenshot |
| --- | --- |

| As a new site user, I would like to have a clear start button, so that I can easily choose to start the game when I am ready. | ![screenshot](/documentation/feature/start-button.png) |

| As a new site user, I would like to have clear buttons to select a continent, so that I can decide which set of countries I want to be tested on. | ![screenshot](/documentation/feature/continent.png) |

| As a new site user, I would like to have buttons for each answer, so that I can easily select what I believe to be the correct answer. | ![screenshot](/documentation/feature/question.png) |

| As a new site user, I would like to have the answers change colour when I select them, so that I can clearly see if I selected the right answer. | ![screenshot](/documentation/feature/question-color.png) |

| As a new site user, As a new site user, I would like to have a score counter at the bottom, so that I can keep track of the questions I got right. | ![screenshot](/documentation/feature/score-counter.png) |

| As a new site user, As a new site user, I would like to have a timer, so that I can challenge myself to answer as many questions as possible. | ![screenshot](/documentation/feature/timer.png) |

| As a new site user, As a new site user, I would like to have a home icon, so that I can return to the main menu at any point. | ![screenshot](/documentation/feature/restart.png) |

## Bugs

**Fixed Bugs**

- JS Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

    ![screenshot](/documentation/bug/bug.png)

    - To fix this, I I removed the <script src="assets/js/script.js"></script> scripts from the index.html file.

## Unfixed Bugs

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.
- The flag emojis taken from 'emojipedia' do not render correctly on windows machines. This is a known bug.
