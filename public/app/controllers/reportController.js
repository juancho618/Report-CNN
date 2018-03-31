app.controller('reportController', function($http, $mdDialog){
    let self = this;
    self.originalImages = [];
    self.Math = window.Math;
    self.images = [
      { name: 'VIS_crop_registered',
        width:'3264',
        height:'2330',
        buttonText:'Arch VIS'
      },
      { name: 'IRR_crop_registered',
        width:'3264',
        height:'2330',
        buttonText:'Arch IR'
      },
      { name: 'IRRgray',
        width:'3264',
        height:'2330',
        buttonText:'Arch IR Gray'
      },
      { name: 'noPooling', 
        width:'3264',
        height:'2330',
        buttonText:'Result Arch'
      },
      { name: 'noPoolingx3', 
        width:'3264',
        height:'2330',
        buttonText:'Result Arch 3ch'
      },
      { name: 'diff', 
        width:'3264',
        height:'2330',
        buttonText:'Difference Color Arch'
      },
      { name: 'diffGrayNumpy', 
        width:'3264',
        height:'2330',
        buttonText:'Difference Gray Arch'
      },
      { name: 'face_vis',
        width:'7967',
        height:'7967',
        buttonText:'Face'
      },
      { name: 'robe_vis',
        width:'6000',
        height:'6000',
        buttonText:'Robe'
      }
    ]
    self.getNumber = (n) =>{
      console.log(n);
      var step = 1;
      var input = [];
      for (var i = 0; i <= n; i += step) {
          input.push(i);
      }
      return input;
    }

    self.btnAction = (name) => {
      console.log(name);
      self.imgType = name;
      self[name] = true;
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
