var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
// variabel poin
var kalori;


var myLocalStorage = {
    set: function (item, value) {
        localStorage.setItem( item, JSON.stringify(value) );
    },
    get: function (item) {
        return JSON.parse( localStorage.getItem(item) );
    }
};



// myLocalStorage.set( 'poin', 100 );

var poin = myLocalStorage.get('poin');

function update_poin() {
    if(document.getElementById("log1").checked) {

        if(poin !== undefined) {
            poin = poin + 10;

        } else {
            poin = 110;
        }
    } else {
        if(poin !== undefined) {
            poin = poin - 10;
        } else {
            poin = 90;
        }
    }
    if(document.getElementById("log2").checked) {
        if(poin !== undefined) {
            poin = poin + 10;
        } 
    } else {
        if(poin !== undefined) {
            poin = poin - 10;
        } 
    }
    if(document.getElementById("log3").checked) {
        if(poin !== undefined) {
            poin = poin + 10;
        } 
    } else {
        if(poin !== undefined) {
            poin = poin - 10;
        } 
    }
myLocalStorage.set('poin', poin);
}

/*
sekarang fungs buat milih;
 */



var daftarnya = [];

var a1;
var b1;
var c1;

function milih_menu() {
    
    var j;
    if ( /*makanan[k]*/ 3000 > 2700) {
        for (var i=0; i<20;i++) {
            if (makanan[i].kalori > 600) {
                    
                    daftarnya.push(i);

            }
            
        }
    }
    a1=daftarnya[0];
b1=daftarnya[1];
c1=daftarnya[2];

}

$(document).ready(function() {   
        $('#dapatkan').click(function() {   
        var num = Math.floor(Math.random() * (3000 - 1500) + 1700);
        $('#input').val(num);
        });
    });

/*
var poinku = document.getElementsByTagName('poinku');
var poinku = 90;


if (raidos[0].checked) {
    inputs.value = 100;
    formValid = true;
}

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
*/

