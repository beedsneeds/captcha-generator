

async function getCaptchaList() {
  const res = await fetch(
    `http://127.0.0.1:10000/captchapractice/api/captcha/?format=json`,
    { next: { revalidate: 60 } }
  );
  // const res = await fetch(
  //   `https://hellointernet.onrender.com/captchapractice/api/captcha/?format=json`,
  //   { next: { revalidate: 60 } }
  // );
  // const res = await fetch(`https://catfact.ninja/fact`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const op = await getCaptchaList();



  const listImages = op.map((op: any) => (
    <li key={op.pk}>
      <a href={"/solve/" + op.pk} className="underline">{op.prompt_text}</a>
    </li>
  ));

  // console.log(op);
  // console.log("we reaching this");
  // op.map((op : any) => (
  //   console.log(op.prompt_text)
  // ))

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
      {/* <p>
        {op.fact}
      </p> */}
      {listImages}
    </>
  );
}
