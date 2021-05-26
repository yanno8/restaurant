$( document ).ready(function() {
    var variant;
        var Url;
     $('.detail-link').click(function(e){
         e.preventDefault();
         $(this).parent().parent().children('.date').slideToggle();
     });
     
        
        $('.item-date').click(function(e){
            e.preventDefault();
            $('.quantite').hide();
         $(this).parent().parent().children('.quantite').slideToggle();
        var variant = $(this).attr('href');
        var Url = 'https://thefrenchvikings.com/cart/' + variant ;	
            var i = 1;
            $('.liste-quantite').empty();
            while(i<11){
            $('.liste-quantite').append('<a href="'+Url+':'+i+'">'+i+'</a>');
                i++;
            }
    
        }); 
        
        
            $('.item-carteCadeau').click(function(e){
            e.preventDefault();
            $('.quantite').hide();
         $(this).parent().parent().parent().children('.quantite').slideToggle();
        var variant = $(this).attr('href');
        var Url = 'https://thefrenchvikings.com/cart/' + variant ;	
            var i = 1;
            $('.liste-quantite').empty();
            while(i<11){
            $('.liste-quantite').append('<a href="'+Url+':'+i+'">'+i+'</a>');
                i++;
            }
    
        }); 
        
        
        $('.back').click(function(e){
            e.preventDefault();
            $(this).parent().slideToggle();
        });
    
        
        
    
    });  