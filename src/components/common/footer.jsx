import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./styles/footer.css";

const Footer = () => {
	const { t } = useTranslation();
	
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
						<Link to="/">{t('nav.home')}</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link to="/about">{t('nav.about')}</Link>
					</li>
					<li className="footer-nav-link-item">
						<Link to="/projects">{t('nav.projects')}</Link>
					</li>
					{/* <li className="footer-nav-link-item">
						<Link to="/articles">{t('nav.articles')}</Link>
					</li> */}
					<li className="footer-nav-link-item">
						<Link to="/contact">{t('nav.contact')}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2026 pnga62782@gmail.com. {t('footer.copyright')}.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
