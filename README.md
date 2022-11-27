# getExplodedNumber.js

Initially this was a way for me to work with and understand the finer nuances of modulo (`%`). It morphed into a way to "explode" a given number into its various parts (i.e. each number's [place](https://www.cuemath.com/numbers/place-value/).) Each part (place) will be a separate item in an array aptly titled `explodedNumber`. For example, `797614 => [ 700000, 90000, 7000, 600, 10, 4 ]`.

There is an option to have the exploded number displayed as a string, e.g. `501476 => '500000 + 00000 + 1000 + 400 + 70 + 6'`, where if the place is a `0`, the number of zeroes is repeated to account for the number place that zero is in.

Nothing earth shattering, just a way for me to practice modulo and learn to work with numbers in a very narrow scope.

I further plan to turn this into a very basic "web app" (even that might be a misnomer), where the user inputs a number in an input field, and the places of that number are displayed on the screen in a nice, tidy little table or similar. Ideally the places would update as the user types. 

Guessing this would be controlled with an event handler. Either that, or React (or both).
