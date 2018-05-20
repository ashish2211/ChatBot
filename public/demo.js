console.log("heheh");


// Craete a Rivescript object.
var bot = new RiveScript();

// Load a directory full of Rivescript documents (.rive files).
// This is for the NODE.JS only : it does not work on the web.
// bot.loadDirectory("folderName", loading_done, loading_error);


// Load an individual file.
bot.loadFile("bot.rive", loading_done, loading_error);

/*
Load a list of Rivescript files all at once (the best alternative to load directory for the web!).
bot.loadFile(["bot1.rive",
                "bot2.rive",
                "bot3.rive"],
                loading_done,
                loading_error);
*/

/*
All the file loading operations are asynchronous, so we need handlers to catch when they finish.
If we call loadDirectory or loadFile with multiple file names, then the success function is called only
when all functions are loading.
*/

function loading_done(batch_num){
    console.log("Batch #" + batch_num + "has finished loading");

}

// Catch the errors here.
function loading_error(error){
    console.log("Error when loading file(s): " + error);
}

// Whenever send button is clicked
function msg_sent(){
    console.log("working");

    var text = document.getElementById("text_field").value;

    if(text != ""){

        // Show the user message in the chatbox.
        createUserMsg("msg_box", text);
        updateScroll();

        // Now replies are sorted.
        bot.sortReplies();

        // Now we are free to get a reply from the brain or the .rive file.
        var reply = bot.reply("local-user", text);

        // Show the bot message in the chatbox.
        createBotMsg("msg_box", reply);
        updateScroll();
    }
}

// To make scrollbar go down automatically.
function updateScroll(){
    var element = document.getElementById("msg_box");
    element.scrollTop = element.scrollHeight;
}

// Function to create a msg by bot and pass in the newly created div.
function createBotMsg(inside, msg){
    var date = new Date();
    // Create a reply in the chat box.
    var div = document.createElement("div");
    div.id = "msg_rec_" + date.getTime().toString();
    // div.style.border = "1px solid red";
    // div.style.height = "25px";
    div.style.margin = "5px";
    var innerDiv = document.createElement("div");
    innerDiv.style.border = "1px solid black";
    // innerDiv.style.height = "20px";
    innerDiv.style.display = "inline-block";
    
    innerDiv.style.borderRadius = "5px";
    innerDiv.innerHTML = msg;
    document.getElementById(inside).appendChild(div);
    document.getElementById(div.id).appendChild(innerDiv);
}

// Function to create a msg by user and pass in the newly created div.
function createUserMsg(inside, msg){
    var date = new Date();
    // Create a reply in the chat box.
    var div = document.createElement("div");
    div.id = "msg_sent_" + date.getTime().toString();
    div.style.margin = "5px";
    // div.style.border = "1px solid red";
    // div.style.height = "25px";
    var innerDiv = document.createElement("div");
    innerDiv.style.border = "1px solid black";
    // innerDiv.style.height = "20px";
    innerDiv.style.display = "inline-block";
    innerDiv.style.borderRadius = "5px";
    innerDiv.innerHTML = msg;
    div.style.textAlign = "right";
    document.getElementById(inside).appendChild(div);
    document.getElementById(div.id).appendChild(innerDiv);
}

// Function to create a message div
function createMsgDiv(){

}
