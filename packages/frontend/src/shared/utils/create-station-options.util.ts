import { ISelectOption, IStation } from '../types';

export const createStationOptions = (stations: Array<IStation>): Array<ISelectOption> => {
  return stations.map((station: IStation) => {
    return {
      value: station.id,
      label: station.name,
    }
  })
}