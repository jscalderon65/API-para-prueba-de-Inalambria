const BestSellingProduct = (req, res, dataSets) => {
    const bestProducts = dataSets.map(data => {
        const [info, ...sales] = data;

        const { Cod_De_Producto_Descrip } = info;

        const codes = sales.map(item => item.Cod_Producto_Mas_Vendido);

        const ProductInfo = codes.reduce((acum, el, i, ar) => {
            const count = ar.filter(e => e == el).length;
            return count > acum[1] ? [el, count] : acum;
        }, ["", 0]);

        return Cod_De_Producto_Descrip.map(item => {
            if (item.Cod === ProductInfo[0]) {
                return {
                    Nombre_Proveedor: info.Nombre_De_Proveedor,
                    Nombre_producto_más_vendido: item.Nombre,
                    Número_de_Unidades_vendidas: ProductInfo[1]
                };
            }
            return 0;
        }).filter(item => typeof (item) !== "number");

    })
    res.json(bestProducts.flat());
};

const BestSellingDay = (req, res, dataSets) => {
    const bestProducts = dataSets.map(data => {
        const [info, ...sales] = data;

        const codes = sales.map(item => item.Ventas).sort();

        const BestDay = sales.map(item => {
            if (item.Ventas === codes[0]) {
                return {
                    Nombre_Proveedor: info.Nombre_De_Proveedor,
                    Día_más_vendido: item.Dia,
                    Ganancia: codes[0]
                }
            }
            return 0
        }).filter(item => typeof (item) !== "number");

        return BestDay;

    })
    res.json(bestProducts.flat());
};

const WorstSellingDay = (req, res, dataSets) => {
    const bestProducts = dataSets.map(data => {
        const [info, ...sales] = data;

        const codes = sales.map(item => item.Ventas).sort().reverse();

        const BestDay = sales.map(item => {
            if (item.Ventas === codes[0]) {
                return {
                    Nombre_Proveedor: info.Nombre_De_Proveedor,
                    Día_menos_vendido: item.Dia,
                    Ganancia: codes[0]
                }
            }
            return 0
        }).filter(item => typeof (item) !== "number");

        return BestDay;

    })
    res.json(bestProducts.flat());
};

module.exports = { BestSellingProduct, BestSellingDay, WorstSellingDay };