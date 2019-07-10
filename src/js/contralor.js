(() => {
  console.log("i'm controlor file !");
})()
$=require("jquery/dist/jquery.js")
$.get("../test.json",(dt)=>{
  console.log(dt);
})