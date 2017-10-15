
let colors = ['transparent', 'red', 'orange', 'yellow', 'green'];
let timer = null;

function startCharge(){
    timer = 
        setInterval(function(){
        let value = +$('input').val();
        let index = value / 25;
        if(index < 4){
            $('input').val(value + 25);
            $('input').trigger('input');
        }
    }, 2000);
}

function stopCharge(){
    clearInterval(timer); 
    timer = null;
}

function handler(){
    let index = +$(this).val() / 25;

    $("#battery")
        .html('<span></span>'.repeat(index));
    $("#battery")
        .find('span').css("background-color", colors[index]);
}
