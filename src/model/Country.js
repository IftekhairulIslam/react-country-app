export default class Country {
  constructor(data) {
    this.name = data.name.common;
    this.officialName = data.name.official;
    this.capital = data.capital ? data.capital[0] : "---";
    this.flag = data.flags.svg;
    this.region = data.region;
    this.subregion = data.subregion;
    this.population = data.population;

    this.languages = (() => {
      return data.languages
        ? Object.values(data.languages).map((value) => value)
        : [];
    })();

    this.currencies = (() => {
      return data.currencies
        ? Object.values(data.currencies).map((value) => value)
        : [];
    })();

    this.idd = (() => {
      if (data.idd.suffixes) {
        return data.idd.suffixes.map((suffix) => data.idd.root + suffix);
      } else return [];
    })();

    this.maps = data.maps;
  }
}
