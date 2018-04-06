app.controller('reportController', function($http, $mdDialog){
    let self = this;
    self.originalImages = [];
    self.size = 128;
    self.tabs =[
      {
        label: "Arch Old Data",
        title: "Overfitted data for the Arch",
        description: "",
        images:[
            { name: 'VIS_crop_registered',
            width:'3264',
            height:'2330',   
            initial_height: '1000',
            buttonText:'Arch VIS',
            tooltip: 'Arch Visual Data',
            scale:'28'
          },
          { name: 'IRR_crop_registered',
            width:'3264',
            height:'2330',
            initial_height: '1000',
            buttonText:'Arch IR',
            tooltip:'Infrared Arch RGB',
            scale:'28'
          },
          { name: 'IRRgray',
            width:'3264',
            height:'2330',
            initial_height: '1000',
            buttonText:'Arch IR Gray',
            tooltip:'Infrared Arch gray scale',
            scale:'28'
          },
          { 
            name: 'noPooling', 
            width:'3264',
            height:'2330',
            initial_height: '1000',
            buttonText:'Result Arch',
            tooltip:'Results without pooling architecture',
            scale:'28'
          },
        { name: 'noPoolingx3', 
          width:'3264',
          height:'2330',
          initial_height: '1000',
          buttonText:'Result Arch 3ch',
          tooltip:'Results without pooling architecture RGB',
          scale:'28'
        },
        { name: 'diff', 
          width:'3264',
          height:'2330',
          initial_height: '1000',
          buttonText:'Difference Color Arch',
          tooltip:'Difference Inference and original IR RGB',
          scale:'28'
        },
        { name: 'diffGrayNumpy', 
          width:'3264',
          height:'2330',
          initial_height: '1000',
          buttonText:'Difference Gray Arch',
          tooltip:'Difference Inference and original IR Grayscale',
          scale:'28'
        }
        ]
      },
      {
        label: "Arch New Data",
        title: "Arch infered with the data of the face and the robe",
        description: "",
        images:[
          {
            name: 'robe_face',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch Result new Data',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'robe_face_diff',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch new Diff',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'denoised_infered_arc',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch new Denoised',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'denoised_infered_arc_x2',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch new Denoised x2',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'acrh_diff_denoised',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch denoised difference',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'acrh_diff_denoised_both',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch denoised difference both',
            tooltip:'',
            scale:'28'

          },          
          {
            name: 'acrh_diff_highlight_x2',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch new Diff denoised x2',
            tooltip:'',
            scale:'28'
          },
          {
            name: 'acrh_diff_highlight',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch denoised higlight',
            tooltip:'',
            scale:'28'
          },          
          {
            name: 'acrh_diff_highlight_x2_both',
            width: '3264',
            height: '2330',
            initial_height: '1000',
            buttonText: 'Arch diff highlight x2 both',
            tooltip:'',
            scale:'28'
          },
        ]
      },
      {
        label: "Face",
        title: "Face infered with the data of the face and the robe",
        description: "",
        images:[
          { name: 'face_vis',
          width:'7967',//7967
          height:'7967',
          initial_height: '3000',
          buttonText:'Face',
          tooltip:'',
          scale:'16'
        },
        { name: 'face_ir',
          width:'7967',
          height:'7967',
          initial_height: '3000',
          buttonText:'Face IR',
          tooltip:'',
          scale:'16'
        },
        { name: 'robe_face_infered_face',
          width:'7967',
          height:'7967',
          initial_height: '3000',
          buttonText:'Face Infered',
          tooltip:'',
          scale:'16'
        },
        { name: 'robe_face_infered_face_diff',
          width:'7967',
          height:'7967',
          initial_height: '3000',
          buttonText:'Face difference',
          tooltip:'',
          scale:'16'
        },
        {
          name:'face_numpy_diff_inverted',
          width:'7967',
          height:'7967',
          initial_height: '3000',
          buttonText:'Face difference inverted',
          tooltip:'',
          scale:'16'
        }
        ]
      },
      {
        label: "Robe",
        title: "Robe infered with the data of the face and the robe",
        description: "",
        images:[
          { name: 'robe_vis',
          width:'6000',
          height:'6000',
          initial_height: '2500',
          buttonText:'Robe',
          tooltip:'',
          scale:'16'
        }, 
        { name: 'robe_ir',
          width:'6000',
          height:'6000',
          initial_height: '2500',
          buttonText:'Robe IR',
          tooltip:'',
          scale:'16'
        },
        {
          name:'robe_face_robe_infered',
          width:'6000',
          height:'6000',
          initial_height: '2500',
          buttonText:'Robe Infered',
          tooltip:'',
          scale:'16'
        },
        {
          name:'robe_numpy_diff',
          width:'6000',
          height:'6000',
          initial_height: '2500',
          buttonText:'Robe Numpy Difference',
          tooltip:'',
          scale:'16'
        },
        {
          name: 'robe_numpy_diff_inverted',
          width:'6000',
          height:'6000',
          initial_height: '2500',
          buttonText:'Robe Numpy Difference Inverted',
          tooltip:'',
          scale:'16'
        }
        ]
      },
    ]
   
    self.loadMore =(img, limit) =>
    {
      let height = parseInt(img.initial_height);
      const difference = limit - height;
      if (height < limit){
        if(difference - 1000> 1000)
          img.initial_height = parseInt(img.initial_height) + 1000;
        else
        img.initial_height = parseInt(img.initial_height)  + difference;
      }
    }
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

    self.showDialog = function(ev, num, name) {
        console.log(name);
        $mdDialog.show({
          controller: DialogController,
          template:'<md-dialog style="height:500px; width:500px;"  aria-label="Mango (Fruit)">'+
                        '<md-toolbar>'+
                        '<div class="md-toolbar-tools">'+
                          '<h2>Results for '+ num +'</h2>'+
                          '<span flex></span>'+
                          '<md-button class="md-icon-button" ng-click="cancel()">'+
                            '<md-icon  aria-label="Close dialog"></md-icon>'+
                         '</md-button>'+
                        '</div>'+
                      '</md-toolbar>'+
                      '<md-dialog-content layout-align="center center" flex layout="column">'+
                          '<div class="md-dialog-content" layout-align="center center" layout="row">'+
                            '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                              '<img  class="hover01"  ng-src="/loadImage?num='+num+'&name='+name+'">'+
                              '<label>VIS</label>'+
                            '</div>'+                           
                            // '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  + 
                            //     '<img class="hover01" ng-src="/loadImage?num='+num+'&name='+name+'">'+
                            //     '<label>IRR</label>'+
                            // '</div>'+
                            // '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                            //   '<img class="hover01" ng-src="/loadImage?num='+num+'&name='+name+'">'+
                            //   '<label>Infered 1ch</label>'+
                            // '</div>'+
                            // '<div layout="column" style="margin-right:10px" layout-align="center center" layout="column">'  +
                            //   '<img class="hover01" ng-src="/loadImage?num='+num+'&name='+name+'">'+
                            //   '<label>Infered 3ch</label>'+
                            // '</div>'+
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
