$(document).on('pagebeforeshow', '#home', function(e, data){      
    $.ajax({url: "makanan.json",
        dataType: "json",
        async: true,
        success: function (result) {
            ajax.parseJSONP(result);
        },
        error: function (request,error) {
            alert('Jaringan error, silahkan coba lagi!');
        }
    });         
});


var ajax = {  
    parseJSONP:function(result){
        $.each( result, function(i, row) {
            $('#movie-data').append('<li><a href="#headline"><img src=" ' + row.url + ' " class="ui-li-has-thumb"/><h3>' + row.nama + '</h3><p>' + row.deskriptsi + '</p></a></li>');
        });
        $('#movie-data').listview('refresh');
    }
}

function Validate() {
    // first we clear any left over error messages
    var kalori = 0;
    // store the error div, to save typing
    
    // we start by assuming everything is correct
    // if it later turns out not to be, we just set
    // this to false
   
    var radios = document.getElementsByTagName('goal');
    var formValid = false;
    var i=0;
    var inputs = document.getElementsByTagName('kalori');



if (raidos[0].checked) {
    inputs.value = 100;
    formValid = true;
} else if (radios[1].checked) {
    inputs.value = 200;
    formValid = true;

} else if (radios[2].checked) {
    inputs.value = 300;
    formValid = true;

}
    // if we haven't found an error, we hide the error message
    // if (formValid) {


    //     // clear the result div
    //     $('#hasil').empty();
    //     // and put together a result message
    //     $('#hasil').append('<p>Kebutuhan kalori anda adalah, ' + kalori + '!</p>');
    // } 
   

return formValid;
}

("#cek_kalori").submit(Validate);
