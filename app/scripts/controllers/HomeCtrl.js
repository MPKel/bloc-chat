(function() {
    function HomeCtrl(Room, Message) {

      this.rooms = Room.all;

      this.activeRoom = null;




      this.displayRoom = function (index){
        this.activeRoom = this.rooms[index].$id;
        Message.getByRoomId(this.activeRoom);
        this.query = Message.query;
      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
