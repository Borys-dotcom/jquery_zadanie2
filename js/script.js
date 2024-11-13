$(document).ready(function(){
    
    let allParagraphs = $('p');
    let lastParagraph = allParagraphs[allParagraphs.length-1];

    $(lastParagraph).after('<button id="onEnd">Na Koniec</button>');
    
    $('#onStart').click(function(){
        let allParagraphs = $('p');
        let lastParagraph = allParagraphs[allParagraphs.length-1];
        allParagraphs[allParagraphs.length-1].remove()
        $(allParagraphs[0]).before($(lastParagraph));
    });

    $('#onEnd').click(function(){
        let allParagraphs = $('p');
        let firstParagraph = allParagraphs[0];
        allParagraphs[0].remove()
        $(allParagraphs[allParagraphs.length-1]).after($(firstParagraph));
    });
});