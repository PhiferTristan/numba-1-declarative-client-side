export const getAllHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};

export const getHaulerById = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}?_expand=docks`).then(
    (res) => res.json()
  );
};

export const editHauler = (hauler) => {
  const payload = {
    id: hauler.id,
    name: hauler.name,
    dock_id: hauler.dock_id,
  };
  return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .catch((error) => {
      console.error("API request failed:", error);
    });
};
