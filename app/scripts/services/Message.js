(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var date = new Date();
    var datePost = date.toDateString();



    Message.getByRoomId = function(roomId){
      //filter message by room ID
      var messageQuery = ref.orderByChild('roomId').equalTo(roomId);
      var messageResult = $firebaseArray(messageQuery);
      return messageResult;

  };


  Message.send = function(newMessage) {
    messages.$add(newMessage);

  };


    return Message;
}

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
