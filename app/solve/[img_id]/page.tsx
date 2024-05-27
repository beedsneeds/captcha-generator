import Grid from "@/app/_components/grid";
import { getCaptcha } from "@/app/_data/api";



export default async function Page({ params }: { params: { img_id: number } }) {
  const imgObject = await getCaptcha(params.img_id);

  const urlList = imgObject.slice_list.map(
    (imgSlice: any) => `/captchaprompts/slices/${imgSlice.slice_name}.jpg`
  );

  return (
    <>
      <Grid urlList={urlList} prompt_text={imgObject.prompt_text} />
    </>
  );
}
