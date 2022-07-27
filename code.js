
mostrarshop();
function mostrarshop()
{
    let collections = prompt("winter season or summer season?");

    if(collections == "winter")
    {
        mostrarWinterSeason();
    }
    else if(collections == "summer")
    {
        mostrarSummerSeason();
    }
    else
    {
        console.log("Sorry, try again");
        mostrarshop();
    }
}

function mostrarWinterSeason()
{
    alert("HOODIE GOOD NEWS AVAILABLE");
}

function mostrarSummerSeason()
{
    alert("T-SHIRT GOOD NEWS AVAILABLE");
}





































