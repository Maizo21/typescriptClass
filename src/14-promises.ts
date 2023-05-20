import axios from "axios";
(async () => {
  function delay(time: number = 1000) {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("Finish");
      }, time);
    });
    return promise;
  }

  const rta = await delay(2000);

  console.log(rta);

  async function getProducts() {
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products");
    return promise;
  }

  const products = await getProducts();

  console.log(products);
})();
