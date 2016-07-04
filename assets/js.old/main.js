var riot = require('riot')
var bar = require('./bar.tag')
var customform = require('./form.tag')
var mainpage = require('./main.tag')
var country = require('./country.tag')
var dbform = require('./dbform.tag')
var register = require('./register.tag')
var signout = require('./signout.tag')
var signin = require('./signin.tag')
var persons = require('./persons.tag')
var $ = require('jquery')

function route(path, cb) {
    if (window.location.pathname == path) {
      return cb()
    }
}
function onSignIn(googleUser) {
      var token = googleUser.getAuthResponse().id_token;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/google_login');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function() {

      };
      xhr.send('token='+token);
}
function registerGoogle(user){
  var profile = user.getBasicProfile();
  $('input#Email').val(profile.getEmail());
  $('div#Email').addClass("has-success");
  $('div#Email').removeClass("has-warning");
  $('div#Password').hide();
  $('th#signin').hide();
  $('th#signout').show();
  $('input#Email').prop('disabled', true);
  $('input#Token').val(user.getAuthResponse().id_token);
}
function signout() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    $('th#signout').hide();
    $('th#signin').show();
    $('div#Email').removeClass("has-success");
    $('div#Email').addClass("has-warning");
    $('div#Password').show();
    $('input#Email').prop('disabled', false);
  });
}
function api(method, path, data) { //cb is for success case
  var msg;
  if (method == "POST"){
    msg = $.post(path, data);
  } else if (method == "GET") {
    msg = $.get(path, data);
  }
  if (msg.ok == "Success" && msg.ok == "true") {
    return true;
  } else {
    return false;
  }
}
function getData(name) {
  return $.getJSON("/api/text/" + name, function(data) {
    return data
  });
}

(function() {
    riot.route.start(true);
    riot.mount('div#main','bar');
    riot.route('/database', function(){
      riot.mount('div#app','customform');
      riot.mount('div#form','dbform', { api: api, data: getData('dbform') });
      riot.mount('div#country', 'country');
    });
    riot.route('/register', function(){
      riot.mount('div#app','customform');
        riot.mount('div#form','register', {api: api, data: getData('register')});
    });
    riot.route('/login', function(){
      riot.mount('div#app','customform');
      riot.mount('div#form','signin', { api: api, data: getData('signin') });
    });
    riot.route('/logout', function(){
      riot.mount('div#app','customform');
      riot.mount('div#form','signout', { api: api, data: getData('signout') });
    });
    riot.route('/', function(){
      riot.mount('div#app','mainpage');
    })
    riot.route('/persons', function(){
      riot.mount('div#app','persons');
    })
    $('input[type=text]').change(function() {
      $(this).parent().addClass("has-success");
      $(this).parent().removeClass("has-warning");
    });
}).call(this);
