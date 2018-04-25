$(document).ready(function() {
	$('#fullPage').fullpage({
        navigation: true,
        navigationPosition: 'right'
    });

    //Jquery Function Number 1
    $(".home-header").fadeIn(1500);

	//Jquery Function Number 2
    $("#profile-picture").fadeIn(1200);

	//Jquery Function Number 3
	$("#proj1").click(function() {
		window.open('https://devpost.com/software/directcal', '_blank');
	});

	//Jquery Function Number 4
	$("#proj2").click(function() {
		window.open('https://devpost.com/software/urbanadventurer', '_blank');
	});

	//Jquery Function Number 5
	$("#proj3").click(function () {
		window.open('https://devpost.com/software/ideate', '_blank');
	});

	//Jquery Function Number 6
	$("#profile-picture").css("transform", "rotate(360deg)");
});