import React from 'react';
import { Image as Img } from 'theme-ui';

export default function Image({ src, ...rest }) {
  return <div>
    <Img src={src.src} {...rest} />
  </div>;
}
