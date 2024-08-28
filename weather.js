





let result = document.querySelector("#res");
let search = document.querySelector("#search");


search.addEventListener("keyup",function(e){
//  console.log(e)
 if(e.key == "Enter"){
        console.log(search.value);
        FindLocation(search.value)
 }
});
async function FindLocation(val) {
        let appid = "3a571940e3b500e5cd4b47e0f5811427";
        let dest = val;
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${dest},&APPID=${appid}`;
       
        let data = await fetch(url);
    
        let res = await data.json();
        let img = document.querySelector("#img")

        if (res.weather[0]. main == "Clear") {
                img.src ="https://i.pinimg.com/originals/88/9b/86/889b86dfb255824f611c12f367f69cb6.png";
        }
        if(res.weather[0].main =="Smoke"){
                img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7wb7XlJvyQpxG2pCp2WnfsVy3rCJs6Y2Qw&s"
        }
        if(res.weather[0].main =="Drizzle"){
                img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdgkKU1YwUHWs5r0tGBPzJH3fSMGSw5a7gg&s"
  }
  if(res.weather[0].main =="Mist"){
        img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU0FZA9z_J14UJv5wB7Z-_mhtSG4JkcPkdQ&s"
   
}
if(res.weather[0].main =="Rain"){
        img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWamXfRAxTwXD4v5a8gu1wMUkThxhuXdSj6g&s"
   
}
    
        let  output = "";
     for (const key in res) {
         if (typeof res [key] ==  "object") {
           for (const ChildKey in res [key]) {
    
            if (typeof res[key][ChildKey] == "object") {
       for (const subChildkey in  res[key][ChildKey]) {
                  output += `${key}${ChildKey} :${subChildkey} ::${res [key][ChildKey][subChildkey]} <br>`
                 }
                   }
           }
         }
         else{
           output += `${key} ::${res [key]} <br>`
    
         }
    
     } 
      result.innerHTML = output 
    }
       
         
     
                   
             
