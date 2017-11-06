(function() {
    function ModalCtrl($uibModal, Room) {
    this.newRoom = null;

    this.openModal = function () {
        $uibModal.open({
          templateUrl: '/../../templates/newRoomModal.html',
          controller: function ($scope, $uibModalInstance) {
            $scope.newRoomInput = "test123";

            $scope.addRoom = function (roomName) {
              $scope.newRoomInput = roomName;
              Room.add($scope.newRoomInput);
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
