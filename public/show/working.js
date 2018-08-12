var bot = new RiveScript();
const el = document.querySelector('#msg_box')
const fx = new TextScramble(el)
var myObj;
var id = -1;

//bot.loadFile("aiden-skeptic.rs");
bot.loadFile(["replies/bot-skeptic.rs",
               "replies/bot-welcome.rs",
                "replies/begin_info.rs",
                "replies/chat-lingo.rs",
                "replies/clients.rs",
                "replies/colors.rs",
                "replies/emoticons.rs",
                "replies/friendly.rs",
                "replies/humor.rs",
                 "replies/insults.rs",
                 "replies/logic.rs",
                 "replies/myself.rs",
                 "replies/prefix-suffix.rs",
                 "replies/salutations.rs",
                "replies/star.rs",
                "replies/yesno.rs",
              ]);


console.log("2");
//bot.setVariable('namee',"dawda")
load_knowdledge();
function load_knowdledge(){
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", "data.txt", true);
 xmlhttp.send();
 xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200)
       myObj = JSON.parse(this.responseText);
}}





function msg_sent(){

    var text = document.getElementById("detect_input").innerHTML;
    document.getElementById("detect_input").innerHTML ="";
   console.log("sending " + text);
    if(text != ""){
        bot.sortReplies();
        bot.reply("local-user", text).then(function(reply){


if (reply.includes("check")){
      Evaluate_check(reply)
      console.log(reply);
  //     createBotMsg("Yeah, i am aware");
    //   else
//     createBotMsg("Sorry man, i dont know");
       }
         else
          createBotMsg(reply);
        });
    }
}







function createBotMsg(msg){
   fx.setText(msg);
}















//FOR EFFECT
document.addEventListener("keydown",function(e){
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
//Add_Property("hobbies","dssaw");
//check_for_name("lol");
msg_sent();
});
