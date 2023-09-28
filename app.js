// SECTION GLOBAL 
const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
    name: 'Jimbo',
    picture: '🤵',
    location: '🏤',
    hunter: false
},
{
    name: 'Sammy',
    picture: '🙆‍♀️',
    location: '🏤',
    hunter: false
},
{
    name: 'Michael',
    picture: '👷',
    location: '🏤',
    hunter: false
},
{
    name: 'Robert',
    picture: '👷',
    location: '🏥',
    hunter: false
},
{
    name: 'Terry',
    picture: '🤴',
    location: '🏥',
    hunter: false
},
{
    name: 'Bill',
    picture: '🕵️',
    location: '🏥',
    hunter: false
},
{
    name: 'Marie',
    picture: '👩‍🍳',
    location: '🏭',
    hunter: false
},
{
    name: 'Mykeal',
    picture: '💂',
    location: '🏭',
    hunter: false
},
{
    name: 'Phil',
    picture: '🧜‍♂️',
    location: '🏭',
    hunter: false
},
{
    name: 'Wilson',
    picture: '🏐',
    location: '🏢',
    hunter: false
},
{
    name: 'Wendy',
    picture: '👩‍⚕️',
    location: '🏢',
    hunter: false
},
{
    name: 'Jeremy',
    picture: '🦹',
    location: '🏢',
    hunter: false
}
]
const copyOfPeople = [...people];
console.log('people init', copyOfPeople[0]);
let moves = 5
// !SECTION GLOBAL END





// SECTION FUNCTIONS
// people.forEach((pep) => {
//     console.log(pep.location)

// });

function displayPeople() {
    locations.forEach(location => {
        const peopleAtLocation = people.filter(pep => pep.location == location)
        console.log('peoples locations', peopleAtLocation)

        let allPeople = ''
        peopleAtLocation.forEach(people => allPeople += people.picture)
        console.log('all people', allPeople)

        const displayThePeoplePlease = document.getElementById(location)
        displayThePeoplePlease.innerText = allPeople
    })
}

function turnAllPeopleIntoBatsWithOneIdSelector(locationImage) {
    const peopleIcons = people.filter(pep => pep.location == locationImage)
    console.log('people icons', peopleIcons)

    peopleIcons.forEach(people => {
        people.picture = '🦇'
        if (people.hunter == true) {
            window.alert('hunter trolled')
        }
    })

    displayPeople()
    endGame()
    randomizeLocation()
    timer()
}


function randomizeLocation() {

    people.forEach(pep => {
        const randomNumber = Math.floor(Math.random() * locations.length)
        const randomLocation = locations[randomNumber]
        pep.location = randomLocation
    })
    console.log('people', people)
    displayPeople()
}





function reset() {
    // console.log('people after reset', people[0])
    for (let i = 0; i < people.length; i++) {
        people[i] = { ...copyOfPeople[i] };

    }
    // people.forEach(pep => pep = copyOfPeople)
    displayPeople()
    moves = 5
}




function hunterIsReal() {
    const randomNumber = Math.floor(Math.random() * people.length)
    const randomHunter = people[randomNumber]
    randomHunter.hunter = true
}









// function turnPeopleAtHospitalIntoBats() {
//     const peopleIcons = people.filter(pep => pep.location == locations[0])
//     console.log('people icons', peopleIcons)

//     peopleIcons.forEach(people => people.picture = '🦇')
//     displayPeople()
//     endGame()
// }

// function secondClicked() {
//     const peopleIcons = people.filter(pep => pep.location == locations[1])
//     console.log('people icons', peopleIcons)

//     peopleIcons.forEach(people => people.picture = '🦇')
//     displayPeople()
//     endGame()
// }

// function thirdClicked() {
//     const peopleIcons = people.filter(pep => pep.location == locations[2])
//     console.log('people icons', peopleIcons)

//     peopleIcons.forEach(people => people.picture = '🦇')
//     displayPeople()
//     endGame()
// }

// function fourthClicked() {
//     const peopleIcons = people.filter(pep => pep.location == locations[3])
//     console.log('people icons', peopleIcons)

//     peopleIcons.forEach(people => people.picture = '🦇')
//     displayPeople()
//     endGame()
// }

// function fifthClicked() {
//     const peopleIcons = people.filter(pep => pep.location == locations[4])
//     console.log('people icons', peopleIcons)

//     peopleIcons.forEach(people => people.picture = '🦇')
//     displayPeople()
//     endGame()
// }

function endGame() {

    const everyoneIsABat = people.every(person => person.picture == '🦇')

    if (everyoneIsABat) {
        window.alert('Its So Over')
        window.alert("It's Never Been More Over")
        reset()
    }
}

function timer() {
    moves -= 1
    if (moves == 0) {
        window.alert('you lose')
        reset()
    }
}


// !SECTION END FUNCTIONS

// SECTION CALLING FUNCTIONS
displayPeople()
hunterIsReal()

// !SECTION CALLING FUNCTIONS END 