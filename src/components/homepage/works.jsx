import React from "react";
import { useTranslation } from "react-i18next";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const { t } = useTranslation();

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title={t('homepage.work')}
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logoCybersoft.png"
								alt="Cybersoft Academy"
								className="work-image"
							/>
							<div className="work-title">Cybersoft Academy <br />
								{/* <div className="work-subtitle"> */}
									{t('homepage.workTitle')}
								{/* </div> */}
								</div>

							<div className="work-duration">{t('homepage.workDuration')}</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Works;
