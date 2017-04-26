 $(document).ready(function () {
    
        var carouselObj =
            [
            {
                imageSrc: "kipligners-top-100-public-colleges.png",
                title: "30 Best Values in Small Colleges",
                description: "Named to Kiplinger's Personal Finance's list of top 100 of best values in public colleges for both in-state and out-of-state value in 2016"
            },
            {
                imageSrc: "us-news-best-colleges.png",
                title: "Sixth Best Public Liberal Arts College",
                description: "St. Mary's College of Maryland is ranked as the nation's sixth best public liberal arts college in U.S. News & World Report's \"2017 Best Colleges\""
            },
            {
                imageSrc: "GreenCollege-2015-Accolade.png",
                title: "Top Green College",
                description: "Ranked one of the top environmentally responsible colleges in the U.S and Canada, according to The Princeton Review."
            },
            {
                imageSrc: "public-college-of-distinction-16-17-e1483542866386.png",
                title: "Public College Of Distinction",
                description: "St. Mary's College is proud college of distinction by Colleges of Distinction publication"
            }
            ];

        function attachSliderEvents(current) {
            var $ul = current.find("ul.carouselul");
            var $left = current.find(".arrow-container_left .left");
            var $right = current.find(".arrow-container_right .right");
            $ul.find("li:first").before($(this).find("li:last"));
            $right.on('click', function () {

                $ul.animate({ marginLeft: -250 }, 1000, function () {
                    $(this).find("li:last").after($(this).find("li:first"));
                    $(this).css({ marginLeft: 0 });
                });
            });
            $left.on('click', function () {

                $ul.animate({ marginLeft: 250 }, 1000, function () {
                    $(this).find("li:first").before($(this).find("li:last"));
                    $(this).css({ marginLeft: 0 });


                });
            });
        };
        function createDOM(item) {
            var liItem = document.createElement("li");
            liItem.classList.add("item");

            var liImage = document.createElement("div");
            liImage.classList.add("item-image");

            var image = document.createTextNode(item.imageSrc);
            var imgtag = document.createElement("img");
            imgtag.setAttribute("src", item.imageSrc);
            imgtag.appendChild(image);

            var liImage = document.createElement("div");
            liImage.classList.add("item-image");

            liImage.appendChild(imgtag);

            liItem.appendChild(liImage);




            var title = document.createTextNode(item.title);
            var description = document.createTextNode(item.description);
            var itemContentdiv = document.createElement("div");
            itemContentdiv.classList.add("item-content-title");
            var titlelabel = document.createElement("label");
            titlelabel.appendChild(title);
            itemContentdiv.appendChild(titlelabel);

            liItem.appendChild(itemContentdiv);

            var itemdescdiv = document.createElement("div");
            itemdescdiv.classList.add("item-content-description");
            var desclabel = document.createElement("label");
            desclabel.appendChild(description);
            itemdescdiv.appendChild(desclabel);

            liItem.appendChild(itemdescdiv);

            return liItem;
        };
        function carouselBuilder(dataObj, parentContainer) {
            var carouselcontainer=document.createElement("div");
            carouselcontainer.classList.add("carousel-container");
            var uniqueIdentifier = new Date().getTime();
            var carousel = document.createElement("div");
            carousel.setAttribute("class", "carousel");
            carousel.setAttribute("id", uniqueIdentifier);

            var unOrderedList = document.createElement("ul");
            unOrderedList.setAttribute("class", "carouselul");

            if (dataObj.length > 0) {

                for (var i = 0; i < dataObj.length; i++) {

                    var slide = createDOM(dataObj[i]);
                    unOrderedList.appendChild(slide);
                }
            }
            var arrows = createArrows();
            carousel.appendChild(arrows);
            carousel.appendChild(unOrderedList);
            carouselcontainer.appendChild(carousel);
           


            parentContainer[0].appendChild(carouselcontainer);
            var selector = '#' + uniqueIdentifier;
            var currentCarousel = $('body').find(selector);
            attachSliderEvents(currentCarousel);


        };
        function createArrows() {
             var arrowcontainer=document.createElement('div');
            arrowcontainer.classList.add('arrow-container');
//left arrow creation and set class name
            var leftArrow = document.createElement('div');
            leftArrow.classList.add('arrow-container_left');
            var innerleftArrow = document.createElement('div');
            innerleftArrow.setAttribute("class", "arrow left");
            leftArrow.appendChild(innerleftArrow);
//right arrow creation and set class name
            var rightArrow = document.createElement('div');
            rightArrow.classList.add('arrow-container_right');
            var innerRightArrow = document.createElement('div');
            innerRightArrow.setAttribute("class", "arrow right");
            rightArrow.appendChild(innerRightArrow);
// append it to arrowcontainer div
            arrowcontainer.appendChild(leftArrow);
            arrowcontainer.appendChild(rightArrow);

            return arrowcontainer;

        };




        

        var myCarousel = carouselBuilder(carouselObj, document.getElementsByTagName('body'));
        //create as many as u like now, jus call carouselBuilder with the object and parent container
      //  carouselBuilder(carouselObj, document.getElementsByTagName('body'));
        //carouselBuilder(carouselObj, document.getElementsByTagName('body'));
       // carouselBuilder(carouselObj, document.getElementsByTagName('body'));






    });