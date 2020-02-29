var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: true,
    breakfest: 'sim',
    pool: 'sim',
    carPark: 110,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elBreakfest = document.getElementById('breakfest');
elBreakfest.textContent = hotel.breakfest;


