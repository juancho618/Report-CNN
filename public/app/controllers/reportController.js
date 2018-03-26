app.controller('reportController', function($http, $mdDialog){
    let self = this;
    self.originalImages = [];
    

    
    //width and heigth of the images
    self.w_list = [];
    self.h_list = [];
    for (var i = 0; i <= 50; i++) {
      self.w_list.push(i);
    }

    for (var x = 0; x < 36; x++) {
      self.h_list.push(x);
    }

    $http.get('/data').then(res => {
        self.originalImages =  res.data;
    });

    self.showDialog = function(ev, name) {
     
        $mdDialog.show({
          controller: DialogController,
          template:'<md-dialog style="height:500px; width:500px;"  aria-label="Mango (Fruit)">'+
                        '<md-toolbar>'+
                        '<div class="md-toolbar-tools">'+
                          '<h2>Results for '+ name +'</h2>'+
                          '<span flex></span>'+
                          '<md-button class="md-icon-button" ng-click="cancel()">'+
                            '<md-icon  aria-label="Close dialog"></md-icon>'+
                         '</md-button>'+
                        '</div>'+
                      '</md-toolbar>'+
                      '<md-dialog-content layout-align="center center" flex layout="column">'+
                          '<div class="md-dialog-content" layout-align="center center" layout="row">'+
                            '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                              '<img  class="hover01"  ng-src="/imageVIS?num='+name+'">'+
                              '<label>VIS</label>'+
                            '</div>'+                           
                            '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  + 
                                '<img class="hover01" ng-src="/imageIRR?num='+name+'">'+
                                '<label>IRR</label>'+
                            '</div>'+
                            '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                              '<img class="hover01" ng-src="/imageNoPooling?num='+name+'">'+
                              '<label>Infered 1ch</label>'+
                            '</div>'+
                            '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                              '<img class="hover01" ng-src="/imageNoPoolingx3?num='+name+'">'+
                              '<label>Infered 3ch</label>'+
                            '</div>'+
                          '</div>'+
                      '</md-dialog-content>'+
                    '</md-dialog>',
          // templateUrl: 'dialog',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
      };

    
      // self.loadImage = () => {
      //     $http.get('/image').then(res => {
      //       console.log(res.data);
      //   });
      // };
      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
    
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
    
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }
});
