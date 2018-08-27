
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

}());



var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}


/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




}
main();


function mydisplay(){

    var selection,hindi,english;

    selection = document.getElementById("selectopt").value;
    console.log(selection)
    hindi= document.getElementById("hindi").value;
    english= document.getElementById("english").value;

    if (selection == "9 Breathtaking Destinations In India That Will Put These Hollywood Locations To Shame")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection == "10 holiday experiences that are beyond the ordinary")
    {
        console.log("Kaburar")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Kabutar"

    }
    else if(selection  ==="Foreigners in india craziest about visiting these places")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Chutiya"
    }
    else if(selection   ==="Foreigners in india craziest about visiting these places")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection  === "10 Famous Biosphere reserves in india itinerary")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection   ==="With A Private Pool In Every Cottage, This Hidden Resort In Rajasthan Is Basically Heaven On Earth!")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection   ==="7 Destinations Indians Can Visit RIGHT NOW Instead of Saving For That BIG EuroTrip")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection   ==="Virgin beaches of Goa nobody told you about!")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection   ==="Secrets of Ladakh That Locals Keep To Themselves")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else if(selection   === "10 Indian Women Whose Instagram Feeds Will Leave You With A Serious Case Of Wanderlust")
    {
        console.log(" Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266")
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="Over the course of our travels, we get to stay in many wondrous places.Lakshman Sagar, in the Pali district of Rajasthan, is one such place.If you wish, can choose to dine privately in your cottage.Experiences at Lakshman Sagar:Lakshman Sagar, Raipur Road, Near Haripur Railway Station, Dist.Pali, Rajasthan 306304, Tel: +91 1139585266."

    }
    else
    {
        document.getElementById("hindi").value =""
        document.getElementById("english").value ="A period of travel eases the transition from military to civilian life.Everybody travels after military service, whether they like it or not.It gives them another reason to look eastwards for safe travel options.India is one of the most safe destinations with no known prejudice against Jews.These are some of the many reasons that drive Israelis to India."
 
     }



}