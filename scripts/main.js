import { printGuest } from "./guests.js";
import { printParkDestinations } from "./parks.js";
import { printServices } from "./services.js";

const guestsPrinted = printGuest()
const parksPrinted = printParkDestinations()
const servicesPrinted = printServices()

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="details">
    <section class="detail--column list guestsBlock">
        <h2>Guests</h2>
        ${guestsPrinted}
    </section>
    <section class="detail--column list details__parks">
        <h2>Parks</h2>
        ${parksPrinted}
    </section>
    <section class="detail--column list details__services">
        <h2>Services</h2>
        ${servicesPrinted}
    </section>
</article>
`
mainContainer.innerHTML = applicationHTML



// <article class="assignments">
//     <h2>Current Assignments</h2>
//     ${Assignments()}
// </article>