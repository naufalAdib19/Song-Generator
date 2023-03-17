function Song(songPict, judulLagu, penyanyi, genre){
    this.songPict = songPict;
    this.judulLagu = judulLagu;
    this.penyanyi = penyanyi;
    this.genre = genre;
}

const songCollection = [
    
    /* JAZZ GENRE */
    [
        new Song(document.createElement('img'),"Nurlela","Bing Slamet","Jazz"),
        new Song(document.createElement('img'),"What A Wonderful World","Louis Armstrong","Jazz"),
        new Song(document.createElement('img'),"Untitled","Maliq & D'Essentials","Jazz"),
    ],

    /* BLUE GENRE */
    [
        new Song(document.createElement('img'),"Pride and Joy","Stevie and Joy","Blues"),
        new Song(document.createElement('img'),"Blues Intro","John Mayer","Blues"),
        new Song(document.createElement('img'),"Cross Road Blues","Robert Johnson","Blues"),
    ],

    /* ALTERNATIVE GENRE */
    [
        new Song(document.createElement('img'),"In the End","Linkin Park","Alternative"),
        new Song(document.createElement('img'),"Still In To You","Paramore","Alternative"),
        new Song(document.createElement('img'),"Creep","Radiohead","Alternative"),
    ],

    /* METAL GENRE */
    [
        new Song(document.createElement('img'),"Little Piece of Heaven","Avenged Sevenfold","Metal"),
        new Song(document.createElement('img'),"Back in Black","AC/DC","Metal"),
        new Song(document.createElement('img'),"Nightmare","Avenged Sevenfold","Metal"),
    ],

    /* POP GENRE */
    [
        new Song(document.createElement('img'),"Lapang Dada","Sheila on 7","Pop"),
        new Song(document.createElement('img'),"Risalah Hati","Dewa 19","Pop"),
        new Song(document.createElement('img'),"Heather","Conan Gray","Pop"),
    ]
]

/* Input Pict */
for(let i = 0; i < songCollection.length; i++){
    for(let j = 0; j < songCollection[i].length; j++){
        songCollection[i][j].songPict = 'img/' + i + '/' + (j+1) + '.jpg';
    }
}

let button = document.querySelectorAll("button");

/* Fungsi Buat Cari Tombol yang di Click */
function whoIsClicked(myButton){
    
    let genreClicked = 0;
    
    switch(myButton.innerHTML) {
        case 'Jazz':
            genreClicked = 0;
        break;
        case 'Blues':
            genreClicked = 1;
        break;
        case 'Alternative':
            genreClicked = 2;
        break;
        case 'Metal':
            genreClicked = 3;
        break;
        case 'Pop':
            genreClicked = 4;
        break;
    }
    return genreClicked;
}

/* Variabel Bantuan */
const myLoc = document.querySelector('.display-song');
let temp = "";
let totalClicked = 0;

/* Clicked Button */
for(let i = 0; i < 5; i++){
    button[i].addEventListener("click", function(){
        /* Total Click Button */
        totalClicked += 1;

        /* Reset Content */
        myLoc.innerHTML = "";

        /* Judul */
        const myTitle = document.createElement("h1");
        myTitle.innerHTML = "Here's the Song";
        myLoc.prepend(myTitle);

        /* Undisable Button */
        temp.disabled = false;

        /* Get Genre was Clicked */
        let genreClicked = whoIsClicked(button[i]);

        /* Display song's */
        for(let i = 0; i < 3; i++){
            const lokasi = document.querySelector('.display-song');          

            const div = document.createElement("div");
                div.classList.add("lagu");
            const divImage = document.createElement("div");
                divImage.classList.add("image")
            const divInfo = document.createElement("div");
                divInfo.classList.add("info-lagu")
            const imageSong = document.createElement("img");
                imageSong.src = 'img/' + genreClicked + '/'+ (i+1) + '.jpg';
            const h2 = document.createElement("h3");
                h2.innerHTML = songCollection[genreClicked][i].judulLagu;
            const h5 = document.createElement("h5");
                h5.innerHTML = songCollection[genreClicked][i].penyanyi;
            
            divImage.appendChild(imageSong);
            divInfo.appendChild(h2);
            divInfo.appendChild(h5);
    
            div.appendChild(divImage);
            div.appendChild(divInfo);
    
            lokasi.appendChild(div);
       
        }

        /* Disable Button */
        button[i].disabled = true;
        temp = button[i];

        /* Animating */
        document.querySelector('.display-song :nth-child(2)').style.animation = "geserDiv 1s ease";
        document.querySelector('.display-song :nth-child(3)').style.animation = "geserDiv 1.5s ease";
        document.querySelector('.display-song :nth-child(4)').style.animation = "geserDiv 2s ease";

        if(totalClicked < 2) {
            document.querySelector('.display-song :nth-child(1)').style.animation = "geserDiv2 0.75s ease";
        }
    });
}