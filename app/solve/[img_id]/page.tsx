import Grid from "@/app/_components/grid";

async function getCaptcha(img_id: number) {
  const res = await fetch(
    `http://127.0.0.1:10000/captchapractice/api/captcha/${img_id}/?format=json`,
    // `https://hellointernet.onrender.com/captchapractice/api/captcha/${img_id}/?format=json`,

    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { img_id: number } }) {
  const imgObject = await getCaptcha(params.img_id);

//   const urlList = Array(
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg",
//     "https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
//   );

  const urlList = imgObject.slice_list.map(
    (imgSlice: any) => `/captchaprompts/slices/${imgSlice.slice_name}.jpg`
  );
  //     <li key={imgSlice.slice_name}>
  //         {imgSlice.slice_name}
  //     </li>
  //   ));

  console.log(urlList);

  return (
    <>
      <p>Hello there</p>
      <p>
        {imgObject.prompt_text} {imgObject.slice_count}
      </p>
      <Grid urlList={urlList} />
      {/* {listSlices} */}
    </>
  );
}
