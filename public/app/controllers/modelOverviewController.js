app.controller('modelOverviewController', function($http,  $mdDialog, $scope, $window){
    
    let self = this;
    
    const noPoolingRef = angular.element('<a href ="https://arxiv.org/pdf/1707.09482.pdf">1</a>');
    console.log(noPoolingRef);
    self.modelsList = [
        {
            name:'VGG-16 Architecture',
            id: 'vggModel',
            description: `One of the architecture winner in the ImageNet Competition (ILSVRC-2014), developed at Oxford by the Visual Geometry group. Highly accurate and widely used for classification and detection
                         our approach implements a fully connected VGG-16 model with different upsampling layers to recover the original image.`,
            show: false,
            img: 'https://s3.eu-west-3.amazonaws.com/cnn-art/vgg.jpg'
        },
        {
            name:'Architecture without pooling',
            id: 'noPoolingPanel',
            description: `The image decolorization transformation
            only affects the color of the input images, and there
            is no need to incorporate downsampling architecture in the
            network`,
            show: false,
            img: 'https://s3.eu-west-3.amazonaws.com/cnn-art/noPooling.jpg'
        },
        {
            name:'Few pooling layers',
            id: 'somePoolingPanel',
            description: 'Few Pooling layers with average pooling to avoid important spatial loss with small upsampling layers.',
            show: false,
            img: 'https://s3.eu-west-3.amazonaws.com/cnn-art/mixed.jpg'
        }
    ]

    self.showPanel = (e, model) => {
        let elementIcon = e.target;
        if ( model.show == false){
            elementIcon.setAttribute("class", "fa fa-times");
            model.show = true;
            const panel = angular.element(document.querySelector(`#${model.id}`));
            panel.addClass('animated slideInDown');
        } else if (model.show == true){
            elementIcon.setAttribute("class", "fa fa-arrow-circle-down");
            model.show = false;
            const panel = angular.element(document.querySelector(`#${model.id}`));
            panel.addClass('animated slideOutUp');
        }
    };
});