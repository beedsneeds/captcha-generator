// This code should belong to an 'index' page, rather than main page of solve

import Link from "next/link";
import { getCaptchaList } from "../_data/drf-api";

export default async function Page() {
  const imgObjectList = await getCaptchaList();

  const listCaptchaPrompts = imgObjectList.map((imgObject: any) => (
    <li key={imgObject.pk}>
      <Link href={"/solve/" + imgObject.pk} className="underline">
        {imgObject.prompt_text}
      </Link>
    </li>
  ));

  return (
    <>
      <p>
        Goal: to mimic the captcha{" "}
        <a
          href="https://hellointernet.onrender.com/captchapractice/begin/"
          className="underline"
        >
          challenge
        </a>{" "}
        page where you&apos;ll solve a series of 4 captcha{" "}
      </p>
      {listCaptchaPrompts}
    </>
  );
}
