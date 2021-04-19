# Kitesurfing app for Atta Systems interview (Front-end Engineer Intern)

This project was built in React.js for the first stage of an interview with Atta Systems. The whole concept, design sketch and API were offered by them.

While it may not be a complex project, it was a learning process for me and it is not meant to function as a true standalone app as it is.

Kitesurfing is an app where you can manage your favourite (and less favourite) locations to practice, well... kitesurfing. You can save your favourite spots and the high season for each area, so you can easily pick the right place.

The app can be accessed at: https://biolete.studio/kitesurfing
Some creditendials for testing:
  - E-mail: demo@biolete.studio
  - Password: demo

## Implementation

I started by building a basic UI based on the given sketch. I have used TailwindCSS for the styling and React-Leaflet for the Maps API. At first I really wanted to match the design pixel by pixel and every shade of color. That version can be built from the '/ver-sketch' directory, but there is not much functionality implemented. The design is responsive, it works great on any screen.

I have implemented functions to handle requests for each API endpoint using Promises. After fetching the data, I have represented it on a map implemented with React-Leaflet and a table.

Each kitesurfing Spot is represented on the map based on Latitude and Longitude and each one that is associated with an element from Favourites resource is marked distinctly on the map and with a star near the name in the table. The data can be filtered by Country and Wind Probability from a menu, and by Name through the search bar from below the map. Filtering applies to both the map and the table.

The data can also be sorted in the table, by pressing the button with an arrow corresponding to the direction in which you want to sort, from the column you want to sort by.

New spots can be added from the Navbar. I have stored an array with all the countries and they can be accessed in the form by a Select2 field.

I have also implemented some very basic Registration and Login functionalities. The user name is saved in Local Storage and acts as a session token.

### References
* https://reactjs.org/docs/
* https://www.youtube.com/watch?v=w7ejDZ8SWv8
* https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
* https://gist.github.com/incredimike/1469814
* https://www.smashingmagazine.com/2020/03/sortable-tables-react/
* https://stackoverflow.com/questions/21700773/javascripts-sort-method-handling-of-capital-letters
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* https://stackoverflow.com/questions/37349331/javascript-sort-items-list-by-months
* https://material-ui-pickers.dev/getting-started/usage
* https://stackoverflow.com/questions/47082971/why-cryptojs-produced-different-value-every-time-the-browser-loads/47096284#47096284
