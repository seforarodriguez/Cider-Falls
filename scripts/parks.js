import { getParkDestinations } from "./database.js";

const parkDestinations = getParkDestinations()

export const printParkDestinations = () => {
    let html = `<section class= "parksclass" >`

    for (let parkDestination of parkDestinations) {
        html += `<div class="element" id="park--${parkDestination.id}">${parkDestination.name} ${parkDestination.location}</div>`
    }
    html += "<section>"
    return html
};