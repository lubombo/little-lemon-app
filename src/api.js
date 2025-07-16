export async function submitForm(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve(true);
    }, 2000); // symuluje opóźnienie 2s
  });
}