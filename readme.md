Unicorn-Carousel

Yes, everyone makes a damned carousel. This one is special, though. It comes with rainbows and whatnot.
Really, it's seriously simple and pretty damned adptable.

Here's an example of how you can initialize a carousel

    jQuery(document).ready(function(){
      $('#carouselDiv').unicorn();
    });

Just structure your HTML like this (names, html elements, etc don't really matter):

    <section>
      <div id="carouselDiv">
        <div>
          <!-- Slide 1 Content -->
        </div>
        <div>
          <!-- Slide 2 Content -->
        </div>
        <div>
          <!-- Slide 3 Content -->
        </div>
      </div>
    </section>
    
You can have as many slides as you want!

Your CSS should look like this:

    section {
      float:left;
      overflow: hidden;
    }

    div#carouselDiv {
      /* width is 100% times the number of slides, 3 slides = 300% */
    	width: 300%;
    	height: 100%;
      /* Oh look! A transition! Kind of important, as this whole thing doesn't work otherwise */
    	transition: margin 1s ease;
    	-webkit-transition: margin 1s ease;
    	-moz-transition: margin 1s ease;
    	-o-transition: margin 1s ease;
    	-ms-transition: margin 1s ease;
    }
    
    /*  'unicorn' is the default class name, you can change this via plugin options 
     *  For each slide, you need to define a class plus the slide number, like so:
     */
    div.unicorn1 {
    	margin-left: 0;
    }

    div.unicorn2 {
    	margin-left: -100%;
    }

    div.unicorn3 {
    	margin-left: -200%;
    }
    
    div#carouselDiv > div {
      float:left;
      /* width should be 100 divided by the number of slides, so 100/3 = 33.3%.
      width: 33.3%;
      height: 100%;
    }
    

<a href="http://ekidd.github.io/Unicorn-Carousel/">Demo Page</a>
