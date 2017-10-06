import React from 'react'
import Link from 'gatsby-link'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Modal from 'react-modal'

const images = [
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
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      	<Masonry gutter="5px">
          {images.map((image, i) =>
            <img key={i} src={image} style={{width: "100%", display: "block"}} />
          )}
      	</Masonry>
  	</ResponsiveMasonry>
    <Modal
  isOpen={true}
  contentLabel="Modal"
>
  <h1>Modal Content</h1>
  <p>Etc.</p>
</Modal>
  </div>
)

export default IndexPage
