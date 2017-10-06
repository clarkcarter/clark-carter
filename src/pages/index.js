import React from 'react'
import Link from 'gatsby-link'
import { Gallery, Image, Overlay } from 'react-stylish-gallery'

const imageGallery = [
  "https://github.com/clarkcarter/clark-carter/blob/master/src/images/160129-4x5-01-A.jpg?raw=true",
  "https://github.com/clarkcarter/clark-carter/blob/master/src/images/160227-4x5-01-E.jpg?raw=true",
  "https://github.com/clarkcarter/clark-carter/blob/master/src/images/160227-4x5-02-F.jpg?raw=true",
]

const IndexPage = () => (
  <div>
    <Gallery withModal>
      <Image src={imageGallery[0]} alt="Image 1" />
      <Image src={imageGallery[1]} alt="Image 2" />
      <Image src={imageGallery[2]} alt="Image 2" />
    </Gallery>
  </div>
)

export default IndexPage
