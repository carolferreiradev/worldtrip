import axios from "axios";
import continentsJson from "./information.json";

export interface Countries {
  name?: string;
  flag?: string;
  capital?: string;
  coatOfArms?: string;
}

export interface IContinent {
  listCountries?: Countries[];
  description?: string;
  nameContinent?: string;
}

export async function getCountriesByContinent(continent: string): Promise<IContinent> {
  const { data } = await axios.get(
    `https://restcountries.com/v3.1/region/${continent}`
  );
  if (data) {
    const listCountries: Countries[] = data.map((countrieS) => {
      return {
        name: countrieS.translations.por.common,
        flag: countrieS.flags.svg,
        capital: countrieS.capital,
        coatOfArms: countrieS.coatOfArms.svg,
      };
    });
    const continentResponse:IContinent = {
      description: continentsJson[continent]?.description || null,
      nameContinent: continentsJson[continent]?.name || null,
      listCountries,
    };
    return continentResponse;
  }
  return;
}
