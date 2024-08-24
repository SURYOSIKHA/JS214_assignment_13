// ES6 class for iPhone6
class iPhone6 {
    constructor(ASIN, color, display, camera, bluetooth) {
        this.ASIN = ASIN;
        this.color = color;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;
    }

    // Methods
    call() {
        return "ring... ring...";
    }

    sendMessage() {
        return "Sending message...";
    }

    takePicture() {
        return "Camera clicked";
    }

    connectBluetooth() {
        return "Bluetooth connected successfully...";
    }
}

// Example usage
let i6 = new iPhone6("B0987894P", "Grey", "7.4", "12 MP", "Bluetooth 5.1");

// Testing the properties
console.log(i6.ASIN); // "B0987894P"
console.log(i6.color); // "Grey"
console.log(i6.display); // "7.4"
console.log(i6.camera); // "12 MP"
console.log(i6.bluetooth); // "Bluetooth 5.1"

// Testing the methods
console.log(i6.call()); // "ring... ring..."
console.log(i6.sendMessage()); // "Sending message..."
console.log(i6.takePicture()); // "Camera clicked"
console.log(i6.connectBluetooth()); // "Bluetooth connected successfully..."
