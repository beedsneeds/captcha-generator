import Grid from "@/app/_components/grid";
import { getCaptcha } from "@/app/_data/api";



export default async function Page({ params }: { params: { img_id: number } }) {
  const imgObject = await getCaptcha(params.img_id);

  const urlList = imgObject.slice_list.map(
    (imgSlice: any) => `/captchaprompts/slices/${imgSlice.slice_name}.jpg`
  );

  return (
    <>
      <p className="flex text-lg font-medium text-gray-900 justify-center">
        {imgObject.prompt_text}
      </p>
      <br></br>
      <Grid urlList={urlList} />
    </>
  );
}
