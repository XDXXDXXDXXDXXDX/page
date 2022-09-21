export const getNounList = async () => {
  const response = await fetch({
    method: "POST",
    resource: "action/find",
  });
  return response;
};
