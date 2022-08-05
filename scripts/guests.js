import { getGuests } from "./database.js";

const guests = getGuests()

export const printGuest = () => {
    let html = `<section class= "guestclass" >`

    for (let guest of guests) {
        html += `<div class="element" id="guests--${guest.id}">${guest.firstName} ${guest.lastName}</div>`
    }
    html += "<section>"
    return html
};