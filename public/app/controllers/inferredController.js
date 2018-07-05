app.controller('inferredController', function(){
    const self = this;

    self.tabs =[
        {
            label: 'face',
            modelsList: [
                {
                    title: 'Original',
                    imageName: 'https://s3.eu-west-3.amazonaws.com/cnn-art/robeIR.jpg',
                    trainingResult: 'N/A',
                    testResult: 'N/A',
                    modelImg: 'N/A',
                    histogram: 'histograms/face_original_histogram.png'
                },
                {
                    title: '5 Convolution [64,128,128,256,128]',
                    imageName: 'face_face_5conv.png',
                    trainingResult: 'trainResult/5conv_result.png',
                    testResult: '261.71',
                    modelImg: 'models/5conv(64,128,128,256,128).png',
                    histogram: 'histograms/5conv(64,128,128,256,128).png'
                },
                {
                    title: '5 Convolution [64,128,128,128,64]',
                    imageName: 'face_face_5conv2.png',
                    trainingResult: 'trainResult/5conv2_result.png',
                    testResult: '162.56',
                    modelImg: 'models/5conv(64,128,128,128,64).png',
                    histogram: 'histograms/5conv(64,128,128,128,64).png'
                },
                {
                    title: '6 Convolution [64,128,256,256,128,64]',
                    imageName: 'face_face_6conv.png',
                    trainingResult: 'trainResult/6conv_result.png',
                    testResult: '240.84',
                    modelImg: 'models/6conv(64,128,256256,128,64).png',
                    histogram: 'histograms/6conv(64,128,256,256,128,64).png'
                },
                {
                    title: '5 Convolution [32,64,128,128,64,64]',
                    imageName: 'face_face_face_5conv_piramid.png',
                    trainingResult: 'trainResult/5conv_piramid.png',
                    testResult: '265.33',
                    modelImg: 'models/5conv(32,64,128,64,64).png',
                    histogram: 'histograms/5conv(32,64,128,64,64).png'
                },
                {
                    title: '6 Convolution [32,64,128,64,32,1]',
                    imageName: 'face_face_6conv_piramid.png',
                    trainingResult: 'trainResult/6conv_piramid.png',
                    testResult: '120.91',
                    modelImg: 'models/6conv(32,64,128,64,32,32).png',
                    histogram: 'histograms/6conv(32,64,128,64,32,32).png'
                },
                {
                    title: '6 Convolution [32,64,128,64,32,1]',
                    imageName: 'face_face_6conv_piramid_np.png',
                    trainingResult: 'trainResult/6conv_piramid_np.png',
                    testResult: '112.79',
                    modelImg: 'models/6conv(32,64,128,64,32,1)np.png',
                    histogram: 'histograms/6conv(32,64,128,64,32,1)np.png'
                },
                {
                    title: '6 Convolution [16,32,64,32,16,1]',
                    imageName: 'results_face_6conv_16_64.png',
                    trainingResult: 'trainResult/6conv_16_to_64.png',
                    testResult: '103.77',
                    modelImg: 'models/6conv(6,32,64,32,16,1).png',
                    histogram: 'histograms/6conv(6,32,64,32,16,1).png'
                },            
            ]
        },
        {
            label: 'Arch',
            modelsList:[
                { 
                    title: 'Original Arch',
                    imageName: 'arch/arch-IR_png.png',
                    trainingResult: 'N/A',
                    testResult: 'N/A',
                    modelImg: 'N/A',
                    histogram: 'histograms/arch_original.png'
                },
                {
                    title: '6 Conv (64,128,128,128,64,1)',
                    imageName: 'arch/results_arch_6conv_64_128_64.png',
                    trainingResult: 'trainResult/arch_64_6conv_(64,128,128,128,64,1).png',
                    testResult: '374.10',
                    modelImg: 'models/arch_64_6conv_(64,128,128,128,64,1).png',
                    histogram: 'histograms/arch_6conv(64,128,128,128,64,1).png'
                },
                {
                    title: '6 Conv (32,64,128,64,32,1)',
                    imageName: 'arch/results_arch_6conv_32_64_32.png',
                    trainingResult: 'trainResult/arch_64_6conv_(32,64,128,64,32,1).png',
                    testResult: '118.75',
                    modelImg: 'models/arch_64_6conv_(32,64,128,64,32,1).png',
                    histogram: 'histograms/arch_64_6conv_(32,64,128,64,32,1).png'
                },
                {
                    title: '6 Conv (32,64,256,64,32,1)',
                    imageName: 'arch/results_arch_6conv_32_256_32.png',
                    trainingResult: 'trainResult/arch_64_6conv_(32,64,256,64,32,1).png',
                    testResult: '129.49',
                    modelImg: 'models/arch_64_6conv_(32,64,256,64,32,1).png',
                    histogram: 'histograms/arch_64_6conv_(32,64,256,64,32,1).png'
                },
            ]
        },
        {
            label: 'Robe',
            modelsList:[
                { 
                    title: 'Robe Original',
                    imageName: 'robe/00-17-IR-HI-AT-robe1_png.png',
                    trainingResult: 'N/A',
                    testResult: 'N/A',
                    modelImg: 'N/A',
                    histogram: 'histograms/robe_original.png'
                },
                { 
                    title: '6 Conv (32,64,128,64,32,1)',
                    imageName: 'robe/results_robe_6conv_32_128_32.png',
                    trainingResult: 'trainResult/robe_64_6conv_(32,64,128,64,32,1).png',
                    testResult: '340.92',
                    modelImg: 'models/robe_64_6conv_(32,64,128,64,32,1).png',
                    histogram: 'histograms/robe_64_6conv_(32,64,128,64,32,1).png'
                },
                { 
                    title: '6 Conv (32,64,256,64,32,1)',
                    imageName: 'robe/results_robe_6conv_32_256_32.png',
                    trainingResult: 'trainResult/robe_64_6conv_(32,64,256,64,32,1).png',
                    testResult: '694.87',
                    modelImg: 'models/robe_64_6conv_(32,64,256,64,32,1).png',
                    histogram: 'histograms/results_robe_6conv_32_256_32.png'
                },
                { 
                    title: '6 Conv (64,128,128,128,64,1)',
                    imageName: 'robe/results_robe_6conv_64_128_128_64.png',
                    trainingResult: 'N/A    ',
                    testResult: 'N/A',
                    modelImg: 'N/A',
                    histogram: 'N/A'
                },
            ]
        },
        {
            label: 'Background',
            modelsList:[
                { 
                    title: 'Original Background',
                    imageName: 'background/IR_background.png',
                    trainingResult: 'N/A',
                    testResult: 'N/A',
                    modelImg: 'N/A',
                    histogram: 'histograms/IR_background.png'
                },
                { 
                    title: '6 Conv (64,128,128,128,64,1)',
                    imageName: 'background/results_background_6conv_64_128_128_64.png',
                    trainingResult: 'trainResult/background_64_6conv_(64,128,128,128,64,1).png',
                    testResult: '66.50',
                    modelImg: 'models/background_64_6conv_(64,128,128,128,64,1).png',
                    histogram: 'histograms/results_background_6conv_64_128_128_64.png'
                },
                { 
                    title: '6 Conv (32,64,128,64,32,1)',
                    imageName: 'background/results_background_6conv_32_128_32.png',
                    trainingResult: 'trainResult/results_background_6conv_32_128_32.png',
                    testResult: '53.62',
                    modelImg: 'models/results_background_6conv_32_128_32.png',
                    histogram: 'histograms/results_background_6conv_32_128_32.png'
                },
                { 
                    title: '6 Conv (32,64,256,64,32,1)',
                    imageName: 'background/results_background_6conv_32_256_32.png',
                    trainingResult: 'trainResult/background_64_6conv_(32,64,256,64,32,1).png',
                    testResult: '51.53',
                    modelImg: 'models/background_64_6conv_(32,64,256,64,32,1).png',
                    histogram: 'histograms/results_background_6conv_32_256_32.png'
                },
            ]
        }
    ];

    self.openImage = (name) =>{
        const h= 400;
        const w= 400;
        window.open(`/publicReport?name=${name}`,`_blank` , 'width='+w+', height='+h+'');
    }

    self.btnAction = (name) => {
        console.log(name);
        self.imgType = name;
        self[name] = true;
      }  
 

});