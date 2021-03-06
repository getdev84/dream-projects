/** @format */

import React from 'react';

import './skills.styles.scss';
import programmimgDay from '../../../../img/undraw_programming_forDay.svg';
import programmimgNight from '../../../../img/undraw_programming_forNight.svg';

const LightDarkSkills = ({ isLightMode }) => {
	return (
		<section id='skills'>
			<h1 className='sk-h'>Skills</h1>
			<div className='sk-container'>
				<img
					src={isLightMode ? programmimgDay : programmimgNight}
					alt='Idea'
					id='image3'
				/>
			</div>
			<div
				className={`text-box text-box-len   ${
					isLightMode === false ? ' dark-text-box' : null
				}`}
				id='la'>
				<div className='lan'>
					<p className='lan-section-first' id='first'>
						Languages:
					</p>
					<span className='lan-section'>
						<p> Java Script , Python, HTML, CSS, SQL</p>
					</span>
				</div>
				<div className='lan'>
					<span>
						<p className='lan-section-first' id='first'>
							Libraries:
						</p>
					</span>
					<span className='lan-section'>
						<p>
							React, React-Router, React-Redux, Redux-Thunk, Sagas, Material UI,
							Bootstrap, StyledComponent, CSS-Grid, CSS-Flex Box, SASS
						</p>
					</span>
				</div>
				<div className='lan'>
					<p className='lan-section-first' id='first'>
						Data Base:
					</p>
					<span className='lan-section'>
						<p>SQL Server, MySQL, Postgres, Mongo DB, FireBase, Redise</p>
					</span>
				</div>
				<div className='lan'>
					<p className='lan-section-first' id='first'>
						Methodologies:
					</p>
					<span className='lan-section'>
						<p>
							Agile Software Development, REST API, Software design patterns,
							Circle CI
						</p>
					</span>
				</div>
			</div>
		</section>
	);
};

export default React.memo(LightDarkSkills);
