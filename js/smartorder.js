
        var btn = document.getElementsByClassName('btn');
        var image = document.getElementById('image');

        var mobileImg = new Array(
            'img/mobile1.png',
            'img/mobile2.png',
            'img/mobile3.png'
        );

        for(let i=0; i<btn.length; i++){
            btn[i].onclick = function(){
                image.src = mobileImg[i];
                let click = document.getElementsByClassName('on');
                click[0].className = click[0].className.replace('on','');
                this.className += ' on';
            };
        }
