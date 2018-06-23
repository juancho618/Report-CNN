app.controller('architectureController', function($http){
    const self = this;

    self.tabs =[
        {
            name: "16,64,128,64,16,1",
            results:[
                { 
                    name: 'face',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,128,64,16,1)_woback_face'
                },
                { 
                    name: 'robe',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,128,64,16,1)_woback_robe'
                },
                { 
                    name: 'background',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,128,64,16,1)_woback_background'
                },
                { 
                    name: 'arch',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,128,64,16,1)_woback_img'
                },
            ]
        },
        {
            name: "16,64,256,64,16,1",
            results:[
                { 
                    name: 'face',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,256,64,16,1)_woback_face'
                },
                { 
                    name: 'robe',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,256,64,16,1)_woback_robe'
                },
                { 
                    name: 'background',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,256,64,16,1)_woback_background'
                },
                { 
                    name: 'arch',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(16,64,256,64,16,1)_woback_img'
                },
            ]
        },
        {
            name: "32,64,128,64,32,1",
            results:[
                { 
                    name: 'face',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(32,64,128,64,32,1)_woback_face',
                    histogram: ''
                },
                { 
                    name: 'robe',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(32,64,128,64,32,1)_woback_robe',
                    histogram: ''
                },
                { 
                    name: 'background',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(32,64,128,64,32,1)_woback_background',
                    histogram: ''
                },
                { 
                    name: 'arch',
                    inferredImage: 'total_data_0.6_leaky_relu_6conv_(32,64,128,64,32,1)_woback_img',
                    histogram: ''
                },
            ]
        }
    ];

    self.openImage = (image) =>{
        console.log(image);
        const h= 400;
        const w= 400;
        window.open(`${image.currentSrc}`,`_blank` , 'width='+w+', height='+h+'');
    }
});