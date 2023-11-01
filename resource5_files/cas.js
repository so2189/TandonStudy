var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement("style");
	
style.innerHTML = `table.table-border, .table-border th, .table-border td {
                        padding: 5px !important;
                        border: 1px solid black !important; 
                        border-collapse: collapse !important;
                    }
					table.table-border th {
						background: #57068c;
						color: #fff;
						font-weight: bold;
                                                text-align: center;
					}`;
head.appendChild(style);

$(document).on('click','.lightbox__close',function() {
	var forcedReload = navigator.userAgent.indexOf('Firefox') > -1 ? true : false;
	location.reload(forcedReload); 
});


if(document.querySelector('body').dataset.currentPagePath == "/content/nyu-as/cas/about-cas/onthemove/25w4") {
	style = document.createElement("style");
		
	style.innerHTML = `#main-content > div.par-content.nyu-container__content-width.nyu-container__nyu__blank > div > div > div > div > div > div > div:nth-child(1) > div.section.gallery > div > ul > li > div.gallery__box--imagewrap {
							max-height: 340px !important;
						}`;
	head.appendChild(style);
}

else if(document.querySelector('body').dataset.currentPagePath == "/content/nyu-as/cas/alumni/alumni-benefits") {
    style = document.createElement("style");
	style.innerHTML = `@media (max-width: 800px) {
                        iframe[src*="432207363"] {
                            height: 350px !important;
                        }
                   }`;	
	head.appendChild(style);
}

else if(document.querySelector('body').dataset.currentPagePath == "/content/nyu-as/cas/undergraduate-research/duri") {
	style = document.createElement("style");	
	style.innerHTML = `@media (min-width: 1550px) {
							#flexsliderImages > div > ul > li.bg-responsive:nth-child(2) {
								background-position: 0 -72px !important;
							}

							#flexsliderImages > div > ul > li.bg-responsive:nth-child(3) {
								background-position: 0px -158px !important;
							}
						}

						h3.facultyspotlight__info__title {
							font-size: 2.8em;
							cursor: pointer;
						}`;
	head.appendChild(style);	
}