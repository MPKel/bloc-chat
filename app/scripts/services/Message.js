(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    Message.query = [];



    Message.getByRoomId = function(roomId){
      //filter message by room ID
      ref.orderByChild('roomId').equalTo(roomId).on('value', function(mySnapshot) {
          Message.query = [];
          var holder = mySnapshot.val();

          if(holder){
            if(holder.length > 1){
              holder.forEach(function(each){
                if(each){
                  Message.query.push(each);
                }
              });
            }
        else {
          Message.query = holder;
        }
      }
    });
  };


    return Message;
}

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
