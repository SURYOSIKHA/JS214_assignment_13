// Constructor function for iPhone3
function iPhone3(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
}

// Methods to be added to the prototype of iPhone3
iPhone3.prototype.call = function() {
    console.log("ring... ring...");
};

iPhone3.prototype.sendMessage = function() {
    console.log("Sending message...");
};

iPhone3.prototype.takePicture = function() {
    console.log("Camera clicked");
};

iPhone3.prototype.connectBluetooth = function() {
    console.log("Bluetooth connected successfully...");
};

// Example usage
let i3 = new iPhone3("B07X8CJB1P", "Grey", "7.4", "12 MP", "Bluetooth 5.1");

// Testing the properties
console.log(i3.ASIN); // "B07X8CJB1P"
console.log(i3.color); // "Grey"
console.log(i3.display); // "7.4"
console.log(i3.camera); // "12 MP"
console.log(i3.bluetooth); // "Bluetooth 5.1"

// Testing the methods
iPhone3.prototype.call.apply(i3); // "ring... ring..."
iPhone3.prototype.sendMessage.apply(i3); // "Sending message..."
iPhone3.prototype.takePicture.call(i3); // "Camera clicked"
iPhone3.prototype.connectBluetooth.call(i3); // "Bluetooth connected successfully..."
