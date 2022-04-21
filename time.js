	
var timeLeft = 20;
var count;

window.hideLink = function hideLink()
{
    document.getElementById("link").style.visibility = "visible";
    count = setInterval (decrementTimer, 1000);
    setTimeout (showLink,1000 * timeLeft);
};

function decrementTimer()
{
    timeLeft = timeLeft - 1;
    document.getElementById("timer").innerHTML = timeLeft + " seconds";
    if(timeLeft <= 0)
    {
        window.clearInterval(count);
        document.getElementById("timer").style.visibility = "hidden";
    }
}

function showLink()
{
    document.getElementById("link").style.visibility = "hidden";
}
