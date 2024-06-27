"use server";

export async function postthiscrap(
  imageUrl: string | null,
  imageName: string,
  captchaName: string
) {
  try {
    const csrfResponse = await fetch("http://127.0.0.1:8000/csrf/");
    if (!csrfResponse.ok) {
      throw new Error(`CSRF Token fetch failed: ${csrfResponse.status}`);
    }
    const csrfToken = await csrfResponse.json();

    let formData = {
      image_url: imageUrl,
      image_name: imageName,
      captcha_name: captchaName,
    };
    console.log(formData);
    const response = await fetch("http://127.0.0.1:8000/detect/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken.csrfToken,
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status: ${response.status}, response: ${errorText}`
      );
    }
    const result = await response.json();
    console.log("Success", result);
    return result.upload_url
  } catch (error) {
    // console.error("`Error`", error);
    console.error("`u dun fked up`");
  }

  // await new Promise((resolve) => setTimeout(resolve, 2000));
}
