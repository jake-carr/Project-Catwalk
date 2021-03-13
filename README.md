# Project-Catwalk

Forever 32 is an E-commerce website that refactored an outdated retail portal provided by a contracted company. The implemented features modernize the user experience of customers browsing items in the retail catalog.

# Table of Contents
[Installation guide](https://github.com/Sarahs-Minions/Project-Catwalk/blob/testing/README.md#installation).
[Overview](https://github.com/Sarahs-Minions/Project-Catwalk/blob/testing/README.md#overview).
[Related items](https://github.com/Sarahs-Minions/Project-Catwalk/blob/testing/README.md#related-items).
[QA](https://github.com/Sarahs-Minions/Project-Catwalk/blob/testing/README.md#qa).
[Reviews](https://github.com/Sarahs-Minions/Project-Catwalk/blob/testing/README.md#reviews).
# Installation
We are using:

Node / NPM.
ES2015 (and beyond) support.
React 17.0.
axios.
express.


We use npm to handle dependencies.

```
npm install
```

## Production Build
```
npm run prod
```
## Development server
Run ```npm run start``` and navigate to ```http://localhost:3000/```

# Descriptions
This project is split into 4 componenets: Overview, Related items, QA, and Reviews

## Overview

This component guides the customer through selecting a specific style and size to add to their cart.
It displays the star rating, price/sale price, and the product's title, category, slogan & description.
Below the information, the user can use the circular thumbnails to select various styles for the product, one at a time.
Below the style selector, two dropdowns allow the user to select the size and quantity of the item/style to add to their cart.
The add to cart button is hidden if there's no stock, will prompt the user to select a size and open the size dropdown automatically if they click it with no size selected, and will add the product to the user cart if the selections are valid.
The image gallery displays photos specific to the currently selected style. The user can navigate the default view with either the arrow buttons or by clicking specific thumbnails on the left side.
When the main image is clicked, a fullscreen view of it will open up, with an X button to close it. On the fullscreen view the user can navigate with the arrow buttons and circular icons in the same way as the default view. Clicking the fullscreen view zooms the image 250%, and clicking it again returns to the 100% view.

## Related items

## QA

## Reviews
