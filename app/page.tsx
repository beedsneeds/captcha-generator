import Image from "next/image"
import Grid from "./ui/grid"


const urlImgArray = Array(
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
  "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
)

export default function Page() {
  return (
    <>
      <Grid urlImgArray={urlImgArray}/>
    </>

  )
}