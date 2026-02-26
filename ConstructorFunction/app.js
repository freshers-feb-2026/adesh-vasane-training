function getDetails(name,sirName)
{
     this.name=name;
     this.sirName=sirName;
}
function perSon(person)
{
   return person.name+" "+person.sirName;
}
let person=new getDetails("adesh" , "wasane");
console.log(perSon(person));