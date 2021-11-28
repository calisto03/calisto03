
const formaAmarela=
    "M3449.3,54.078c-37.712,16.952-44.983,34.7-28.264,89.2s24.127,59.634,64.487,49.424c25.669-6.494,38.077-32.032,59.407-49.424s114.111-24.407,102.37-50.6-45.375-51.488-80.125-38.592S3487.013,37.126,3449.3,54.078Z";
const formaVerde=
    "M3457.366,74.379c-34.714,15.6-17.293,47.809,0,69.846s29.984,28.216,69.174,18.3c24.925-6.306,24.511,19.807,56.648-18.3,48.5-73.355,14.617-36.641-23.128-56.338S3493.984,57.919,3457.366,74.379Z";

const formaAzul="M3738.683,98.512c56.005,38.194,72.382,75.532,64.386,126.056s-75.944,130.625-167.35,107.5c-57.147-14.457-165.248,25.025-204.123,0s-33.351-140.109-21.98-175.911c18.807-59.22,85.668-48.773,155.569-46.908S3682.678,60.318,3738.683,98.512Z";

const formaRoxa="M3221.127,508.26c3.46-26.05,35.326-38.483,68.111-3.586s10.417,24.011,59.519,41.605,44.672,33.65,17.965,64.6-37.484,16.893-57.457-14.155-20-30.006-48.1-52.927S3217.667,534.31,3221.127,508.26Z";

const formaamarilo="M3302.7,617.456c-20.133-17.547-15.218-9.82-17.98-49.907s55.677-49.487,76.18-6.991,51.93,33.86,9.549,56.9S3322.83,635,3302.7,617.456Z";

const formarosita="M3186.882,469.566c5.347-14.126-9.262-76.511,64-43.046s55.27,54.264,79.159,89.352-22.665,77.308-44.331,91.963-81.024,24.633-90.584-25.142,46.525-79.333,14.98-83.383S3181.534,483.692,3186.882,469.566Z";



const forma_amarela= document.querySelector('#forma_amarela');
const forma_verde= document.querySelector('#forma_verde');
const forma_azul=document.querySelector('#forma_azul');
const forma_roxa=document.querySelector('#forma_roxa');
const forma_amarilo=document.querySelector('#forma_amarilo');
const forma_rosita=document.querySelector('#forma_rosita');



//forma amarela
    const timeline_amarela=anime.timeline({
        duration:2600,
        easing:"linear",
        direction: 'alternate',
        loop: true,
        autoplay: true,
    });






timeline_amarela.add({
        targets:".amarelo",
        d:[
            {
                value:formaAmarela,



            }
        ]

    });

    //forma verde
    const timeline_verde=anime.timeline({
        duration:2000,
        easing:"linear",
        direction: 'alternate',
        loop: true,
    })

timeline_verde.add({
        targets:".verde",
        d:[
            {
                value:formaVerde,



            }
        ]

    });

//forma azul
const timeline_azul=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_azul.add({
    targets:".azul",
    d:[
        {
            value:formaAzul,



        }
    ]

});

//forma roxa
const timeline_roxa=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_roxa.add({
    targets:".roxa",
    d:[
        {
            value:formaRoxa,



        }
    ]

});

//forma amarilo
const timeline_amarilo=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_amarilo.add({
    targets:".amarilo",
    d:[
        {
            value:formaamarilo,



        }
    ]

});

//forma rosita
const timeline_rosita=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_rosita.add({
    targets:".rosita",
    d:[
        {
            value:formarosita,



        }
    ]

});


