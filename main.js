function newMessage(){
    database.ref("message").on("value",
        function(snapshot){
            newMessage=document.getElementById("newMessage")
            newMessage.innerHTML=""
            snapshot.forEach(function(child){
                message=child.val()
                localStorage:getItem()
            
            })
        }
    )
}




function getData(){
    Database.ref("message").on("value",
        function(snapshot){
            messagesList=document.getElementById("messageList")
            messageList.innerHTML=""
            snapshot.forEach(function(child){
                message=child.val();
                document.createElement("li")
                li.li.textContent=message.textContent
                messageList.appendChild(li)
            })
        }
    )
}