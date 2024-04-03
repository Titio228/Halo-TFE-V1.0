function DataTest() {
  const dataTest = [
    {
      id: 1,
      name: "Basic",
      startDate: "2021-08-06",
      endDate: "2005-02-05",
      status: true,
      price: 30,
      options: ["Ajouter un titre", "Ajouter un texte (2000 caractères)"],
      is_checked: false,
    },
    {
      id: 2,
      name: "Medium",
      startDate: "2011-03-11",
      endDate: "2009-01-01",
      status: false,
      price: 60,
      options: [
        "Ajouter un titre",
        "Ajouter un texte (2000 caractères)",
        "Ajouter une photo",
      ],
      is_checked: false,
    },
    {
      id: 3,
      name: "Premium",
      startDate: "2015-03-01",
      endDate: "2000-12-17",
      status: true,
      price: 90,
      options: [
        "Ajouter un titre",
        "Ajouter un texte (2000 caractères)",
        "Ajouter une photo",
        "Ajouter une vidéo",
      ],
      is_checked: false,
    },
  ];

  return dataTest;
}

export default DataTest;
