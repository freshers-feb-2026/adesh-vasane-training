let person = {
  name: "Adesh"
};

function greet(age, city) {
  console.log(this.name + " is " + age + " from " + city);
}

greet.apply(person, [22, "Pune"]);