function setClickEvents(){
    $('#gplus').click( function() { mixpanel.track("Site:Google Plus"); });
    $('#mail').click( function() { mixpanel.track("Site:Mail"); });
    $('#twitter').click( function() { mixpanel.track("Site:Twitter"); });
    $('#facebook').click( function() { mixpanel.track("Site:Facebook"); });
    $('#tumblr').click( function() { mixpanel.track("Site:Tumblr"); });
}

function stylePage() {
    styleLinks();
    styleText();
}

function styleText(){
    var windowHeight = parseInt( $(window).height());
    var windowWidth = parseInt( $(window).width());

    var textWidth = windowWidth / 2;
    var textLeft = ( ( windowWidth - textWidth ) / 2 );

    $('.text').css('font-size', '96');
    $('.text_col_sub').css('font-size', '93');
    var textHeight = parseInt( $('.text').height());
    var fontsize = 96;
    while ( textHeight > windowHeight * 0.70 
         && fontsize > 8 ){
        fontsize = fontsize - 1;
        $('.text').css('font-size', fontsize);
        $('.text_col_sub').css('font-size', fontsize * 0.75 );
        textHeight = parseInt( $('.text').height());
    }
    var requiredTop = (windowHeight - textHeight) * 0.15;

    $('.text').css('top', requiredTop + "px");
    $('.text').css('left', textLeft + "px");
}

function styleLinks() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var iconsNumber = parseInt( $('#links_div > div').size());
    var padding = parseInt( $('.links_col').first().css("padding-left").replace('px',''));

    var iconHeightHor = ((windowWidth * 0.83 ) / iconsNumber ) - 2 * padding;
    var iconHeightVer = (windowHeight * 0.15) - 2 * padding;

    var iconHeight = Math.ceil( Math.min( iconHeightVer, iconHeightHor ) );

    var requiredWidth =  ( iconHeight + 2 * padding ) * iconsNumber; 
    var requiredHeight = iconHeight + 2 * padding;

    var linksTop = ( windowHeight  - requiredHeight ) * 0.85;
    var linksLeft = ( windowWidth - requiredWidth ) / 2;

    $('.links_col').css('width', iconHeight + 'px');
    $(".links").css("width", requiredWidth + "px");
    $(".links").css("height", requiredHeight + "px");
    $('.links').css("top", linksTop + "px");
    $('.links').css("left", linksLeft + "px");
}

$(window).ready( function($) {
    stylePage();
    setClickEvents();
    mixpanel.track("Site:Land");
});

$(window).resize( function() { 
    stylePage() 
});
