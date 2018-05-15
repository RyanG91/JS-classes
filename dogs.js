class Walk {
  constructor(location, distance) {
    this.location = location
    this.distance = distance
  }
}

class Dog {
  constructor(name, location){
  this.name = name
  this.location = location
  this.walks = []
  //
  this.distance = 0
  //
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`)
  }
  walk(location, distance) {
    //
    this.distance += distance
    //
    // this.walks.push({location, distance}) Used for displayWalks

    this.walks.push(new Walk(location, distance)) // No need for a global variable type like in Ruby.

    // console.log(`My location is ${location}`)
    // console.log (`I've walked ${distance}kms.`)
  }
  displayWalks() {
    for (const walk of this.walks){
      console.log(walk)
      // console.log(`Hi, im ${this.name}, I walked ${walk[1]} km to ${walk[0]}`)
    }
  }
  totalDistance(distance) {
    //
    console.log(`I have walked a total of ${this.distance} kms!`)
    //
  }
  time() {
  var timeStamp = new Date;
  console.log(timeStamp, Date.now());
  }
  setLocation() {
    this.location = location
  }
  setDistance() {
    this.distance = distance
  }
}
