# Frontend Mentor - Tip calculator app solution

This is my solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). I took this challenge on to push myself to learn the frontend skills required to make an app look as good as I could make them functionally work.
The second part of challanging myself was to write the projet in native javascript ratehr than a REACT.js project.  I did this beacuse I felt like i was forgetting some of teh basics i had been taught earlier in my course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)
⏰⏰ADD mobile and Desktop images


### Links

⏰- Solution URL: [Add solution URL here](https://github.com/ChrisKnowles53/CJK_TipCalc_Frontend_Mentor)
⏰- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- native javascript
- Mobile-first workflow

The first thing I did was look at the desired mobile view and put boxes around the items I thought needed to be grouped together.  I then compared this to the desltop version to make sure the boxes I had created were transferable to the desktop design.
I then coded the HTML file so it contained all the necesary text and images.  I endeavoured to create all the neccessary <div> with class names to enable me to style the page accordingly.  I had to revist this during the styling to add extra <div> and to change class names where I realised I could re-use a class to avoid duplicate styling.
I then started to created the CSS styling using a live sever of the page so I could see the changes.  I also used border boxes around the containers so I could see exactly what elements were in the containers.  I  found this first part of the styling tricky as I got to grips with flexbox and how it interacted with the elements, due to this I took a break from styling and wrote the javascript file.
The javascript was tackled in a plan it first and build the code in managable sections that were easily manually tested.  Once I had the basic functionality I then started to add the event listeners so that when the inputs were changed the calculations updated automatically.  This made me realise that the end user could have issues if they didnt enter the correct infomration.  To give the end user the best experience I limited the inputs to numbers and added an error message that pops up if the user deletes the number of people.  After this I went back to fnish the styling.
The main focus was to get the mobile version completed which I took some advice from a mentor to get it working properly.  I had used margin and padding to position elements in places where I didnt need to if I used Flexbox correctly.  I then tackled the desktop version where I used the @media query to change the layout, I did this intially by havnig an @media query at the end of my CSS.  After discussing this and taking onboard some advice I refactored the CSS code so the @media query is in each CSS element so you dont have to scroll up and down to see what is changing in the class and media query.

### What I learned
⏰
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments
⏰add Matt
This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
