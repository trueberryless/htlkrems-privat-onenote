function OnLoad() {
    AddCopyButtons();
    AddWarningCloseButtons();
    GenerateOverview();
    PicRandomVogel();
    // Search();

    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');

    burger.addEventListener("click", () => {
        links.classList.toggle("open");
        burger.classList.toggle("open");
    });
}

function OnScroll() {
    if(window.scrollY < window.screen.height * .5) {
        $(".scrolltop").removeClass("isvisible");  
    } else {
        $(".scrolltop").addClass("isvisible");
    }

    UpdateDeeperView();
}

function AddCopyButtons() {
    for (var i = 0; i < $('.code').length; i++) {
        $(".code")[i].id = 'code-' + i;
        $('<div/>', { 'text': 'Copy', 'class': 'code-copy', 'id': 'code-copy-' + i, 'onclick': 'CopyToClipboardCode("#code-' + i + '"); ShowCopyAccess("#code-copy-' + i + '")'}).appendTo('#code-' + i);        
    }
}

function CopyToClipboardCode(id) {
    var code = document.querySelector(id);
    let text = code.textContent;
    text = text.replace(/^\s+|\s+$/gm,'');
    navigator.clipboard.writeText(text.substring(0, text.length - 5));
}

function ShowCopyAccess(id) {
    var code = document.querySelector(id);
    code.classList.add("copied");
    setTimeout(function(){ 
        code.classList.remove("copied");
    }, 3000); 
}

function AddWarningCloseButtons() {
    for (var i = 0; i < $('.warning').length; i++) {
        $(".warning")[i].id = 'warning-' + i;
        $(".warning")[i].classList.add("close");
        $('<div/>', { 'text': '<img href="svg/X.svg">', 'class': 'warning-close', 'onclick': 'CloseWarning("#warning-' + i + '")'}).appendTo('#warning-' + i);
        // var myVar = localStorage['warning_to_close'] || 'false';
        if(!localStorage.getItem((document.querySelector("#warning-" + i)))) {
            document.querySelector("#warning-" + i).classList.remove("close");
        }     
    }
}

function CloseWarning(id) {
    var warning_to_close = document.querySelector(id);
    localStorage.setItem(warning_to_close, true);
    // localStorage['warning_to_close'] = 'true';
    warning_to_close.classList.add("close");
}

function GenerateOverview() {
    //Overview LEFT
    // Chapter generieren
    var elements = document.querySelectorAll('.heading-chapter, .heading-directory');
    let j = 0, k = 0;
    for (var i = 0; i < elements.length; i++) {
        
        if(elements[i].className == "heading-chapter") {
            j++;
            elements[i].id = 'chapter-' + j;
            // div
            $('#overview').append($('<div/>', { 'class': 'link-chapter', 'id': 'link-chapter-' + j })); 
            //  button
            $('#link-chapter-' + j).append($('<button/>', { 'class': 'text-size-big dropdown', 'id': 'overview-btn-' + j, 'onclick': 'OverviewExpand("overview-btn-' + j + '")'}).append($('<abbr/>', { 'text': elements[i].textContent, 'title': elements[i].textContent})));

            // div und ul
            $('#link-chapter-' + j).append($('<div/>', { 'class': 'links-directory', 'id': 'div-' + j}));
            $('#div-' + j).append($('<ul/>', { 'id': 'ul-' + j}));
        }
        else if(elements[i].className == "heading-directory") {
            k++;
            elements[i].id = 'directory-' + k;
            // li
            $('#ul-' + j).append($('<li/>', { 'class': 'link-directory overview-link text-size', 'id': 'link-directory-' + j + '-' + k, 'style': ''}));
            $('#link-directory-' + j + '-' + k).append($('<a/>', { 'href': '#directory-' + k}).append($('<abbr/>', { 'text': elements[i].textContent, 'title': elements[i].textContent})));
        }
    }
    //Icon
    $('.dropdown').prepend($('<ion-icon/>', { 'class': 'text-size-big dropdown', 'name': 'caret-forward-outline'}));

    //Overview RIGHT
    var elements_right = document.querySelectorAll('.heading-directory, .heading-directory-sub, .heading-paragraph, .heading-paragraph-sub');
    j = 0;
    k = 0;
    let l = 0, d_id = 0;
    for (var i = 0; i < elements_right.length; i++) {
        if(elements_right[i].className == "heading-directory") {
            d_id++;
        }
        if(elements_right[i].className == "heading-directory-sub"){
            j++;
            elements_right[i].id = 'directory-sub-' + j;
            $('#overview_right').append($('<div/>', { 'class': 'link-directory-sub text-size', 'id': 'link-directory-sub-' + d_id + '-' + j }));
            $('#link-directory-sub-' + d_id + '-' + j).append($('<a/>', { 'href': '#directory-sub-' + j }).append($('<abbr/>', { 'text': elements_right[i].textContent, 'title': elements_right[i].textContent})));

        }
        else if(elements_right[i].className == "heading-paragraph"){
            k++;
            elements_right[i].id = 'paragraph-' + k;   
            $('#overview_right').append($('<div/>', { 'class': 'link-paragraph text-size-small', 'id': 'link-paragraph-' + d_id + '-' + j + '-' + k }));
            $('#link-paragraph-' + d_id + '-' + j + '-' + k).append($('<a/>', { 'href': '#paragraph-' + k }).append($('<abbr/>', { 'text': elements_right[i].textContent, 'title': elements_right[i].textContent})));
        }
        else if(elements_right[i].className == "heading-paragraph-sub"){
            l++;
            elements_right[i].id = 'paragraph-sub-' + l;   
            $('#overview_right').append($('<div/>', { 'class': 'link-paragraph-sub text-size-small', 'id': 'link-paragraph-sub-' + d_id + '-' + j + '-' + k + '-' + l }));
            $('#link-paragraph-sub-' + d_id + '-' + j + '-' + k + '-' + l).append($('<a/>', { 'href': '#paragraph-sub-' + l }).append($('<abbr/>', { 'text': elements_right[i].textContent, 'title': elements_right[i].textContent})));
        }
    }

    UpdateDeeperView();
}

function UpdateDeeperView() {
    var directories = document.querySelectorAll('.heading-directory');
    var subelements = document.querySelectorAll('.link-directory-sub, .link-paragraph, .link-paragraph-sub');


    for (var i = 0; i < directories.length - 1; i++) {
        if(directories[0].getBoundingClientRect().top > 0) {
            for(var j = 0; j < subelements.length; j++){
                subelements[j].style = "display: none;";
                var check = subelements[j].id;
                check = check.match(/\d+/);
                if(check == 1) {
                    subelements[j].style = "display: block;";
                }
            }
        }
        if(directories[i].getBoundingClientRect().top < 100 && directories[i+1].getBoundingClientRect().top > 100) {
            for(var j = 0; j < subelements.length; j++){
                subelements[j].style = "display: none;";
                var check = subelements[j].id;
                check = check.match(/\d+/);
                if(check == i + 1) {
                    subelements[j].style = "display: block;";
                }
            }
        }
        else if(directories[directories.length - 1].getBoundingClientRect().top < 100 && directories[i + 1] == directories[directories.length - 1]) {
            for(var j = 0; j < subelements.length; j++){
                subelements[j].style = "display: none;";
                var check = subelements[j].id;
                check = check.match(/\d+/);
                if(check == i + 2) {
                    subelements[j].style = "display: block;";
                }
            }
        }
    } 
}

function OverviewExpand(btn) {
    var button = document.getElementById(btn);
    button.classList.toggle("open");
    
    // content = der sich öffnende / schließende Inhalt des Dropdowns
    var content = button.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
}

function PicRandomVogel() {
    var myPix = new Array("img/vogel1.png","img/vogel2.png","img/vogel3.png","img/vogel4.gif","img/vogel5.png","img/vogel6.png","img/vogel7.png","img/vogel9.png","img/vogel10.png","img/vogel11.png","img/vogel12.png","img/vogel13.png","img/vogel14.png","img/vogel15.png","img/vogel16.png","img/vogel17.png","img/vogel18.png","img/vogel19.gif","img/vogel20.gif","img/vogel21.gif","img/vogel22.gif","img/vogel23.gif","img/vogel24.gif","img/vogel25.gif");
    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("vogel").src = myPix[randomNum];
    if(Math.random() < .5 && myPix[randomNum] != "img/vogel8.png" && myPix[randomNum] != "img/vogel24.gif") {
        document.getElementById("vogel").style.transform = "scale(-1, 1)";
    }
    // document.getElementById("vogel_a").style.cursor = "default";

    if(Math.random() < .18){
        document.getElementById("vogel_a").href = "34573r366.html";
        document.getElementById("vogel_a").style.cursor = "pointer";
    }
}

function Search(){
    const query = document.getElementById('search_input');
    
    window.find(query.value.toUpperCase());
}