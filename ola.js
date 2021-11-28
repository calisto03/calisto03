
const formaAmarela= "M3449.3,54.078c-37.712,16.952-79.729,34.7-63.01,89.2s58.872,59.634,99.233,49.424c25.669-6.494,38.077-32.032,59.407-49.424s114.111-24.407,102.37-50.6-55.49-20.267-90.239-7.371S3487.013,37.126,3449.3,54.078Z";
const formaVerde= "M3457.366,74.379c-34.714,15.6-17.293,47.809,0,69.846s29.984,28.216,69.174,18.3c24.925-6.306,24.511,19.807,56.648-18.3,48.5-73.355,14.617-36.641-23.128-56.338S3493.984,57.919,3457.366,74.379Z";

const formaAzul="M3738.683,98.512c56.005,38.194,72.382,75.532,64.386,126.056s-75.944,130.625-167.35,107.5c-57.147-14.457-165.248,25.025-204.123,0s-33.351-140.109-21.98-175.911c18.807-59.22,85.668-48.773,155.569-46.908S3682.678,60.318,3738.683,98.512Z";

const formaRoxa="M3221.127,508.26c3.46-26.05,35.326-38.483,68.111-3.586s10.417,24.011,59.519,41.605,44.672,33.65,17.965,64.6-37.484,16.893-57.457-14.155-20-30.006-48.1-52.927S3217.667,534.31,3221.127,508.26Z";

const formaamarilo="M3302.7,617.456c-20.133-17.547-15.218-9.82-17.98-49.907s55.677-49.487,76.18-6.991,51.93,33.86,9.549,56.9S3322.83,635,3302.7,617.456Z";

const formarosa="M3221.672,591.937c-18.263,24.563-22.678,48.409,36.985,59.857s55.552-2.022,100.319-5.272,80-19.68,39.795-63.8c-16.283-17.868-37.49-22.012-87.386-16.077S3239.935,567.373,3221.672,591.937Z";

const formavermelha="M3219.157,602.964c-23.319,18.823-59.663,54.638,0,66.086s77-5.886,121.769-9.136,86.158-6.549,45.952-50.667c-16.283-17.868-24.548-21.422-74.444-15.487S3242.477,584.141,3219.157,602.964Z";

const formabranca="M3189.858,529.372c-11.755,8.017-12.247,35.813-10.021,47.147s.573,38.96,74.383,37.958,60.209-22.417,65.013-37.958,48.114-37.758,13.607-53.294-33.5-20.871-69.278-22.5S3201.613,521.355,3189.858,529.372Z";

const formaprojeto="M3227.893,276.324c-58.959-7.605-101.223-29.7-81.727,36.741s116.5,17.345,253.8,175.109,193.613,114.164,223.278,41.44,7.316-170.175-145.254-169.886S3286.853,283.929,3227.893,276.324Z";




const forma_amarela= document.querySelector('#forma_amarela');
const forma_verde= document.querySelector('#forma_verde');
const forma_azul=document.querySelector('#forma_azul');
const forma_roxa=document.querySelector('#forma_roxa');
const forma_amarilo=document.querySelector('#forma_amarilo');
const forma_rosa=document.querySelector('#forma_rosa');
const forma_vermelha=document.querySelector('#forma_vermelha');
const forma_branca=document.querySelector('#forma_branca');
const forma_projeto=document.querySelector('#forma_projeto');


//forma amarela
    const timeline_amarela=anime.timeline({
        duration:2600,
        easing:"linear",
        direction: 'alternate',
        loop: true,
        autoplay: true,
    });






timeline_amarela.add({
        targets:".amarela",
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


//forma rosa
const timeline_rosa=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_rosa.add({
    targets:".rosa",
    d:[
        {
            value:formarosa,



        }
    ]

});

//forma vermelha
const timeline_vermelha=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_vermelha.add({
    targets:".vermelha",
    d:[
        {
            value:formavermelha,



        }
    ]

});

//forma branca
const timeline_branca=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_branca.add({
    targets:".branca",
    d:[
        {
            value:formabranca,



        }
    ]

});

//forma projeto
const timeline_projeto=anime.timeline({
    duration:2600,
    easing:"linear",
    direction: 'alternate',
    loop: true,
    autoplay: true,
});



timeline_projeto.add({
    targets:".projeto",
    d:[
        {
            value:formaprojeto,



        }
    ]

});





