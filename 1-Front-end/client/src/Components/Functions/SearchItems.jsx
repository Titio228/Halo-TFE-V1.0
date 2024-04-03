function SearchClient(searchInput, list) {
  const filteredItems = list.filter(
    (person) =>
      person.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.dateOfBirth.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.email.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.phone.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.address.street.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.address.streetNumber
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      person.address.postalCode
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      person.address.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.address.country.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchDefunt(searchInput, list) {
  const filteredItems = list.filter(
    (person) =>
      person.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.dateOfBirth.toLowerCase().includes(searchInput.toLowerCase()) ||
      person.dateOfDead.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchItemsPromotion(searchInput, list) {
  const filteredItems = list.filter(
    (promotion) =>
      promotion.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      promotion.code.toLowerCase().includes(searchInput.toLowerCase()) ||
      promotion.startDate.toLowerCase().includes(searchInput.toLowerCase()) ||
      promotion.endDate.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchItemsPrice(searchInput, list) {
  const filteredItems = list.filter(
    (subscription) =>
      subscription.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      subscription.price.toString() === searchInput.toString() ||
      subscription.startDate
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      subscription.endDate.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchItemsOrder(searchInput, list) {
  const filteredItems = list.filter(
    (order) =>
      order.commandNumber.toString() === searchInput.toString() ||
      order.status.toLowerCase().includes(searchInput.toLowerCase()) ||
      order.customer.lastNameCustomer
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      order.customer.firstNameCustomer
        .toLowerCase()
        .includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchItemsEngraving(searchInput, list) {
  const filteredItems = list.filter(
    (engraving) =>
      engraving.commandNumber.toString() === searchInput.toString() ||
      engraving.status.toLowerCase().includes(searchInput.toLowerCase()) ||
      engraving.qrCode.toLowerCase().includes(searchInput.toLowerCase()) ||
      engraving.lastNameEngraver
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      engraving.firstNameEngraver
        .toLowerCase()
        .includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

function SearchItemsDelivery(searchInput, list) {
  const filteredItems = list.filter(
    (delivery) =>
      delivery.commandNumber.toString() === searchInput.toString() ||
      delivery.status.toLowerCase().includes(searchInput.toLowerCase()) ||
      delivery.deliverer.lastNameDeliverer
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      delivery.deliverer.firstNameDeliverer
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      delivery.address.street
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      delivery.address.streetNumber
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      delivery.address.postalCode
        .toLowerCase()
        .includes(searchInput.toLowerCase()) ||
      delivery.address.city.toLowerCase().includes(searchInput.toLowerCase()) ||
      delivery.address.country.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredItems;
}

export {
  SearchClient,
  SearchDefunt,
  SearchItemsPromotion,
  SearchItemsPrice,
  SearchItemsOrder,
  SearchItemsDelivery,
  SearchItemsEngraving,
};
