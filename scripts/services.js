import { getServices } from "./database.js";
import { getAllParkServices } from "./database.js";

const services = getServices();
const parkServices = getAllParkServices();

export const printServices = () => {
    let html = `<section class= "serviceclass" >`

    for (let service of services) {
        html += `<div class="element" id="services--${service.id}">${service.name} </div>`
    }
    html += "<section>"
    return html
};