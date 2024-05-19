import Image from "next/image";
import Grid from "./_components/grid";
import Link from "next/link";

// const urlList = Array(
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
//   "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
// );

export default function Page() {
  return (
    <>
      <div >
        {/* <Grid urlList={urlList} /> */}
        <p className="sm:mx-10 md:mx-16">
          Hello there! This site is still a work in progress. I&apos;ve made <em>some </em> 
          progress on the <Link href={`/solve/`} className="underline">&apos;solve&apos;</Link> functionality. 
          For a feature-complete implementation, check out the Django site on&nbsp;
          <Link href="https://hellointernet.onrender.com/captchapractice/" className="underline">Render</Link>.
         </p>
      </div>

    </>
  );
}
