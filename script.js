window.onscroll = function() {hideNameTag()};

function hideNameTag()
{
    
    //console.log(window.scrollY);
    
    if(window.scrollY > 400)
        {
            nameTag.style.display = "none";
        }
    
    if(window.scrollY <= 400)
        {
            nameTag.style.display = "block";
        }
}


