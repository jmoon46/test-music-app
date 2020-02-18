import React from 'react';
import Scale from './Scale';

const ScaleWrapper = () => {
	const modes = ["Lydian", "Major", "Mixolydian", "Dorian", "Minor", "Phrygian", "Locrian"]

	const scales = modes.map((mode, index) => (
    <Scale mode={mode} key={index} />
  ));
	return (
		<div>
			{scales}
		</div>
	)
}

export default ScaleWrapper;