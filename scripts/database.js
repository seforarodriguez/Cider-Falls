
const database = {
    guests: [
     {id:1, firstName:"Laurel",lastName:"Le Grand",parkAreaID:1},
     {id:2, firstName:"Sharia",lastName:"Keasley",parkAreaID:2},
     {id:3, firstName:"Kizzie",lastName:"Zimmer",parkAreaID:3},
     {id:4, firstName:"Mile",lastName:"Medlin",parkAreaID:5},
     {id:5, firstName:"Rees",lastName:"Torrie",parkAreaID:5},
     {id:6, firstName:"Marjy",lastName:"Bryde",parkAreaID:5},
     {id:7, firstName:"Barbara",lastName:"Blowfield",parkAreaID:5},
     {id:8, firstName:"Odo",lastName:"Feedome",parkAreaID:6},
     {id:9, firstName:"Evangelia",lastName:"Domone",parkAreaID:6},
     {id:10, firstName:"Derril",lastName:"Tracey",parkAreaID:6},
     {id:11, firstName:"Adriena",lastName:"Blaasch",parkAreaID:6},
     {id:12, firstName:"Peder",lastName:"Leaney",parkAreaID:6},
     {id:13, firstName:"Dannie",lastName:"Gebb",parkAreaID:7}
    ],
    parkDestinations: [{
        id: 1,
        name: "Chamfort River",
        location: 'Northeast'
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        location: "Northern Section"
    }, {
        id: 3,
        name: "Lodge",
        location: 'Northwest Section'
    }, {
        id: 4,
        name: "Gander River",
        location: 'Southwest Section'
    }, {
        id: 5,
        name: "Campgrounds",
        location: 'Southern Section'
    }, {
        id: 6,
        name: "Pine Bluffs Trails",
        location: 'Southeast Section'
    }],
    services: [
        { id: 1, name: "Rafting"},
        { id: 2, name: "Canoeing"},
        { id: 3, name: "Fishing"},
        { id: 4, name: "Hiking"},
        { id: 5, name: "picnicking"},
        { id: 6, name: "Rock Climbing"},
        { id: 7, name: "Lodging"},
        { id: 8, name: "Parking"},
        { id: 9, name: "Information"},
        { id: 10, name: "Zip Lines"}
    ],

    allParkServices: [
        { id: 1, servicesId: 1, parkDestinationId: 1 },
        { id: 2, servicesId: 2, parkDestinationId: 1 },
        { id: 3, servicesId: 3, parkDestinationId: 1 },
        { id: 4, servicesId: 4, parkDestinationId: 2 },
        { id: 5, servicesId: 5, parkDestinationId: 2 },
        { id: 6, servicesId: 6, parkDestinationId: 2 },
        { id: 7, servicesId: 7, parkDestinationId: 3 },
        { id: 8, servicesId: 8, parkDestinationId: 3 },
        { id: 9, servicesId: 9, parkDestinationId: 3 },
        { id: 10, servicesId: 5, parkDestinationId: 3 },
        { id: 11, servicesId: 3, parkDestinationId: 4 },
        { id: 12, servicesId: 4, parkDestinationId: 4 },
        { id: 13, servicesId: 9, parkDestinationId: 5 },
        { id: 14, servicesId: 7, parkDestinationId: 5 },
        { id: 15, servicesId: 8, parkDestinationId: 5 },
        { id: 16, servicesId: 10, parkDestinationId: 6 },
        { id: 17, servicesId: 4, parkDestinationId: 6 },
        { id: 18, servicesId: 5, parkDestinationId: 6 }
    ],
};

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getParkDestinations = () => {
    return database.parkDestinations.map(parkDestination => ({...parkDestination}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getAllParkServices = () => {
    return database.allParkServices.map(allParkServices => ({...allParkServices}))
}
