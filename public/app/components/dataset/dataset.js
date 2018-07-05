app.component("dataset", {
    templateUrl: '/public/app/components/dataset/template.html',
    bindings: {},
    controller: function(){

        this.openImage = (url) => {
            const h = screen.height;
            const w = screen.width;
            window.open(url, '_blank', 'width=' + w + '', 'height=' + h + '');
        }
        
        this.trainSet = [
            {
                name: 'Robe',
                urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/robeVis.jpg',
                urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/robeIR.jpg',
                width: '5000',
                height: '5000'
            },
            {
                name: 'Face',
                urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/faceVis.jpg',
                urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/faceIr.jpg',
                width: '7967',
                height: '7967'
            },
            {
                name: 'Background',
                urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/VIS_background.jpg',
                urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/IR_background.jpg',
                width: '6000',
                height: '6000'
            },
            {
                name: 'Arch',
                urlVIS: 'https://s3.eu-west-3.amazonaws.com/cnn-art/arch-VIS.jpg',
                urlIR: 'https://s3.eu-west-3.amazonaws.com/cnn-art/arch-IR.jpg',
                width: '4000',
                height: '5000'
            }
        ];
    },
    controllerAs: 'vm'
})