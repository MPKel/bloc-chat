(function() {
    function HomeCtrl(Room, Message) {

      this.rooms = Room.all;

      this.activeRoom = null;




      this.displayRoom = function (Room){
        this.activeRoom = Room.$id;
        this.messages = Message.getByRoomId(this.activeRoom);

      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
