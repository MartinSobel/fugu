/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGalarryOne() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#fugu--four-column-copy", {
				itemSelector: ".collection-grid-item",

				resizable: false,
				masonry: {
					columnWidth: ".collection-grid-item",
					gutterWidth: 0,
				},
			});
		}, 1000);
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		if (isotope.current)
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};
	return (
		<div className="fugu--portfolio-section fugu--section-padding" id="conoce">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-sm">
						<h2>¿Quién es Antonio the Barber?</h2>
						<p>
							Conoce a Antonio, un profesional del sector de la imagen personal que cuenta con muchos años de experiencia y una gran reputación.
						</p>
					</div>
				</div>
				<div className="fugu--portfolio-wrap" id="fugu--four-column-copy">
					<div className="collection-grid-item">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/imagen6.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Experto en tintes decoloraciones y permanentes.</h3>
							</div>
						</div>
					</div>
					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/imagen24.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Los mejores cortes.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/imagen8.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Estilo vanguardista y últimas tendencias.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/imagen7.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Trato cercano y personalizado.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/imagen5.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Barbero referente en las academias de Sevilla.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/IMAGEN-X002.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Las marcas más top de peluquería confían en The Barber.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imegen-X001.jpg" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Personajes públicos y famosos mejoran su imagen con The Barber.</h3>
							</div>
						</div>
					</div>

					<div className="collection-grid-item video marketing">
						<div className="fugu--card-wrap">
							<div className="fugu--card-thumb">
								<img src="/images/beneficios/Imagen19.png" alt="" />
							</div>
							<div className="fugu--card-data">
								<h3>Futuros barberos acuden a recibir consejos y formación.</h3>
							</div>
						</div>
					</div>
				</div>
				
				<div className="fugu--portfolio-btn">
					<a href={"https://booksy.com/es-es/34193_antonio-the-barber_barberia_29847_benacazon"} target="_blank">
						<a className="fugu--outline-btn">
							<span>Reservar cita</span>
						</a>
					</a>
				</div>
			</div>
			{/* <div className="fugu--shape2">
				<img src="/images/shape2/shape2.png" alt="" />
			</div> */}
		</div>
	);
}
