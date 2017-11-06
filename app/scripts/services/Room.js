(function() {
  function Room($firebaseArray) {

    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);



    Room.all = rooms;
    console.log( Room.all);


    Room.add = function(room) {
      console.log("room addded: " + room);
      var roomsRef = firebase.database().ref(room);
      //ref.push(room);
      roomsRef.set({room, room});

      // roomRef.set({
      //   value: room,
      //   id: room
      // });
      console.log(Room.all);
    //Use the firebase method $add here

    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
