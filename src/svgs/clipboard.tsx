import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

const ClipboardIcon = () => {
  return (
    <Svg
      width={57}
      height={56}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path
        fill="url(#pattern0)"
        d="M0.5 0H56.5V56H0.5z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_401_630"
            transform="scale(.01)"
          />
        </Pattern>
        <Image
          id="image0_401_630"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default ClipboardIcon
