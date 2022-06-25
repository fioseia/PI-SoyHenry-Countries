
import React, { useEffect, useRef } from 'react';

const useTilt = () => {
	const ref = useRef(null);

	useEffect(() => {
		if (!ref.current) return;
		let card = ref.current;

		const handleMouseEnter = (e) => {
			const position = card.getBoundingClientRect();
			let mouseX = (e.clientX - position.left) / position.width;
			let mouseY = (e.clientY - position.top) / position.height;
			let rotateX = -45 * (mouseY - 0.5);
			let rotateY = 45 * (mouseX - 0.5);

			card.style.setProperty(
				'transform',
				` rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.05,1.05,1.05)`
			);
			card.style.setProperty('perpective', '1000');
			card.style.setProperty('transition', 'none');
		};

		const handleMouseLeave = (e) => {
			card.style.setProperty(
				'transform',
				` rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
			);
			card.style.setProperty('transition', 'transform 0.5s ease-in-out');
		};

		card.addEventListener('mousemove', handleMouseEnter);
		card.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			card.removeEventListener('mouseenter', handleMouseEnter);
			card.removeEventListener('mouseleave', handleMouseLeave);
		};
	});

	return ref;
};

export default useTilt;
