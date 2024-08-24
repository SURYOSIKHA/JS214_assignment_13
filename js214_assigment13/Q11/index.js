// Car class definition
class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity) {
      this.name = name;
      this.accelerationPower = accelerationPower;
      this.brakingPower = brakingPower;
      this.speed = 0; // Initial speed is 0
      this.fuel = maxFuelCapacity; // Start with a full tank
      this.maxFuelCapacity = maxFuelCapacity;
    }
  
    accelerate() {
      if (this.fuel > 0) {
        this.speed += this.accelerationPower;
        this.fuel -= 1; // Simulate fuel consumption per acceleration
        console.log(`Accelerating. Current speed: ${this.speed} m/s. Fuel level: ${this.fuel}`);
      } else {
        console.log("Out of fuel! Please refuel.");
      }
    }
  
    brake() {
      this.speed = Math.max(0, this.speed - this.brakingPower); // Speed cannot go below 0
      console.log(`Brakes applied. Current speed: ${this.speed} m/s.`);
    }
  
    checkSpeed() {
      return this.speed;
    }
  
    refuel() {
      this.fuel = this.maxFuelCapacity;
      console.log("Refueled to maximum capacity.");
    }
  
    drive(accelerationInterval, brakingInterval, driveDuration) {
      const steps = Math.floor(driveDuration / (accelerationInterval + brakingInterval));
      
      for (let i = 0; i < steps; i++) {
        this.accelerate();
        this.wait(accelerationInterval);
        this.brake();
        this.wait(brakingInterval);
      }
  
      console.log(`Final speed after driving: ${this.speed} m/s. Final fuel level: ${this.fuel}`);
    }
  
    wait(seconds) {
      const start = Date.now();
      while (Date.now() - start < seconds * 1000) {
        // Busy-wait loop to simulate time passing
      }
    }
  }
  
  // Example usage
  const myCar = new Car('Speedster', 5, 3, 100); // Create a new Car instance
  
  // Test methods
  myCar.accelerate(); // Accelerate once
  myCar.brake(); // Apply brakes once
  console.log(`Current speed: ${myCar.checkSpeed()} m/s`); // Check current speed
  myCar.refuel(); // Refuel the car
  myCar.drive(2, 1, 10); // Simulate a driving session with intervals of 2 seconds acceleration and 1 second braking for a total of 10 seconds
  