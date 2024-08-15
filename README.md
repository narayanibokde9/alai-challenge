# Alai Coding Challenge: TLDraw Timeline Implementation

Welcome to the Alai Coding Challenge! This project is set up with React, TypeScript, and TLDraw.

## Challenge Overview

Your task is to create a timeline component using TLDraw, similar to the one found on https://getalai.com/. You will also need to implement a user input feature to dynamically generate timeline elements.

## Tasks

1. Create a timeline element using TLDraw similar to what you can see on https://getalai.com/
   ![Timeline Example](./src/assets/timeline.png)

2. Add an input field where the user can enter desired number of items and a generate button. When the user clicks generate,
   then the timeline element should show that many number of elements.

## My Solution
![image](https://github.com/user-attachments/assets/1240359a-1f46-4485-997f-864ebb542aad)

1. Taking input from the input box, each line defining either the heading or the description of the event.
2. For the timeline, understanding how to create the entire diagram with the help of elements like text boxes, lines and ellipses.
3. Each text box handles one event (heading + description); there's a skeleton line over which ellipses as many as the events are placed, and smaller lines perpendicular to the skeleton.

### How does it work?
1. Input your events in this format
   <pre>
   Subheading 1
   Description 1
   Subheading 2
   Description 2
   Subheading 3
   Description 3
   Subheading 4
   Description 4
   </pre>
2. Click on generate button.


## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)
