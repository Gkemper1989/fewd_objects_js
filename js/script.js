// Define a constructor function template for hotels
function Hotel(name, rooms, booked, gym, breakfest, pool, carPark) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.gym = gym;
    this.breakfest = breakfest;
    this.pool = pool;
    this.carPark = carPark;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3, 'Yes', 'Yes', 'No', 110);
var lemonHotel = new Hotel('Lemon', 56, 15, 'Yes', 'Yes', 'No', 110);

// Hotel 1
var elName = document.getElementById('hotelName');
elName.textContent = clayHotel.name;
var elRooms = document.getElementById('rooms');
elRooms.textContent = clayHotel.checkAvailablity();
var elBreakfest = document.getElementById('breakfast');
elBreakfest.textContent = 'Breakfast: ' + clayHotel.breakfest;
var elPool = document.getElementById('Pool');
elPool.textContent = 'Pool: ' + clayHotel.pool;
// Instance 
var details1 = clayHotel.name + ' rooms: ';
    details1 += clayHotel.checkAvailablity();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

// Hotel 2
var details2 = lemonHotel.name + ' rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var foodDetails1 = clayHotel.breakfest;
    foodDetails1 = document.getElementById('breakfest');
breakfest.textContent = foodDetails1;

