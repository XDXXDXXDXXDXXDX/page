const httpServer =
  "https://data.mongodb-api.com/app/data-cchae/endpoint/data/beta";

const HTTPFetch = ({ server = httpServer, resource, method, payload = {} }) => {
  let uri = `${server}/${resource}`;
  let body = Object.assign(payload, {
    collection: "random",
    database: "XDX",
    dataSource: "Cluster0",
  });

  const headers = {
    "Access-Control-Request-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "api-key":
      "QSEy8gKC0byiPMI7YMFvFTBCcwZivRtDckuvRhLf6i5NvfAhUzlh7WoHMw8egLCz",
  };
  return fetch(uri, { method, body, headers })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
};

export default HTTPFetch;
