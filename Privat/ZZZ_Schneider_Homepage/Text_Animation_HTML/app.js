// const ourstring = document.querySelector(".textanim").innerHTML;
// alert(document.querySelector(".textanim"));



function myFunction() {


    $('p').each(function(){
        // var ourstring = "<span style='--i:" + $(this).index() + ";'>$&</span>";
        // $(this).html($(this).text().replace(/(\S)/g, ourstring));
        $(this).html($(this).text().replace(/(\S)/g, "<span>$&</span>"));
    });

    $('span').each(function(){
        var ourstring = "<span style='--i:" + $(this).index() + ";'>$&</span>";
        $(this).html($(this).text().replace(/(\S)/g, ourstring));
        // $(this).html($(this).text().replace(/(\S)/g, "<span>$&</span>"));
    });

    // $('span').each(function(){
    //     $(this).html($(this).var.replace(":;", ":" + $(this).index().toString() + ";"));
    // });

    // $('span').each(function(){
    //     $(this).animate([
    //         { transform: "translateY(20px)", opacity: "0"},
    //         { transform: "translateY(0px)", opacity: "1"}
    //     ], {
    //         duration: 1000,
    //         // easing: "ease-out",
    //         delay: $(this).index() * 100,
    //         iterations: Infinity,
    //         direction: 'normal',
    //         fill: 'forwards'
    //     })
    // });
}

