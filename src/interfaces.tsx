export interface ILead {
    comment: string,
    email: string,
    phone: string,
    date?: string,
}
  

export interface IProduct {
    geoName: string,
    enName: string,
    geoDescr: string,
    enDescr: string,
    enCategory: string,
    geoCategory: string,
    images: string[],
    price: string,
    isAvailable: boolean,
    id: string,
}
  