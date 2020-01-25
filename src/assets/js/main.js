
function setScroll(){
	$('body').scrollspy({
      target: '#navbar-main',
      offset: "navHeight"
    })

    $('window').on('load', function () {
      $('body').scrollspy('refresh')
    })

    $('#navbar-main [href=#]').click(function (e) {
      e.preventDefault()
    })
}

function getProjects(jsonData){
	
	keyList = Object.keys(jsonData);
	var allProjects = '<div class="row">';
	for(j=1; j<= keyList.length; j++){
	
		if(j%3 == 0 && j != 1){			// line up.
			allProjects = allProjects + getModal(jsonData[j-1])+ '</div><div class="row">'
		}else{
			allProjects = allProjects + getModal(jsonData[j-1]);
		}
	}
	return allProjects + '</div>';
	
}

function getModal(modalJSONData){

	modalTargetName = modalJSONData['targetName'];
	completeProjName = modalJSONData['completeName'];
	modalName = modalJSONData['name'];
	imagePath = modalJSONData['imgpath'];
	projectDescription = modalJSONData['description'];
	tagList = modalJSONData['tagList'];
	carouselData = modalJSONData['carousel'];

	var modalCallerTemplate = '<div class="col-md-4"> <div class="grid mask"> <figure><a data-toggle="modal" href="#'+modalTargetName+'">\
	<img class="img-responsive" src="'+imagePath+'" alt=""><p align="center"><span class = "label label-primary">'+completeProjName+'</span><br>\
	</a></p></figure></div></div>'
	
	
	var modalTemplateOpen = '<div class="modal fade" id="'+modalTargetName+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
	  <div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
      <h4 class="modal-title">'+modalName+'</h4></div><div class="modal-body"> <p>'+getCarousel('c'+modalTargetName, carouselData)+'</p>\
	  <p><h4>'+projectDescription+' <br></p><p>Tags: </h4>';

	var modalTagList = "";
	taglistCount = 0;
	for(i=0; i<tagList.length; i++){
		taglistCount = taglistCount + tagList[i].length
		if(taglistCount  > 35){
			taglistCount= 0
			modalTagList = modalTagList + '<br>'
		}
		modalTagList = modalTagList + '<span class = "label label-primary">'+ tagList[i] + '</span>&nbsp';
	}
	var modalTemplateClose = '</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

	return modalCallerTemplate+ modalTemplateOpen + modalTagList + modalTemplateClose;



}



function getCarousel(carouselID, cjsonData){
	var returnCarousel = '<div id = "'+carouselID+'" class = "carousel slide">';
	
	carouselOL = '<ol class = "carousel-indicators">';
	innerCarousel = '<div class = "carousel-inner">';
	for(k = 0; k<cjsonData.length; k++){
		if(k==0){
			carouselOL = carouselOL + '<li data-target = "#'+carouselID+'" data-slide-to = "'+ k +'" class = "active"></li>';
			innerCarousel = innerCarousel + '<div class = "item active"><img src = "'+cjsonData[k]+'" alt = "slide'+k+'"> </div>';
		}
		else{
			carouselOL = carouselOL + '<li data-target = "#'+carouselID+'" data-slide-to = "'+ k +'"></li>';
			innerCarousel = innerCarousel + '<div class = "item"><img src = "'+cjsonData[k]+'" alt = "slide'+k+'"> </div>';
		}
	}
	carouselOL = carouselOL + '</ol>';
	innerCarousel = innerCarousel+ '</div>';
	markers = '<a class = "carousel-control left" href = "#'+carouselID+'" data-slide = "prev">&lsaquo;</a><a class = "carousel-control right" href = "#'+carouselID+'" data-slide = "next">&rsaquo;</a></div>';

	returnCarousel = returnCarousel+ carouselOL + innerCarousel +markers;
	return returnCarousel;
	
}




$('#projectsection').html(getProjects(projectData));
setScroll();

                           