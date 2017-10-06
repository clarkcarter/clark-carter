import React from 'react'
import Link from 'gatsby-link'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

const imageGallery = [
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160129-4x5-01-A.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160221-4x5-01-F.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160227-4x5-01-E.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160227-4x5-02-F.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160319-4x5-02-B.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160409-4x5-04-C.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160410-4x5-01-D.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160417-4x5-01-E.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160507-4x5-01-C.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160508-4x5-01-D.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/160911-4x5-04-C.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170108-4x5-02-E.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170407-135-01-10.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170408-4x5-01-D.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170418-135-01-12.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170430-120-01-10.jpg?raw=true",
"https://github.com/clarkcarter/clark-carter/blob/master/src/images/170621-120-01-05.jpg?raw=true",
]

const IndexPage = () => (
  <div>
    <Gallery withModal>
      <Image src={imageGallery[0]} alt="Image 1" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[1]} alt="Image 2" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[2]} alt="Image 3" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[3]} alt="Image 4" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[4]} alt="Image 5" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[5]} alt="Image 6" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[6]} alt="Image 7" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[7]} alt="Image 8" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[8]} alt="Image 9" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[9]} alt="Image 10" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[10]} alt="Image 11" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[11]} alt="Image 12" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[12]} alt="Image 13" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[13]} alt="Image 14" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[14]} alt="Image 15" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[15]} alt="Image 16" theme={{ padding: '5px' }}/>
      <Image src={imageGallery[16]} alt="Image 17" theme={{ padding: '5px' }}/>
    </Gallery>
  </div>
)

export default IndexPage
