import { Component, OnInit } from '@angular/core';
declare var $: any; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  
$('[data-toggle="tooltip"]').tooltip();
	   $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });


    $('.popup-options').mouseover(function(){
      $(this).children('.chat-actions-hover').css('display','block');
    });

     $('.popup-options').mouseout(function(){
      $(this).children('.chat-actions-hover').css('display','none');
    });

    var hoverfunction = 0;
    
    $('.more-options').click(function(){
      if(hoverfunction == 0){
      $(this).parents('.chat-actions-hover').css('display','block');
      $('.popup-options').unbind('mouseout');
      $('.child-more-options').css('display','block');
      hoverfunction = 1;
      }
      else
      {
        $('.child-more-options').css('display','none');
        hoverfunction = 0;
      }
    });


    $('.media-body').click(function(){
      $('.chat-actions-hover').css('display','none');
      $('.child-more-options').css('display','none');
    });


    // for thread section

    $('.popup-options-thread').mouseover(function(){
      $(this).children('.chat-actions-hover-thread').css('display','block');
    });

     $('.popup-options-thread').mouseout(function(){
      $(this).children('.chat-actions-hover-thread').css('display','none');
    });

    var hoverfunction = 0;
    
    $('.more-options-thread').click(function(){
      if(hoverfunction == 0){
      $(this).parents('.chat-actions-hover-thread').css('display','block');
      $('.popup-options-thread').unbind('mouseout');
      $('.child-more-options-thread').css('display','block');
      hoverfunction = 1;
      }
      else
      {
        $('.child-more-options-thread').css('display','none');
        hoverfunction = 0;
      }
    });


    $('.media-body-thread').click(function(){
      $('.chat-actions-hover-thread').css('display','none');
      $('.child-more-options-thread').css('display','none');
    });
  }

}
