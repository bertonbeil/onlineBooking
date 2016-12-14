(function($) {
	$(document).ready(function() {
		checkbox();
	});



		$(".settings-wraper").click(function () {
		    $(".hidden-search").fadeToggle('opened');
		});

		$(".user").click(function () {
		    $(".user-popover").fadeToggle('opened');
				$(".arrow-user").toggleClass('arrow-user-open');
		});

		$(".fix-btn-wraper").click(function () {
		    $(".hide-search-object").fadeToggle('opened');
		});

		$(".giv-testimonials-btn").click(function () {
				$(".giv-testimonials").fadeToggle('opened');
		});

		function checkbox(){
		var selectedBox = null;
			$(".abon-check").click(function() {
					selectedBox = this.id;

					$(".abon-check").each(function() {
							if ( this.id == selectedBox )
							{
									this.checked = true;
							}
							else
							{
									this.checked = false;
							};
					});
			});
		}


}(jQuery));
