import React, {useRef, useEffect} from 'react';
import './GitHubProjectPanel.scss';

type Params = {
	link: string;
	linkText: string;
};

const GitHubProjectPanel = (params: Params) => (
	<div className='Project-Panel'>
		<p className={'header'}>Github project link</p>
		<a className={'project-link'} href={params.link} target={'_blank'} rel='noreferrer'>
			<p>click here</p></a>
	</div>
);

export default GitHubProjectPanel;
