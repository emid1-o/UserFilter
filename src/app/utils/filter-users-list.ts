import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByName = (name: string, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPED = name === undefined;

    if (NAME_NOT_TYPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLowerCase()))

    return filteredList;
}


const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;

}


const fiterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATE_UNDEFINED = startDate === undefined || endDate === undefined;

    if (DATE_UNDEFINED) {
        return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    }))

    return listFiltered;

}


const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = fiterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

export { filterUsersList };
  