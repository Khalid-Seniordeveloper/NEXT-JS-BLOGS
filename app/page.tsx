import Image from "next/image"
import tshirt from "../app/assets/tshirt.jpeg"
import jeans from "../app/assets/jeans.webp"
import sho from "../app/assets/sho.jpeg"
import watch from "../app/assets/watch.jpeg"
import hat from "../app/assets/hat.jpeg"
import lap from "../app/assets/lap.jpeg"
import Link from "next/link"
function Home(){
  return(
    <div>
<div ><h1 className="text-center head ">ALL BLOGS !</h1></div>

<div className="main-blog-container flex-wrap gap-y-5 gap-x-5 flex justify-evenly mt-52">





<div className="blog-container slide-top">
<div><Image src={tshirt} alt = 'no image'  className="image-container"/></div>
<div className="blog-title"><h1>Mens T-Shirt</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>
<div  className="view"><Link href={'/blogone'}><button>View More</button></Link></div>


</div>




<div className="blog-container slide-top">

<div><Image src={jeans} alt = 'no image'  className="image-container"/></div>

<div className="blog-title"><h1>Jeans</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>

<div  className="view"><Link href={'/blogtwo'}><button>View More</button></Link></div>



</div>




<div className="blog-container slide-top">

<div><Image src={sho} alt = 'no image'  className="image-container"/></div>

<div className="blog-title"><h1>Shoes</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>
<div  className="view"><Link href={'/blogthree'}><button>View More</button></Link></div>



</div>




</div>


<div className="main-blog-container flex-wrap gap-y-5 gap-x-5 flex justify-evenly mt-11">



<div className="blog-container slide-top">

<div><Image src={watch} alt = 'no image'  className="image-container"/></div>
<div className="blog-title"><h1>Watch</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>
<div  className="view"><Link href={'/blogfour'}><button>View More</button></Link></div>



</div>



<div className="blog-container slide-top">

<div><Image src={hat} alt = 'no image'  className="image-container"/></div>

<div className="blog-title"><h1>Hat</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>
<div  className="view"><Link href={'/blogfive'}><button>View More</button></Link></div>


</div>




<div className="blog-container slide-top">

<div><Image src={lap} alt = 'no image'  className="image-container"/></div>

<div className="blog-title"><h1>Gaming Laptop</h1></div>
<div className="blog-description"><h3>Please click on view more to get more information about it ...</h3></div>
<div  className="view"><Link href={'/blogsix'}><button>View More</button></Link></div>



</div>



</div>


    </div>
  )
}

export default Home