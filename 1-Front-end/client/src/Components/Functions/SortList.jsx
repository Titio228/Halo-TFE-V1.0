function SortListUsers(list) {
  const sortList = [...list];
  sortList.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return sortList;
}

function SortListActions(list) {
  const sortList = [...list];
  sortList.sort((a, b) => a.name.localeCompare(b.name));
  return sortList;
}

function SortListNumber(list) {
  const sortList = [...list];
  sortList.sort((a, b) => a.commandNumber - b.commandNumber);
  return sortList;
}

function SortListUsersByCriteria(list, asc, key) {
  const sortList = [...list];

  switch (key) {
    case "name":
      if (asc) {
        sortList.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        sortList.sort((a, b) => b.name.localeCompare(a.name));
      }
      return sortList;
    case "qrCode":
      if (asc) {
        sortList.sort((a, b) => a.qrCode.localeCompare(b.qrCode));
      } else {
        sortList.sort((a, b) => b.qrCode.localeCompare(a.qrCode));
      }
      return sortList;
    case "lastName":
      if (asc) {
        sortList.sort((a, b) => a.lastName.localeCompare(b.lastName));
      } else {
        sortList.sort((a, b) => b.lastName.localeCompare(a.lastName));
      }
      return sortList;
    case "lastNameDeliverer":
      if (asc) {
        sortList.sort((a, b) =>
          a.deliverer.lastNameDeliverer.localeCompare(
            b.deliverer.lastNameDeliverer
          )
        );
      } else {
        sortList.sort((a, b) =>
          b.deliverer.lastNameDeliverer.localeCompare(
            a.deliverer.lastNameDeliverer
          )
        );
      }
      return sortList;
    case "lastNameCustomer":
      if (asc) {
        sortList.sort((a, b) =>
          a.customer.lastNameCustomer.localeCompare(b.customer.lastNameCustomer)
        );
      } else {
        sortList.sort((a, b) =>
          b.customer.lastNameCustomer.localeCompare(a.customer.lastNameCustomer)
        );
      }
      return sortList;
    case "lastNameEngraver":
      if (asc) {
        sortList.sort((a, b) =>
          a.lastNameEngraver.localeCompare(b.lastNameEngraver)
        );
      } else {
        sortList.sort((a, b) =>
          b.lastNameEngraver.localeCompare(a.lastNameEngraver)
        );
      }
      return sortList;
    case "firstName":
      if (asc) {
        sortList.sort((a, b) => a.firstName.localeCompare(b.firstName));
      } else {
        sortList.sort((a, b) => b.firstName.localeCompare(a.firstName));
      }
      return sortList;
    case "firstNameDeliverer":
      if (asc) {
        sortList.sort((a, b) =>
          a.deliverer.firstNameDeliverer.localeCompare(
            b.deliverer.firstNameDeliverer
          )
        );
      } else {
        sortList.sort((a, b) =>
          b.deliverer.firstNameDeliverer.localeCompare(
            a.deliverer.firstNameDeliverer
          )
        );
      }
      return sortList;
    case "firstNameEngraver":
      if (asc) {
        sortList.sort((a, b) =>
          a.firstNameEngraver.localeCompare(b.firstNameEngraver)
        );
      } else {
        sortList.sort((a, b) =>
          b.firstNameEngraver.localeCompare(a.firstNameEngraver)
        );
      }
      return sortList;
    case "firstNameCustomer":
      if (asc) {
        sortList.sort((a, b) =>
          a.customer.firstNameCustomer.localeCompare(
            b.customer.firstNameCustomer
          )
        );
      } else {
        sortList.sort((a, b) =>
          b.customer.firstNameCustomer.localeCompare(
            a.customer.firstNameCustomer
          )
        );
      }
      return sortList;
    case "dateOfBirth":
      if (asc) {
        sortList.sort((a, b) => a.dateOfBirth.localeCompare(b.dateOfBirth));
      } else {
        sortList.sort((a, b) => b.dateOfBirth.localeCompare(a.dateOfBirth));
      }
      return sortList;
    case "dateOfDead":
      if (asc) {
        sortList.sort((a, b) => a.dateOfDead.localeCompare(b.dateOfDead));
      } else {
        sortList.sort((a, b) => b.dateOfDead.localeCompare(a.dateOfDead));
      }
      return sortList;
    case "date":
      if (asc) {
        sortList.sort((a, b) => a.date.localeCompare(b.date));
      } else {
        sortList.sort((a, b) => b.date.localeCompare(a.date));
      }
      return sortList;
    case "startDate":
      if (asc) {
        sortList.sort((a, b) => a.startDate.localeCompare(b.startDate));
      } else {
        sortList.sort((a, b) => b.startDate.localeCompare(a.startDate));
      }
      return sortList;
    case "endDate":
      if (asc) {
        sortList.sort((a, b) => a.endDate.localeCompare(b.endDate));
      } else {
        sortList.sort((a, b) => b.endDate.localeCompare(a.endDate));
      }
      return sortList;
    case "email":
      if (asc) {
        sortList.sort((a, b) => a.email.localeCompare(b.email));
      } else {
        sortList.sort((a, b) => b.email.localeCompare(a.email));
      }
      return sortList;
    case "phone":
      if (asc) {
        sortList.sort((a, b) => a.phone.localeCompare(b.phone));
      } else {
        sortList.sort((a, b) => b.phone.localeCompare(a.phone));
      }
      return sortList;
    case "commandNumber":
      if (asc) {
        sortList.sort((a, b) => a.commandNumber - b.commandNumber);
      } else {
        sortList.sort((a, b) => b.commandNumber - a.commandNumber);
      }
      return sortList;
    case "price":
      if (asc) {
        sortList.sort((a, b) => a.price - b.price);
      } else {
        sortList.sort((a, b) => b.price - a.price);
      }
      return sortList;
    case "status":
      if (asc) {
        sortList.sort((a, b) => a.status.localeCompare(b.status));
      } else {
        sortList.sort((a, b) => b.status.localeCompare(a.status));
      }
      return sortList;
    case "statusPromotion":
      if (asc) {
        sortList.sort((a, b) =>
          a.status === true ? -1 : b.status === true ? 1 : 0
        );
      } else {
        sortList.sort((a, b) =>
          a.status === true ? 1 : b.status === true ? -1 : 0
        );
      }
      return sortList;
    default:
      break;
  }
}

export {
  SortListUsers,
  SortListActions,
  SortListNumber,
  SortListUsersByCriteria,
};
