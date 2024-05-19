// This code should belong to a 'index' page, rather than main page of solve

import Link from "next/link";

async function getCaptchaList() {
  const res = await fetch(
    `http://127.0.0.1:10000/captchapractice/api/captcha/?format=json`,
    //   `https://hellointernet.onrender.com/captchapractice/api/captcha/?format=json`,

    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const imgObjectList = await getCaptchaList();

  const listCaptchaPrompts = imgObjectList.map((imgObject: any) => (
    <li key={imgObject.pk}>
      <Link href={"/solve/" + imgObject.pk} className="underline">
        {imgObject.prompt_text} {imgObject.slice_count}
      </Link>
    </li>
  ));

  return (
    <>
      <p>
        Mimics the captcha{" "}
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
