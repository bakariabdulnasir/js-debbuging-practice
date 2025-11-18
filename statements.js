let temperature =22;
let motionDetected = true;
let lightStatus;
let timeOfDay ="afternoon";

// if statement
if (temperature > 25) {
  console.log("Turning on the air conditioner.");
}

if (motionDetected) {
  console.log("Turning on the lights.");
} else {
  console.log("Turning off the lights.");
}



// else-if statement
if (timeOfDay === "morning") {
  lightStatus = "off";
} else if (timeOfDay === "afternoon") {
  lightStatus = "dim";
} else if (timeOfDay === "evening") {
  lightStatus = "bright";
} else {
  lightStatus = "off";
}
console.log("Light status:", lightStatus);


// while loop
while (temperature > 20) {
  console.log(temperature);
  temperature--;
}

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}