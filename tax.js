function tax()
{
    let sallary = parseInt(window.prompt("enter the sallary"));

    if(sallary < 300000)

        {
            alert.prompt("no tax should be pay")
        }

    else if(sallary >= 300000 && sallary < 750000)
    {
        window.alert("you have to pay " + (sallary * 10)/100 + " on your sallary");
    }
    else if(sallary >= 750000)
        {
            window.alert("you have to pay " + (sallary * 20/100) + " on your sallary");
        }
    else
    {
        window.alert("invalid");
    }
}

tax();