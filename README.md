## How to solve this challenge?

**NOTE: this is the second step of the [Level up: HTML + CSS](https://classroom.github.com/a/djdDxAZg) challenge. Make sure taht you have solved it first.**

1. Clone this repository.
2. Read the "Challenge description" below in order to understand the challenge as a whole.
3. Visit [Actions](../../actions) page in your repo and check the last workflow.
    - At the beggining you should see 5 tests passing and 43 failing.
    - Please watch the [How to use the auto-grading tests output?](https://www.loom.com/share/09cdd07df00a4a82a6e38759ef0b1751) video.
    - If you cannot see any auto-grading workflows on the  [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
4. Address each requirement one by one:
    - Make required changes to the:
       - [styles.css](./styles.css) file.
       - [index.html](./index.html) file.
       - [challenge.js](./challenge.js) file.
    - Open the [index.html](./index.html) in your browser in order to check the result of your changes.
    - Commit your changes after each step.
    - Push your commit to the GitHub repo after each step.
    - Wait for the result of the "GitHub Classroom Workflow" action:
     - After completing each step you should see more tests passing.
     - **Once every requirement is fulfilled - congratulations, you solved this challenge!**


## Challenge description



1. Copy your code from the [Level up: HTML + CSS](https://classroom.github.com/a/djdDxAZg) challenge and paste it in the:
    - [styles.css](./styles.css) file.
    - [index.html](./index.html) file.
2. After completing the previous step you should see 41 tests passing and 7 failing.
3. Add `challenge.js` as an external script for the `index.html` file (put it inside the <head> tag).
4. In the `challenge.js` file:
    - 4.1. Implement the function called `findAllUnorderedListElements`:
        - It takes no arguments.
        - It returns all unordered list's items (the ones that include links to Facebook, Instagram, and Twitter). They should be [NodeList objects](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) that are returned by function [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or  [`querySElectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll). Common mistake hint: we do **not** look only for the inner text of those items, we need [NodeList objects](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).
    - 4.2 Implement the function called `addWavyUnderline`:
        - It takes elements as an argument. Elements should be [NodeList objects](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) that are returned by function [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) or  [`querySElectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).
        - It iterates through `elements` and adds a style that makes text decoration `wavy underline`.
5. Observe that the `addWavyUnderline` function is called in the `DOMContentLoaded` event and takes the result of the `findAllUnorderedListElements` function. Thanks to that once your index.html page is loaded the unordered list's links should get a new style. Verify it in your browser.
6. In the `challenge.js` file:
    - 6.1. Implement the function called `prepareProjects`:
        - It takes 3 arguments - `firstProject`, `secondProject`, `thirdProject`
        - It declares an array with a list of projects from the params.
        - It iterates through the array with projects and for each project it:
            - Checks if the number of chars is **bigger than 20**:
                - If it is it creates a string with the project's name enclosed in the `<p>` tag.
                - If it is NOT it creates a string with the project's name enclosed in the `<span>` tag.
            - It adds a `<br>` tag after each project.
        - It returns a long string with projects enclosed in the `<p>` or `<span>` tags.
    - 6.2 Implement the function called `displayProjects`:
        - It finds a div with id = `projects`.
        - It injects the output of the function `prepareProjects` called with the arguments selected by you into that div.
    - 6.3. Call the `displayProjects` function in the `DOMContentLoaded` event.
7. Verify if projects were added to the correct div in your browser.
8. Please keep in mind:
    - `findAllUnorderedListElements` and `prepareProjects` functions should **not** change any DOM elements, i.e. they should not interact with the content of your website.
    - `addWavyUnderline` and `displayProjects` functions are supposed to to change DOM elements.
    
### Troubleshooting
    
If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).

