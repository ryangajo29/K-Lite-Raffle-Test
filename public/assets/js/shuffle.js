// var store_ids = ["Eddard Stark","Robert Baratheon","Jaime Lannister","Catelyn Stark",
// "Cersei Lannister","Daenerys Targaryen","Jorah Mormont","Petyr Baelish",
// "Oberyn Martell","Jon Snow","Viserys Targaryen","Aemon Targaryen",
// "Sansa Stark","Theon Greyjoy","Sandor Clegane","Khal Drogo",
// "Davos Seaworth","Samwell Tarly","Margaery Tyrell","Stannis Baratheon",
// "Jeor Mormont","Tormund Giantsbane","Brienne of Tarth","Ramsay Bolton",
// "Tommen Baratheon","Roose Bolton","Rickon Stark","Barristan Selmy",
// "Tyrion Lannister","Loras Tyrell","Beric Dondarrion","Yara Greyjoy",
// "Euron Greyjoy","Mance Rayder","Doran Martell","Randyll Tarly"];

var entryName = [1,2,3,4];


function fetchEntry(){
    $.ajax({
        type: "GET",
        url: "getentry",
        dataType: "json",
        success: function(data){
            console.log(data);
            // $.each(response.data,function (key, item){
            //     console.log('test');
            //     entryName.push(item.id)
            // })
        }
    });
    
}



function randomPick(){
        var rand = Math.floor(Math.random()*entryName.length);
        console.log(rand);
        $("#raffle_winner center").html(entryName[rand]);
    }
function shuffle(e){
    fetchEntry();
        setTimeout(function(){
        draw();
        }, 6000);
        animationTimer = setInterval(function() {
        randomPick();
        }, 150);
    }
function draw(){
    clearInterval(animationTimer);
}


