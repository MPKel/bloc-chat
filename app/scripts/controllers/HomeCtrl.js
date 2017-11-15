(function() {
    function HomeCtrl(Room, Message, $cookies, $scope) {

      this.rooms = Room.all;

      this.activeRoom = null;

      this.userName = $cookies.get('blocChatCurrentUser') || null;
      $scope.$watch(() => $cookies.get('blocChatCurrentUser'), (newValue) => this.userName = newValue);






      this.displayRoom = function (Room){
        this.activeRoom = Room.$id;
        this.messages = Message.getByRoomId(this.activeRoom);

      };




    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$scope', HomeCtrl]);
})();
