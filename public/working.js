var bot = new RiveScript();
const el = document.querySelector('#msg_box')
const fx = new TextScramble(el)


bot.loadFile("bot.rive");//.then(msg_sent);
//load_knowdledge();



document.addEventListener("keydown",function(e){
console.log(e.which);
if (document.getElementById("detect_input").innerHTML == "Type Something")
document.getElementById("detect_input").innerHTML = "";

if (e.keyCode != 8  && e.keyCode != 16  && e.keyCode != 13)   // input
if (  document.getElementById("detect_input").innerHTML.length > 0)
  document.getElementById("detect_input").innerHTML += e.key;
  else
  document.getElementById("detect_input").innerHTML += e.key.toUpperCase();

if (e.keyCode == 8)   //backspace
  document.getElementById("detect_input").innerHTML =  document.getElementById("detect_input").innerHTML.slice(0,-1);

if (e.keyCode == 13) // enter
msg_sent();

});



function msg_sent(){
    var text = document.getElementById("detect_input").innerHTML;
    document.getElementById("detect_input").innerHTML ="";
   console.log("sending" + text);
    if(text != ""){
        bot.sortReplies();
        bot.reply("local-user", text).then(function(reply){
//DISABLED FOR JSONUSES
  //   if (reply.includes("Check_for_name")){
//      console.log( check_for_name(reply.substring(15)));
//       if(check_for_name(reply.substring(15)))
  //      createBotMsg("msg_box", "Yeah, i know him");
    //    else
  //    createBotMsg("msg_box", "Sorry man, i dont know him");

    //    }
      //    else
          createBotMsg("msg_box", reply);
        });
    }
}

//   var myObj;
// function load_knowdledge(){
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "data.txt", true);
// xmlhttp.send();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200)
//          myObj = JSON.parse(this.responseText);
// }
// }

function check_for_name(str){
 console.log(str);
  for ( i = 0 ; i < myObj.People.length ; i ++){
       console.log(myObj.People[i]);
       if (myObj.People[i].trim() == str.trim())
         return 1;
       }
    return 0;
  }



function createBotMsg(inside, msg){
   fx.setText(msg);
}
