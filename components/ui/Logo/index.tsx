import React from 'react';

import LogoSvg from '/assets/logo.svg';

interface Props {
    color: string;
}

const Logo: React.FC<Props> = ({ color, ...rest }) => {
    return <LogoSvg {...rest} {...{ color }}></LogoSvg>;
};

export default Logo;
