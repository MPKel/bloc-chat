(function() {
    function HomeCtrl(Room, Message, $cookies, $scope, $firebaseArray) {

      this.rooms = Room.all;

      this.activeRoom = null;
      this.latestMessage = null;

      this.userName = $cookies.get('blocChatCurrentUser') || null;
      $scope.$watch(() => $cookies.get('blocChatCurrentUser'), (newValue) => this.userName = newValue);


      this.displayRoom = function (Room){
        this.activeRoom = Room.$id;
        this.messages = Message.getByRoomId(this.activeRoom);

      };

      this.addMessage = function() {
        Message.send({"content": this.latestMessage, "roomId":this.activeRoom, "username": this.userName, "sentAt": firebase.database.ServerValue.TIMESTAMP});
        this.latestMessage = null;
      };




    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$scope', '$firebaseArray', HomeCtrl]);
})();
