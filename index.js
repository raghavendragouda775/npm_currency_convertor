import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_IgobSnniT79ijpuKS97fAS6UpXygsUVQL8kiqB9s');


export async function convertCurrency(fromcurrency,tocurrency,units) {
  const res=await freecurrencyapi.latest({
        base_currency:fromcurrency,
        currencies:tocurrency
    });
    const multiplier=res.data[tocurrency];
    return multiplier*units;
}
