import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation';
declare var $: any; 
@Component({
  selector: 'left-sidebar-1',
  templateUrl: '../elements/left-sidebar-1.html',
  providers: [NavigationService]
})

export class LeftSidebar1Component implements OnInit {

  navigation: Array<Object>;

  constructor(private navigationService: NavigationService) {
    this.navigation = navigationService.getNavigation()
  }

  ngOnInit() {


    $('[data-toggle="tooltip"]').tooltip();
	   $('[data-toggle="tooltip"]').tooltip({
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    });

    $(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

$("#btnSearch").click(function(){
  alert($('.btn-select').text()+", "+$('.btn-select2').text());
});

  }
 
}
