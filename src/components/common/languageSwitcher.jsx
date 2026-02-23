import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/languageSwitcher.css";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="language-switcher">
			<button
				className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
				onClick={() => changeLanguage("en")}
			>
				EN
			</button>
			<span className="lang-separator">|</span>
			<button
				className={`lang-btn ${i18n.language === "vi" ? "active" : ""}`}
				onClick={() => changeLanguage("vi")}
			>
				VI
			</button>
		</div>
	);
};

export default LanguageSwitcher;
