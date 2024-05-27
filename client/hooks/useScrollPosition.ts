"use client";

import { useEffect, useState } from "react";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const _ = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener("scroll", _);
		return () => {
			window.removeEventListener("scroll", _);
		};
	}, []);

	return scrollPosition;
};
export { useScrollPosition };
