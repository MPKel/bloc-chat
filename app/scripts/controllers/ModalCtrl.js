(function() {
    function ModalCtrl($uibModal, Room) {
    this.newRoom = null;

    this.openModal = function () {
        $uibModal.open({
          templateUrl: '/../../templates/newRoomModal.html',
          controller: function ($scope, $uibModalInstance) {
            $scope.newRoomInput = "default123";

            $scope.addRoom = function (roomName) {
              Room.add(roomName);
              $uibModalInstance.close();
            };
            $scope.ok = function () {
              $uibModalInstance.close();
            };

            $scope.cancel = function () {
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
