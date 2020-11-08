window.addEventListener("load", ()=>{
    new Glider(document.querySelector(".carousel__lista-1"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".dots-1",
        arrows: {
            prev: ".arrow-p-1",
            next: ".arrow-n-1"
        }
    });

    new Glider(document.querySelector(".carousel__lista-2"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".arrow-p-2",
            next: ".arrow-n-2"
        }
    });

    new Glider(document.querySelector(".carousel__lista-3"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".arrow-p-3",
            next: ".arrow-n-3"
        }
    });

    new Glider(document.querySelector(".carousel__lista-4"),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".arrow-p-4",
            next: ".arrow-n-4"
        }
    });
})