app.controller('modelsController', function($http,  $mdDialog, $scope){
    
    let self = this;


    self.addCode = (path) => {
        let code = angular.element( document.querySelector( '#toBeAppened' ) );
        return $http({
            method: 'POST',
            url: '/fileCode',   
            data: {route: path},
        }).then(res => {
            self.myCode = res.data;
        }, error => console.log(error));
    }
    function DialogController($scope, $mdDialog) {
        $scope.myCode = self.myCode;
        $scope.hide = function() {
          $mdDialog.hide();
        };
    }
    self.showCode = (ev) => {
       $mdDialog.show({
          controller: DialogController,
          template:'<md-dialog style="height:500px; width:500px;"  aria-label="Mango (Fruit)">'+
                        '<md-toolbar>'+
                        '<div class="md-toolbar-tools">'+
                          '<h2>resultus for '+ 'Code' +'</h2>'+
                          '<span flex></span>'+
                          '<md-button class="md-icon-button" ng-click="cancel()">'+
                            '<md-icon  aria-label="Close dialog"></md-icon>'+
                         '</md-button>'+
                        '</div>'+
                      '</md-toolbar>'+
                      '<md-dialog-content layout-align="center center" flex layout="column">'+
                      '<div hljs hljs-source="myCode"></div>'+
                      '</md-dialog-content>'+
                    '</md-dialog>',
          // templateUrl: 'dialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
    }
});