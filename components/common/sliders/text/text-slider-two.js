/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderTwo() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 12500,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="fugu--text-slider-section">
			<div className="fugu--text-slider">
				<Slider {...settings}>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>Consigue tu pase VIP favorito y empieza a disfrutar de sus beneficios.</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>Consigue tu pase VIP favorito y empieza a disfrutar de sus beneficios.</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>Consigue tu pase VIP favorito y empieza a disfrutar de sus beneficios.</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
}
