$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            veiculoDeInteresse:{
                required: false
            },
            mensagem:{
                required: true
            },
        },
        messages:{
            mensagem: 'Deixe sua mensagem para nós'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            };
        }
    });

    $('.lista-veiculos button').click(function(){
        const destino = $('#entre-em-contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoDeInteresse').val(nomeVeiculo)                

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});