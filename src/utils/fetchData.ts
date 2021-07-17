export async function fetchData(setDogdetails: (arg0: any) => void) {
  const res = await fetch(`http://pets-v2.dev-apis.com/pets`);
  const json = await res.json();

  setDogdetails(json.pets);
}
