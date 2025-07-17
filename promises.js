//promises
const obj= fetch('http://api.weatherapi.com/v1/current.json?key=c65cd4b321c44d6fbf082506252601&q=London&aqi=no')



// setTimeout(()=>{
//     console.log(obj);
// },2000)

//obj k ander value ayege tb he chelega . k bad 
obj.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})