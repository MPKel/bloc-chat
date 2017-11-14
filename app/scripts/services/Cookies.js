(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/../../templates/newUserModal.html',
        controller: function ($uibModalInstance) {


          this.setUser = function(userName) {
            if(userName.length > 0)
            {
              $cookies.put('blocChatCurrentUser', userName);
              $uibModalInstance.close();
            }
          };
        },
        controllerAs: "newUser",
        backdrop  : true,
        keyboard  : false
      })

    }


    //else set name
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
