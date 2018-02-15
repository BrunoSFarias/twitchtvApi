$(document).ready(function(){
// stream info and status
  // var following=[];
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers:{
      'Client-ID': 'p3e0v0qpohj19ld86mdodzl6iesqse'
    },
    success: function(datacheckonline){
        console.log(datacheckonline);
       debugger;
       if (datacheckonline.stream === null) {
      //Check Offline
      $("#fccStatus").html("Free Code Camp is currently OFFLINE");
    } else {
    // Else is online
      $("#fccStatus").html("Free Code Camp is currently LIVE");
    }
    }
  });
  // listing followers
    $.ajax({
    type: "GET",
  
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/",
    headers:{
      'Client-ID': 'p3e0v0qpohj19ld86mdodzl6iesqse'
    },
    success: function(dataCheckFollower){
  for (var i = 0; i < dataCheckFollower.follows.length; i++) {
    console.log(dataCheckFollower.follows[0]);
      //gets displayName
      var displayName = dataCheckFollower.follows[i].channel.display_name;
      var logo = dataCheckFollower.follows[i].channel.logo;
    var status= dataCheckFollower.follows[i].channel.status;
    if(logo==null){
      logo="https://thinkibility.files.wordpress.com/2016/07/nologo.png";
    }
   if(status==null){
      status="OFFLINE";
    }
     $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4 mini'><a href='https://www.twitch.tv/"+ displayName+"'>" + status + "</a></div></div>");
    }    
    }    
  });
  
  /*var url="https://wind-bow.gomix.me/twitch-api/streams/freecodecamp/?callback=?";
  $.getJSON(url, function(data1){
  if(data1.stream===null){
  $("#fccStatus").html("Free Code Camp is Currently Offline.");
} else {
$("#fccStatus").html("Free Code Camp is Currently Online.");
} 
});
var followersUrl= "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels";  
  
$.getJSON(followersUrl, function(data2){
  
for(var i=0; i<data2.follows.length; i++){
var display = data2.follows[i].channel.display_name;

following.push(display);
  
}
following.push('ESL_SC2');
 var logo;
var status;
var name;
for(var i=0;i<following.length;i++){
var url2 ="https://wind-bow.gomix.me/twitch-api/streams/" + following[i]+"/?callback=?";
//console.log(url2);
 $.getJSON(url2).done(function(data3){

if(data3.error){
logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
//console.log(logo);
name = data3.message;
status = data3.error;

  
 $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<a  href='https://www.twitch.tv/" +name+  +"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
}   
if(data3.stream===null){
//console.log(1);
 $.getJSON(data3._links.channel,function(data5){
status ="OFFLINE";
logo = data5.logo;
name = data3.display_name;
   if(logo===null){
logo = "https://thinkibility.files.wordpress.com/2016/07/nologo.png";
}
 $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<a  href='https://www.twitch.tv/" +name+  +"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
});
}
});
}
  for(var i=0; i<following.length; i++){
 var online = "https://wind-bow.gomix.me/twitch-api/streams/" + following[i] +"/?callback=?";
// console.log(online);
$.getJSON(online, function(data4){
 // if(data4.status!=null && data4.error!= false){
logo = data4.stream.channel.logo;
status = data4.stream.channel.status;
name = data4.stream.channel.display_name;
//  }
   if(logo===null){
logo = "https://thinkibility.files.wordpress.com/2016/07/nologo.png";
}
 $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<a  href='https://www.twitch.tv/" +name+  +"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
});
}
// console.log(following);
});
*/  
});