import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	const { t } = useTranslation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							{t('contact.title')}
						</div>

						<div className="subtitle contact-subtitle">
							{t('contact.subtitle')}
							{" "}{t('contact.emailMe')}{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. {t('contact.responseTime')}
							{" "}{t('contact.socialConnect')}{" "}
							<a
								href={INFO.socials.facebook}
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
							. {t('contact.lookingForward')}
						</div>
					</div>
					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
