global.window = global;
require('../src/data');
require('./data.spec.js');
require('../src/data.js');
const country = 'PER';
const sector = 'SL'

const input =
  {
    "PER": {
      "indicators": [
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 31.4799995422363,
            "2003": 29.6299991607666,
            "2004": 27.6299991607666,
            "2005": 27.2099990844727,
            "2006": 26.9699993133545,
            "2007": 27.6700000762939,
            "2008": 26.9599990844727,
            "2009": 27.3600006103516,
            "2010": 25.3400001525879,
            "2011": 24.7999992370605,
            "2012": 25.0400009155273,
            "2013": 24.0900001525879,
            "2014": 24.2099990844727,
            "2015": 21.6800003051758,
            "2016": 23.7399997711182,
            "2017": 23.7600002288818
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
          "indicatorCode": "SL.TLF.PART.FE.ZS"
        },
        {
          "data": {
            "1960": "",
            "1961": "",
            "1962": "",
            "1963": "",
            "1964": "",
            "1965": "",
            "1966": "",
            "1967": "",
            "1968": "",
            "1969": "",
            "1970": "",
            "1971": "",
            "1972": "",
            "1973": "",
            "1974": "",
            "1975": "",
            "1976": "",
            "1977": "",
            "1978": "",
            "1979": "",
            "1980": "",
            "1981": "",
            "1982": "",
            "1983": "",
            "1984": "",
            "1985": "",
            "1986": "",
            "1987": "",
            "1988": "",
            "1989": "",
            "1990": "",
            "1991": "",
            "1992": "",
            "1993": "",
            "1994": "",
            "1995": "",
            "1996": "",
            "1997": "",
            "1998": "",
            "1999": "",
            "2000": "",
            "2001": "",
            "2002": 57.3788986206055,
            "2003": 59.2597007751465,
            "2004": 60.5155982971191,
            "2005": 58.567699432373,
            "2006": 59.5596008300781,
            "2007": 62.5275993347168,
            "2008": 61.5718002319336,
            "2009": 63.0060997009277,
            "2010": 64.4614028930664,
            "2011": 64.3878021240234,
            "2012": 63.0351982116699,
            "2013": 62.2015991210938,
            "2014": 61.209400177002,
            "2015": 62.2141990661621,
            "2016": 61.5542984008789,
            "2017": 61.4822998046875
          },
          "countryName": "Perú",
          "countryCode": "PER",
          "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
          "indicatorCode": "SL.TLF.INTM.ZS"
        }
      ]
    }
  }
  const output =
  [
    {
      countryCode: "PER",
      countryName: "Perú",
      data:{
        "1960": "",
        "1961": "",
        "1962": "",
        "1963": "",
        "1964": "",
        "1965": "",
        "1966": "",
        "1967": "",
        "1968": "",
        "1969": "",
        "1970": "",
        "1971": "",
        "1972": "",
        "1973": "",
        "1974": "",
        "1975": "",
        "1976": "",
        "1977": "",
        "1978": "",
        "1979": "",
        "1980": "",
        "1981": "",
        "1982": "",
        "1983": "",
        "1984": "",
        "1985": "",
        "1986": "",
        "1987": "",
        "1988": "",
        "1989": "",
        "1990": "",
        "1991": "",
        "1992": "",
        "1993": "",
        "1994": "",
        "1995": "",
        "1996": "",
        "1997": "",
        "1998": "",
        "1999": "",
        "2000": "",
        "2001": "",
        "2002": 31.4799995422363,
        "2003": 29.6299991607666,
        "2004": 27.6299991607666,
        "2005": 27.2099990844727,
        "2006": 26.9699993133545,
        "2007": 27.6700000762939,
        "2008": 26.9599990844727,
        "2009": 27.3600006103516,
        "2010": 25.3400001525879,
        "2011": 24.7999992370605,
        "2012": 25.0400009155273,
        "2013": 24.0900001525879,
        "2014": 24.2099990844727,
        "2015": 21.6800003051758,
        "2016": 23.7399997711182,
        "2017": 23.7600002288818
      },
      indicatorCode: "SL.TLF.PART.FE.ZS",
      indicatorName: "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"
    },
    {
      countryCode: "PER",
      countryName: "Perú",
      data:{
        "1960": "",
        "1961": "",
        "1962": "",
        "1963": "",
        "1964": "",
        "1965": "",
        "1966": "",
        "1967": "",
        "1968": "",
        "1969": "",
        "1970": "",
        "1971": "",
        "1972": "",
        "1973": "",
        "1974": "",
        "1975": "",
        "1976": "",
        "1977": "",
        "1978": "",
        "1979": "",
        "1980": "",
        "1981": "",
        "1982": "",
        "1983": "",
        "1984": "",
        "1985": "",
        "1986": "",
        "1987": "",
        "1988": "",
        "1989": "",
        "1990": "",
        "1991": "",
        "1992": "",
        "1993": "",
        "1994": "",
        "1995": "",
        "1996": "",
        "1997": "",
        "1998": "",
        "1999": "",
        "2000": "",
        "2001": "",
        "2002": 57.3788986206055,
        "2003": 59.2597007751465,
        "2004": 60.5155982971191,
        "2005": 58.567699432373,
        "2006": 59.5596008300781,
        "2007": 62.5275993347168,
        "2008": 61.5718002319336,
        "2009": 63.0060997009277,
        "2010": 64.4614028930664,
        "2011": 64.3878021240234,
        "2012": 63.0351982116699,
        "2013": 62.2015991210938,
        "2014": 61.209400177002,
        "2015": 62.2141990661621,
        "2016": 61.5542984008789,
        "2017": 61.4822998046875
      },
      indicatorCode: "SL.TLF.INTM.ZS",
      indicatorName: "Fuerza laboral con educación intermedia (% del total)"
    }
    
  ];

  const outputFem = [
    {
      "data": {
        "1960": "",
        "1961": "",
        "1962": "",
        "1963": "",
        "1964": "",
        "1965": "",
        "1966": "",
        "1967": "",
        "1968": "",
        "1969": "",
        "1970": "",
        "1971": "",
        "1972": "",
        "1973": "",
        "1974": "",
        "1975": "",
        "1976": "",
        "1977": "",
        "1978": "",
        "1979": "",
        "1980": "",
        "1981": "",
        "1982": "",
        "1983": "",
        "1984": "",
        "1985": "",
        "1986": "",
        "1987": "",
        "1988": "",
        "1989": "",
        "1990": "",
        "1991": "",
        "1992": "",
        "1993": "",
        "1994": "",
        "1995": "",
        "1996": "",
        "1997": "",
        "1998": "",
        "1999": "",
        "2000": "",
        "2001": "",
        "2002": 31.4799995422363,
        "2003": 29.6299991607666,
        "2004": 27.6299991607666,
        "2005": 27.2099990844727,
        "2006": 26.9699993133545,
        "2007": 27.6700000762939,
        "2008": 26.9599990844727,
        "2009": 27.3600006103516,
        "2010": 25.3400001525879,
        "2011": 24.7999992370605,
        "2012": 25.0400009155273,
        "2013": 24.0900001525879,
        "2014": 24.2099990844727,
        "2015": 21.6800003051758,
        "2016": 23.7399997711182,
        "2017": 23.7600002288818
      },
      "countryName": "Perú",
      "countryCode": "PER",
      "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
      "indicatorCode": "SL.TLF.PART.FE.ZS"
    }
  ];
  
const outputEqualId = 'SL.TLF.INTM.FE.ZS';

const outputDataIndicator = {
  
       "1960": "",
        "1961": "",
        "1962": "",
        "1963": "",
        "1964": "",
        "1965": "",
        "1966": "",
        "1967": "",
        "1968": "",
        "1969": "",
        "1970": "",
        "1971": "",
        "1972": "",
        "1973": "",
        "1974": "",
        "1975": "",
        "1976": "",
        "1977": "",
        "1978": "",
        "1979": "",
        "1980": "",
        "1981": "",
        "1982": "",
        "1983": "",
        "1984": "",
        "1985": "",
        "1986": "",
        "1987": "",
        "1988": "",
        "1989": "",
        "1990": "",
        "1991": "",
        "1992": "",
        "1993": "",
        "1994": "",
        "1995": "",
        "1996": "",
        "1997": "",
        "1998": "",
        "1999": "",
        "2000": "",
        "2001": "",
        "2002": 31.4799995422363,
        "2003": 29.6299991607666,
        "2004": 27.6299991607666,
        "2005": 27.2099990844727,
        "2006": 26.9699993133545,
        "2007": 27.6700000762939,
        "2008": 26.9599990844727,
        "2009": 27.3600006103516,
        "2010": 25.3400001525879,
        "2011": 24.7999992370605,
        "2012": 25.0400009155273,
        "2013": 24.0900001525879,
        "2014": 24.2099990844727,
        "2015": 21.6800003051758,
        "2016": 23.7399997711182,
        "2017": 23.7600002288818
}

  
 

describe('worldBank', () => {
  it('deberia ser un objeto', () => {
    expect(typeof global.worldBank).toBe('object');
  });
  it('debería ser una función', () => {
    expect(typeof global.worldBank.filterDataCountries).toBe('function')
  });
  it('debería retornar un array de objetos', () => {
    expect(typeof global.worldBank.filterDataCountries(input, country, sector)).toBe('object')
  });
  it('debería retornar un array de objetos de la data', () => {
    expect(global.worldBank.filterDataCountries(input, country, sector)).toEqual(output);
  });

  it('deberia ser una funcion', () => {
    expect(typeof global.worldBank.filterFemIndicators).toBe('function')
  });
  it('deberia retornar un array de objetos', () => {
    expect(global.worldBank.filterFemIndicators(output)).toEqual(outputFem);
  });

  it('deberia ser una funcion', () => {
    expect(typeof global.worldBank.indicatorData).toBe('function')
  });
  it('deberia retornar un objeto', () => {
    expect(typeof global.worldBank.indicatorData(outputFem, outputEqualId)).toBe('object')
  });
  it('debería retornar un objeto de la data de un indicador', () => {
    expect(typeof global.worldBank.indicatorData(outputFem, outputEqualId)).toEqual(outputDataIndicator);
  });
});