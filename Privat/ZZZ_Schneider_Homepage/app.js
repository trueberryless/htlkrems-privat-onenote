$(document).ready(function() {

    //Variablen
    let root = document.documentElement;
    let timer;

    //Bugfixes
    root.style.setProperty('--beforecolor-header', "#ffffff");
    function Bugfix_Shortcuts() {
        if(window.scrollX != 0 || window.scrollX != window.screen.width * 2 || window.scrollX != window.screen.width * 4) {              
            if(window.scrollX > window.screen.width && window.scrollX < window.screen.width * 3) {
                window.scrollTo({left: window.screen.width * 2, behavior: 'smooth'});
            }                
            else if(window.scrollX > window.screen.width * 3) {
                window.scrollTo({left: window.screen.width * 4, behavior: 'smooth'});
            }
            else {
                window.scrollTo({left: 0, behavior: 'smooth'});
            }         
        }
    }
    Bugfix_Shortcuts();

    if(window.scrollY < window.screen.height * 0.1) {
        $(".backtotop").removeClass("backtotop1");
        $(".backtotop").addClass("backtotop2");        
    } else {
        $(".backtotop").removeClass("backtotop2");
        $(".backtotop").addClass("backtotop1");
    }

    if(window.scrollY == 0) {
        $(".hinterheaderaufsonne").removeClass("hinterheaderaufsonne1");
        $(".hinterheaderaufsonne").addClass("hinterheaderaufsonne2");  
    } else {
        $(".hinterheaderaufsonne").removeClass("hinterheaderaufsonne2");
        $(".hinterheaderaufsonne").addClass("hinterheaderaufsonne1");
    }
    
    $("#page").css("width", window.screen.width * 5);
    $("#page").css("height", window.screen.height * 3.1);
    

    // erst entkommentaren, wenn fertig mit programmieren!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // if(window.scrollY != 0) {
    //     window.scrollTo({top: 0, behavior: 'smooth'});
    // }


    // browser detect
    if(BrowserDetect.browser === 'OmniWeb' || 
        BrowserDetect.browser === 'Safari' || 
        BrowserDetect.browser === 'Opera' ||
        BrowserDetect.browser === 'iCab' || 
        BrowserDetect.browser === 'Konqueror' || 
        BrowserDetect.browser === 'Firefox' || 
        BrowserDetect.browser === 'Camino' || 
        BrowserDetect.browser === 'Netscape' || 
        BrowserDetect.browser === 'Explorer' || 
        BrowserDetect.browser === 'Mozilla' || 
        BrowserDetect.browser === 'Windows' || 
        BrowserDetect.browser === 'Mac' || 
        BrowserDetect.browser === 'iPhone/iPod' || 
        BrowserDetect.browser === 'Linux') {
        alert('Wir können nicht garantieren, dass unsere Homepage mit diesem Browser ordnungsgemäß funktioniert! Wenn Sie die volle Vielfalt unserer Homepage genießen wollen, nutzen Sie bitte Google Chorme!');
    }

    //Animationen
    const tl = new TimelineMax();
    if(window.scrollX == 0 && window.scrollY == 0) {
        tl.fromTo($("#wadsh"), 2, {transform: "translateX(-70px)", opacity: "0%"}, {transform: "translateX(0px)", opacity: "100%", ease: Power2.easeInOut}, "+=1")
        .fromTo($(".shortcut"), 1, {opacity: "0%"}, {opacity: "100%", ease: Power2.easeInOut}, "-=0.5")
        .fromTo($(".backtotop"), 0.5, {opacity: "0%"}, {opacity: "100%", ease: Power2.easeInOut}, "-=0.5");
    }

    //Shortcuts Klick-Funktions
    $("#sc-hom").click(function() {
        window.scrollTo({left: 0, behavior: 'smooth'});
        var millisecondsToWait = 1000;
        setTimeout(function() {
            Bugfix_Shortcuts();
        }, millisecondsToWait);
           
    });
    $("#sc-fam").click(function() {
        window.scrollTo({left: window.screen.width * 2, behavior: 'smooth'});
        var millisecondsToWait = 1000;
        setTimeout(function() {
            Bugfix_Shortcuts();
        }, millisecondsToWait);
    });
    $("#sc-sch").click(function() {
        window.scrollTo({left: window.screen.width * 4, behavior: 'smooth'});
        var millisecondsToWait = 1000;
        setTimeout(function() {
            Bugfix_Shortcuts();
        }, millisecondsToWait);  
    });

    //Pfeildrehen
    function Update() {
        let div = document.querySelector(".backtotop");
        if(div.classList.contains("backtotop2")) {
            backtotop1();
            var millisecondsToWait = 1;
            setTimeout(function() {
                backtotop2();            
            }, millisecondsToWait);
        }
        else {
            backtotop2();
            var millisecondsToWait = 1;
            setTimeout(function() {
                backtotop1();            
            }, millisecondsToWait);
        }        
    }
    timer = setInterval(Update, 30000); //je niedriger, desto mehr Animationen!

    //BacktoTOP Funktions
    $(".backtotop").click(function() {
        if(window.scrollY < window.screen.height * 0.1) {
            window.scrollTo({top: window.screen.height * 0.84, behavior: 'smooth'});
            var millisecondsToWait = 1000;
            setTimeout(function() {
                Bugfix_Shortcuts();
            }, millisecondsToWait);  
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});    
            var millisecondsToWait = 1000;
            setTimeout(function() {
                Bugfix_Shortcuts();
            }, millisecondsToWait);          
        }        
    });

    Bugfix_Shortcuts();
});

//wenn gescrollt wird...
document.addEventListener ('scroll',function () {
    //backtotop-Pfeil
    if(window.scrollY >= window.screen.height * 0.1) {
        backtotop1();
    } else {
        backtotop2();
    }

    //hinterheaderaufsonne-DIV
    if(window.scrollY != 0) {
        hinterheaderaufsonne1();
        var millisecondsToWait = 1000;
        setTimeout(function() {
            Bugfix_Shortcuts();
        }, millisecondsToWait);  
    } else {
        hinterheaderaufsonne2();
        var millisecondsToWait = 1000;
        setTimeout(function() {
            Bugfix_Shortcuts();
        }, millisecondsToWait);  
    }
});

function backtotop1() {
    $(".backtotop").removeClass("backtotop2");
    $(".backtotop").addClass("backtotop1");
    var millisecondsToWait = 1200;
    setTimeout(function() {
        $(".backtotop").css("bottom", "8vh");
        $(".backtotop").css("right", "6vw");
        $(".backtotop").css("transform", "translateX(0) rotate(0)");
    }, millisecondsToWait);
}

function backtotop2() {
    $(".backtotop").removeClass("backtotop1");
    $(".backtotop").addClass("backtotop2");
    var millisecondsToWait = 1200;
    setTimeout(function() {
        $(".backtotop").css("bottom", "20vh");
        $(".backtotop").css("right", "50vw");
        $(".backtotop").css("transform", "translateX(50%) rotate(180deg)");
    }, millisecondsToWait);
}

function hinterheaderaufsonne1() {
    $(".hinterheaderaufsonne").removeClass("hinterheaderaufsonne2");
    $(".hinterheaderaufsonne").addClass("hinterheaderaufsonne1");
    var millisecondsToWait = 500;
    setTimeout(function() {
        $(".hinterheaderaufsonne").css("transform", "rotate(-90deg)");
    }, millisecondsToWait);
}

function hinterheaderaufsonne2() {
    $(".hinterheaderaufsonne").removeClass("hinterheaderaufsonne1");
    $(".hinterheaderaufsonne").addClass("hinterheaderaufsonne2");
    var millisecondsToWait = 500;
    setTimeout(function() {
        $(".hinterheaderaufsonne").css("transform", "rotate(0)");
    }, millisecondsToWait);
}