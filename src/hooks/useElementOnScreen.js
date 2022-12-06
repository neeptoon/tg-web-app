import {useEffect, useRef, useState} from 'react';

export const useElementOnScreen = (options, id = null) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    const callbackFUnction = (entries, observer) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFUnction, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);

            options.unobserve && isVisible && observer.unobserve(containerRef.current);
        };

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef, options, id]);

    return [containerRef, isVisible];
};