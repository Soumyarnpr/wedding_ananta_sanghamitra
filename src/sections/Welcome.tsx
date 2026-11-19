import { CalendarDays } from "lucide-react";
import { config, initials } from "../config/wedding";
import { Picture } from "../components/media";
import { Flourish } from "../components/ornaments";
import { dateLabel } from "../utils/dates";

export function Welcome({ motion }: { motion: boolean }) {
	const { couple, welcome, artwork, wedding, animation } = config;
	const petalCount = window.matchMedia("(max-width: 650px)").matches
		? animation.mobilePetals
		: animation.petals;
	return (
		<>
			<section
				className="hero dark"
				id="welcome"
				aria-labelledby="cover-title"
			>
				<div className="hero-art">
					<Picture src={artwork.hero} alt="" eager />
				</div>
				<div className="hero-border" aria-hidden="true" />
				{motion && (
					<div className="petal-field" aria-hidden="true">
						{Array.from({ length: petalCount }, (_, index) => (
							<i
								key={index}
								style={{ left: ((index * 137.51) % 100) + "%" }}
							/>
						))}
					</div>
				)}
				<div className="hero-content">
					<div className="ganesha-medallion" data-opening>
						<Picture src={artwork.ganesha} alt="Lord Ganesha" eager />
					</div>
					<p className="invocation" lang="sa" data-opening>
						{welcome.invocation}
					</p>
					<p className="hero-shloka" lang="sa" data-opening>
						{welcome.shloka}
					</p>
					<p className="kicker hero-eyebrow" data-opening>
						<span />
						{welcome.eyebrow}
						<span />
					</p>
					<h1 id="cover-title" data-opening>
						<span>{couple.groom.name}</span>
						<i aria-label="and">&amp;</i>
						<span>{couple.bride.name}</span>
					</h1>
					{/* <p className="hero-date" data-opening>
						Reception <span aria-hidden="true">·</span>{" "}
						<time dateTime={wedding.date}>{dateLabel(wedding.date)}</time>
					</p> */}
					<p className="hero-invitation" data-opening>
						{welcome.message}
					</p>
					{/* <a className="button button-gold" href="#date" data-opening>
						<CalendarDays size={17} /> Open the invitation
					</a> */}
					{/* <p className="hero-location" data-opening>
						{wedding.venue.name}
						<br />
						{wedding.venue.address}
					</p> */}
				</div>
			</section>
			<div className="blessing">
				<div data-enter>
					<p className="odia" lang="or">
						{welcome.odia}
					</p>
					<Flourish />
					<p className="blessing-meaning">{welcome.translation}</p>
				</div>
				<div className="couple-pair">
					{(["groom", "bride"] as const).map((role) => {
						const person = couple[role];
						return (
							<figure key={role} data-portrait>
								<div className="couple-portrait">
									{person.image ? (
										<Picture
											src={person.image}
											alt={person.alt || person.name}
										/>
									) : (
										<span aria-hidden="true">{person.name[0]}</span>
									)}
								</div>
								<figcaption>
									{/* <span className="portrait-role kicker">
										The {role}
									</span> */}
									<strong>{person.nickname || person.name}</strong>
									<small>{person.family}</small>
								</figcaption>
							</figure>
						);
					})}
				</div>
				<span className="blessing-monogram" aria-hidden="true">
					{initials}
				</span>
			</div>
		</>
	);
}
