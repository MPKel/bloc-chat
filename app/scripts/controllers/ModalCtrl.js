(function() {
    function ModalCtrl($uibModal, Room) {
    this.newRoom = null;

    this.openModal = function () {
        $uibModal.open({
          templateUrl: '/../../templates/newRoomModal.html',
          controller: function ($uibModalInstance) {
            this.newRoomInput = "default123";

            this.addRoom = function(roomName) {
              Room.add(roomName);
              $uibModalInstance.close();
            };
            this.ok = function () {
              $uibModalInstance.close();
            };

            this.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          },
          controllerAs: "newRoom"
        })
      };
    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
