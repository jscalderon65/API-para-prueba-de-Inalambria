const TotalSales = (req, res, dataSet) => {
    const [Info, ...salesInfo] = dataSet;

    const sales = salesInfo.reduce((acc, prev) => (typeof (prev.Ventas) === "number" ? acc + prev.Ventas : acc), 0);

    res.json([{Ventas_totales_en_2020_COP:sales,Info}]);
};
const SalesInfo = (req, res, dataSet) => {
    const [, ...salesInfo] = dataSet;
    res.json(salesInfo);
};
module.exports = {TotalSales,SalesInfo};