$(function(){
  var container = $('.container')
      bdy = $('body'),
      controller = new ScrollMagic.Controller(),
      wHeight = window.innerHeight;
  //     cnWidth = container.width(),
  //     cnHeight = container.height(),
  //     wWidth = window.innerWidth,
  //     pos = container.position();
  //     middleSide = wWidth/2 - cnWidth/2,
  //     rightSide = wWidth - 2*cnWidth,
  //     leftSide =  cnWidth,
  //     topSide = "5%",
  //     centerSide = (cnHeight + wHeight)/2 - cnHeight;
  //     bottomSide = wHeight - 2*cnHeight;
  //
  // console.log(cnWidth,cnHeight,wWidth,wHeight,pos);

  function someCalculation(){
    var pageYOffset = window.pageYOffset;
    planeWhril(pageYOffset);
  }

  function main(){

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin("#background")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin("#plane")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin(".wind")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin(".css")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin(".html")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setPin(".js")
    .addTo(controller);
  }
  main();

  function planeWhril(p){
    var plane = $('#plane');

    var time = new TimelineMax();

    time
      .to(plane,0.5,{
        rotationY:360,
        rotationZ:360
      })
      .to(plane,0.5,{
        scale:0,
        transformOrigin:"50% 50%",
        onComplete:planeAnimation,
        onCompleteParams:[p+150]
      },"-=0.5");

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:100,
      offset:p
    })
    .setTween(time)
    .addIndicators()
    .addTo(controller)

  }

  function planeAnimation(p1){
    var plane = $('#plane');

    TweenLite.set('#lwing',{
      borderBottom:"50px solid green"
    });

    TweenLite.set('#rwing',{
      borderBottom:"50px solid green"
    });

    var time = new TimelineMax({paused:true});

    time
      .to(plane,0.5,{
        rotationY:0,
        rotationZ:0,
        scale:1
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:100,
      offset:p1
    })
    .setTween(time.play())
    .addTo(controller)
  }


  function cloudAnimation(){
    var time = new TimelineMax({paused:true});
    time
      .to('object',20,{
        scale:1.2
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"1000%"
    })
    .setTween( time.play())
    .addIndicators()
    .addTo(controller)
  }
  cloudAnimation();

  function windAnimation(){
    var time = new TimelineMax();

    time
      .fromTo("#lw1",0.5,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      })

      .fromTo("#lw2",1.2,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=0.5")

      .fromTo("#lw3",1,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1.2")

      .fromTo("#rw1",0.5,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1")

      .fromTo("#rw2",1,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=0.5")

      .fromTo("#rw3",1.2,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1")

      .fromTo("#rw4",0.8,{
        rotationY:"90deg",
        z:"-10000vh",
        opacity:1
      },{
        rotationY:"90deg",
        z:"500vh",
        opacity:1
      },"-=1.2");

    var height = wHeight * 2;

    for(var i = 0;i < 5;i++,height=wHeight*2){
      height *= i;
      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:"200%",
        offset:height
      })
      .setTween(time)
      .addIndicators()
      .addTo(controller);
    }

  }
  windAnimation();

  function wordAnimation(){
    var words = $('.wording');

    TweenLite.to(words,1,{
      opacity:1,
      y:"-=10px",
      delay:5.5
    })

    var time = new TimelineMax({paused:true});

    time
      .to(words,1,{
        opacity:0,
        y:"-=20px"
      });

    var scene = new ScrollMagic.Scene({
      triggerElement:bdy,
      triggerHook:0,
      duration:"30%",
      reverse:false
    })
    .setTween(time.play())
    .addIndicators()
    .addTo(controller);
  }
  wordAnimation();

  function cssLogoAnimation(){
    var cssl = $('.css');

    var time = new TimelineMax();

    time
      .to(cssl,5,{
        scale:1
      })
      .to(cssl,5,{
        left:"50%",
        x:"-50%",
        top:"50%",
        y:"-50%"
      })
      .to(cssl,1,{
        scale:0,
        rotationY:360,
        rotation:360,
        rotationZ:360,
        transformOrigin:"100% 50%",
        onStart:someCalculation
      },"-=2");

      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:"200%",
        offset:wHeight
      })
      .setTween(time)
      .addTo(controller);
  }
  cssLogoAnimation();

  function htmlLogoAnimation(){
    var htmll = $('.html')

    var time = new TimelineMax();

    time
      .to(htmll,5,{
        scale:1
      })
      .to(htmll,5,{
        top:"50%",
        y:"-50%",
        left:"50%",
        x:"-50%"
      })
      .to(htmll,1,{
        scale:0,
        rotationY:360,
        rotation:180,
        rotationZ:360,
        transformOrigin:"top"
      },"-=2");

      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:"200%",
        offset:wHeight
      })
      .setTween(time)
      .addTo(controller);
  }
  htmlLogoAnimation();

  function jsLogoAnimation(){
    var jsl = $('.js');

    var time = new TimelineMax();

    time
      .to(jsl,5,{
        scale:1
      })
      .to(jsl,5,{
        left:"50%",
        x:"-50%",
        top:"50%",
        y:"-50%"
      })
      .to(jsl,1,{
        scale:0,
        rotationY:360,
        rotation:360,
        rotationZ:360,
        transformOrigin:"0% 50%",
        force3D:true
      },"-=2");

      var scene = new ScrollMagic.Scene({
        triggerElement:bdy,
        triggerHook:0,
        duration:"200%",
        offset:wHeight
      })
      .setTween(time)
      .addTo(controller);
  }
  jsLogoAnimation();
});

// (function give(){
//   var wWidth = window.innerWidth;
//   var wHeight = window.innerHeight;
//   var position = $('.container').position();
//   setTimeout(function(){
//     console.log(position);
//   },2000);
// })();
// var container = $('.container')[0];
// var rect = container.getBoundingClientRect();
// console.log(rect.top);
// setInterval(function(){
//   console.log(container.position.left)
// },1000)

// window.onresize = function(){
// console.log(window.innerWidth);
// }

// var cont = $('.container')[0];
// var rect = cont.getBoundingClientRect();
// console.log(cont.clientHeight,cont.clientWidth,rect.top,rect.rightSide,rect.bottom,rect.left)
