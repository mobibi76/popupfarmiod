var Link={
    setColor:function(color){
        // var links=document.querySelectorAll('a');
        // var i=0;
        // while(i<links.length) {
        //     links[i].style.color=color;
        //     i=i+1;
        // }
        $('a').css('color',color);
    }
}

var Body={
    setBackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
    },
    setColor:function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color',color);
    }
}

function highContrast(self){
    if(self.value==='OFF'){
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='ON';
        Link.setColor('chocolate');
    } else {
        Body.setBackgroundColor('chocolate');
        Body.setColor('white');
        self.value='OFF';
        Link.setColor('white');
    }
}