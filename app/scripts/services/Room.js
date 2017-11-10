(function() {
  function Room($firebaseArray) {

    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;


    Room.add = function(room) {
      //var roomsRef = firebase.database().ref("rooms/" + room);
      //roomsRef.set("room " + room);
      rooms.$add(room);

    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
