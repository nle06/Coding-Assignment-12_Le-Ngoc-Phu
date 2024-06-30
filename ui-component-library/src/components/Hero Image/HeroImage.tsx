import React from 'react';

type HeroImageProps = {
    src: string;
    alt: string;
    height: string;
    disabled?: boolean;  // Adding disabled as an optional prop
};

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height, disabled }) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{ height: height, opacity: disabled ? 0.5 : 1 }}  // Example usage of disabled
        />
    );
};

export default HeroImage;
