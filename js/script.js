/**
 * Created by Andrew on 13/10/2016.
 */

////Need to put callback on end for cross site/////
var callback = "?callback=?";
var baseURL = "https://wind-bow.hyperdev.space/twitch-api";

var streamers = ["ESL_SC2", "OgamingSC2", "brunofin", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "comster404"];

//Loop array

var index = [0,1,2,3,4,5,6,7];
index.forEach(function(number){
    $.ajax({
        url: baseURL + "/streams/" + streamers[number] + callback,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.stream != null) {
                //Streams that are live
                $.ajax({
                    url: baseURL + "/channels/" + streamers[number] + callback,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        $('#name' + number).html('<a href="' + data.url + '" target="_blank">' +  data.display_name +  '</a>');
                        $('#status' + number).html(data.status);
                    },
                    error: function() {
                        alert('error');
                    }
                });
            }
            else { //Streams that are offline or permenatnely closed
                $.ajax({
                    url: baseURL + "/channels/" + streamers[number] + callback,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        ///Check if the channel exists
                        if (data.error != "Not Found") {
                            $('#name' + number).html('<a href="' + data.url + '" target="_blank">' +  data.display_name +  '</a>');
                            $('#status' + number).html('Offline');
                        }
                        else {
                            $('#name' + number).html(streamers[number]);
                            $('#status' + number).html('This channel does not exist.');
                        }

                    },
                    error: function() {
                        alert('error');
                    }
                });
            }
        },
        error: function() {
            alert('error');
        }
    });
});



/*Bouncy!*/
/*$(document).ready(function() {
 $('#center').click(function() {
 $(this).effect('bounce', {times: 3}, 500);
 });
 });*/

/*for (var i=0; i<1; i++) {
 $.ajax({
 url: baseURL + "/channels/" + streamers[i] + callback,
 type: 'GET',
 dataType: 'json',
 success: function(data) {
 console.log(JSON.stringify(data));
 $('#name' + i).html(data.url);
 console.log(i);
 },
 error: function() {
 alert('error');
 }
 });
 }*/
//Name and website for Live stream
/*var withStream = function() {
 $.ajax({
 url: baseURL + "/channels/" + streamers[number] + callback,
 type: 'GET',
 dataType: 'json',
 success: function(data) {
 $('#name' + number).html('<a href="' + data.url + '" target="_blank">' +  data.display_name +  '</a>');
 $('#status' + number).html(data.status);
 },
 error: function() {
 alert('error');
 }
 });
 };*/

//Name and status for offline stream
/*var noStream = function() {
 $.ajax({
 url: baseURL + "/channels/" + streamers[number] + callback,
 type: 'GET',
 dataType: 'json',
 success: function(data) {
 ///Check if the channel exists
 if (data.error != "Not Found") {
 $('#name' + number).html('<a href="' + data.url + '" target="_blank">' +  data.display_name +  '</a>');
 $('#status' + number).html('Offline');
 }
 else {
 $('#name' + number).html(user);
 $('#status' + number).html('The channel does not exist.');
 }

 },
 error: function() {
 alert('error');
 }
 });
 };*/
/*var initData = function() {
 $.ajax({
 url: baseURL + "/streams/" + streamers[number] + callback,
 type: 'GET',
 dataType: 'json',
 success: function(data) {
 //console.log(JSON.stringify(data));
 if (data.stream != null) {
 withStream();
 }
 else {
 noStream();
 }
 },
 error: function() {
 alert('error');
 }
 });
 };*/


