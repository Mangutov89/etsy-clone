# CloneSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Project Documentation

8am - 9:30am:
general setup,
deciding on a website to clone (etsy store page),
writing up user stories,
testing the real websites functionality

9:30am - 9:45am:
add more stories,
add components list/diagram,

9:45am - 10:45am:
testing with Angular cli and components

10:45am - 12:00pm:
more testing
additional research on Angular

12:00pm - 1:00pm:
lunch

1:00pm - 2:00pm:
further testing and implementation

2:00pm - 3:00pm:
implementing and reworking to-do list code

3:00pm - 4:00pm:
refactoring item display code

4:00pm - 5:00pm:
bug fixing item display code

8:00am - 8:30am:
reading assignment goals and code from previous Friday

## Notes

Etsy lists a certain amount of items to the customer, with a show all button at the bottom, this button takes the user to a new page that lists store items with page navigation below the listed items. Why make this a separate page and not just have the navigation on the main page in place of the 'show all' button?


## User Stories


Clone the etsy shop page.

as a user and a customer, I want a list of the stores items
if I reach the bottom of the page, and there are more items on the shop, I want to be able to list those items
if I click a store item, I want to see more information about that item displayed on the page, such as a description, options for the item (sizing, color) if any
if I decide to buy an item, I want to be able to define how many of the item to buy
I want to be able to sort the items by price (low to high, high to low), newest, and 'featured'
if I have a problem with the store, I want to be able to contact the stores owner
I want to be able to rate an item that I purchased and leave a review
if I really like this shop, I want to be able to favorite it
if I really dislike a shop, I want to be able to report it
I want to see a version of the store that only lists the items on sale


as a user and a store owner, I want to be able to list my items on my store
I want to be able to edit the information related to my item such as display an image for the item, edit the items price and whether or not it is on sale and the sale amount, the items shipping method, any options for the item (sizing, color)
I want to be able to add the stock amount to the store, and have the store automatically stop allowing items to be purchased if they are out of stock
I want to be able to remove reviews from my store if they are inaccurate or malicious
I want to list my shop policies on my page, and be able to edit them if my policies change

## Components

*This is a diagram of how I think the nesting of my planned components will/should look*

Root {
  list-Store-Items{
    show-Sale-Items{}
    filter-Store-Items{}
  }
  edit-Store-Items{
    add-Store-Item{}
    remove-Store-Item{}
  }
  show-Item-Info{}
  add-Review{}
  remove-Review{}
  favorite-Store{}
  report-Store{}
  list-Policies{}
  edit-Policies{}
  contact-Store-Owner{}
}
