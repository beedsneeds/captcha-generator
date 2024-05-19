import "server-only"; 

export async function getCaptcha(img_id: number) {
  const res = await fetch(
    // `http://127.0.0.1:10000/captchapractice/api/captcha/${img_id}/?format=json`,
    `https://hellointernet.onrender.com/captchapractice/api/captcha/${img_id}/?format=json`,

    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCaptchaList() {
  const res = await fetch(
    // `http://127.0.0.1:10000/captchapractice/api/captcha/?format=json`,
    `https://hellointernet.onrender.com/captchapractice/api/captcha/?format=json`,

    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
