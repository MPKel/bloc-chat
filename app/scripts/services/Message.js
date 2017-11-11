(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    



    Message.getByRoomId = function(roomId){
      //filter message by room ID
      var messageQuery = ref.orderByChild('roomId').equalTo(roomId);
      var messageResult = $firebaseArray(messageQuery);
      return messageResult;

  };

    return Message;
}

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
