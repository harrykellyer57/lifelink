/* 
   Filename: sophisticated_code.js
   Description: This code exemplifies a complex and sophisticated JavaScript application by implementing a real-time monitoring system for a fleet of vehicles. It simulates the communication between vehicles and a central server, displaying real-time data such as the vehicle's speed, location, and status.
*/

// Vehicle Class
class Vehicle {
  constructor(id, model, location, speed, status) {
    this.id = id;
    this.model = model;
    this.location = location;
    this.speed = speed;
    this.status = status;
  }

  updateLocation(newLocation) {
    this.location = newLocation;
    // Send updated location to server
    server.updateVehicleLocation(this.id, newLocation);
  }

  updateSpeed(newSpeed) {
    this.speed = newSpeed;
    // Send updated speed to server
    server.updateVehicleSpeed(this.id, newSpeed);
  }

  updateStatus(newStatus) {
    this.status = newStatus;
    // Send updated status to server
    server.updateVehicleStatus(this.id, newStatus);
  }
}

// Server Class
class Server {
  constructor() {
    this.vehicles = [];
  }

  registerVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  updateVehicleLocation(vehicleId, newLocation) {
    // Update vehicle's location in the server's database
    // ...
  }

  updateVehicleSpeed(vehicleId, newSpeed) {
    // Update vehicle's speed in the server's database
    // ...
  }

  updateVehicleStatus(vehicleId, newStatus) {
    // Update vehicle's status in the server's database
    // ...
  }
}

// Instantiate Server
const server = new Server();

// Instantiate Vehicles
const vehicle1 = new Vehicle(1, "Tesla", "New York", 0, "Stopped");
const vehicle2 = new Vehicle(2, "BMW", "Los Angeles", 0, "Stopped");
const vehicle3 = new Vehicle(3, "Audi", "Chicago", 0, "Stopped");

// Register Vehicles with Server
server.registerVehicle(vehicle1);
server.registerVehicle(vehicle2);
server.registerVehicle(vehicle3);

// Simulate Vehicles' Updates
setTimeout(() => {
  vehicle1.updateLocation("Washington");
  vehicle1.updateSpeed(60);
  vehicle2.updateLocation("San Francisco");
  vehicle2.updateSpeed(40);
  vehicle3.updateLocation("Boston");
  vehicle3.updateSpeed(50);
}, 3000);

// Display Real-time Data
setInterval(() => {
  console.clear();
  console.log("Vehicle Monitoring System");
  console.log("-------------------------");

  server.vehicles.forEach((vehicle) => {
    console.log(`ID: ${vehicle.id}`);
    console.log(`Model: ${vehicle.model}`);
    console.log(`Location: ${vehicle.location}`);
    console.log(`Speed: ${vehicle.speed} mph`);
    console.log(`Status: ${vehicle.status}`);
    console.log("-------------------------");
  });
}, 1000);