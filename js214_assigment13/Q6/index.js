// Factory function for iPhone1
function iPhone1(input) {
    return {
        ASIN: input.ASIN,
        color: input.color,
        display: input.display,
        camera: input.camera,
        // Methods
        call: function() {
            console.log("ring... ring...");
        },
        sendMessage: function() {
            console.log("Sending message...");
        },
        takePicture: function() {
            console.log("Camera clicked");
        }
    };
}

// Factory function for iPhone2
function iPhone2(input) {
    return {
        ASIN: input.ASIN,
        color: input.color,
        display: input.display,
        camera: input.camera,
        bluetooth: input.bluetooth,
        // Methods
        call: function() {
            console.log("ring... ring...");
        },
        sendMessage: function() {
            console.log("Sending message...");
        },
        takePicture: function() {
            console.log("Camera clicked");
        },
        connectBluetooth: function() {
            console.log("Bluetooth connected successfully...");
        }
    };
}

// Example usage for iPhone1
let i1 = iPhone1({
    ASIN: "B00X6XY0OY",
    color: "Black",
    display: "5.5 inch",
    camera: "12 MP"
});

// Test methods for iPhone1
console.log(i1.ASIN); // "B00X6XY0OY"
console.log(i1.color); // "Black"
console.log(i1.display); // "5.5 inch"
console.log(i1.camera); // "12 MP"
i1.call(); // "ring... ring..."
i1.sendMessage(); // "Sending message..."
i1.takePicture(); // "Camera clicked"

// Example usage for iPhone2
let i2 = iPhone2({
    ASIN: "B07X8CJB1P",
    color: "White",
    display: "6.1 inch",
    camera: "16 MP",
    bluetooth: "5.0"
});

// Test methods for iPhone2
console.log(i2.ASIN); // "B07X8CJB1P"
console.log(i2.color); // "White"
console.log(i2.display); // "6.1 inch"
console.log(i2.camera); // "16 MP"
console.log(i2.bluetooth); // "5.0"
i2.call(); // "ring... ring..."
i2.sendMessage(); // "Sending message..."
i2.takePicture(); // "Camera clicked"
i2.connectBluetooth(); // "Bluetooth connected successfully..."
