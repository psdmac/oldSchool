var myApp = angular.module('myApp', ['ngRoute','ngSanitize']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
          templateUrl: 'views/home.html',
          controller:  'MainCtrl',
        }).when('/pool', {
          templateUrl: 'views/pool.html',
          controller: 'MainCtrl'
        })
        .otherwise({ 
          redirectTo: '/' 
        });
}])

myApp.controller('PoolCtrl', ['$scope', function($scope) {
  $scope.lists = [
    {
      username: '王小明',
      title: '想學精實創業',
      description: '想聽聽長者們的創業經歷',
      vote: 10
    }
  ]
}])

myApp.controller('MainCtrl', ['$scope', function($scope){
  $scope.lessions = [
    {
      img: '4.jpg',
      title: '人生經驗分享',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },
    {
      img: '5.jpg',
      title: '創業諮詢',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },
    {
      img: '2.jpg',
      title: '書法之美',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '1.jpg',
      title: '蔥油餅製作',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '3.jpg',
      title: '棋藝教室',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '1.png',
      title: '戲劇教室',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '2.png',
      title: '園藝教室',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '4.png',
      title: '中國話教室',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '5.png',
      title: '國畫之美',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    },{
      img: '8.png',
      title: '閱歷人生',
      date: '2014-05-10',
      location: '台北',
      address: 'XXXXXXXXXXX',
      limit: 30
    }
  ]
  // console.log('loading Map')
  // var taipei = new google.maps.LatLng(25.0624723,121.5457942);
  // var mapOptions = {
  //   zoom: 12,
  //   center: taipei,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // }

  // var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  // google.maps.event.addListener(map, 'click', function(event) {
  //   placeMarker(event.latLng);
  //   console.log(event.latLng);
  // });

  // setTimeout(function() {
  //   var marker = new google.maps.Marker({
  //       position: taipei,
  //       map: map,
  //       title: 'Taipei',
  //       animation: google.maps.Animation.DROP
  //   });
  // }, 3000);


  // function placeMarker(location) {
  //   var marker = new google.maps.Marker({
  //       position: location,
  //       map: map,
  //       title: 'click',
  //       animation: google.maps.Animation.DROP
  //   });
  //   map.panTo(marker.getPosition());
  //   var infowindow = new google.maps.InfoWindow(
  //     { content: 'show info'
  //       // size: new google.maps.Size(100,100)
  //     });
    
  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.open(map,marker);
  //   });
  // }
}])

$(document).ready(function() {
  $menu = $('.navbar-collapse');
  $('.navbar-toggle').on('click', function() {
    $menu.slideToggle();
  });
})
