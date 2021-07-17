const {Router} = require("express");
const {TotalSales, SalesInfo}=require("../Controllers/TotalSales.js");
const {BestSellingProduct, BestSellingDay, WorstSellingDay}=require("../Controllers/SalesFilters.js");
const ItacolDataSet = require("../DataSets/ItacolDataSet.js");
const VecolDataSet = require("../DataSets/VecolDataSet.js");

const router = Router();
const dataSets=[ItacolDataSet,VecolDataSet];

router.get("/best_selling_product",(req,res)=>BestSellingProduct(req,res,dataSets));
router.get("/best_selling_day",(req,res)=>BestSellingDay(req,res,dataSets));
router.get("/worst_selling_day",(req,res)=>WorstSellingDay(req,res,dataSets));

router.get("/sales_2020/itacol",(req,res)=>SalesInfo(req,res,ItacolDataSet));
router.get("/sales_2020/vecol",(req,res)=>SalesInfo(req,res,VecolDataSet));

router.get("/total_sales/itacol",(req,res)=>TotalSales(req,res,ItacolDataSet));
router.get("/total_sales/vecol",(req,res)=>TotalSales(req,res,VecolDataSet));

router.get("/",(req,res)=>{
    res.json([{
        Autor:"Jhonn Calderon",
        Perfil_De_GitHub:"https://github.com/jscalderon65",
        Repositorio_Del_Proyecto:"https://github.com/jscalderon65/API-para-prueba-de-Inalambria",
        Descripción_Del_Ejercicio:"Desarrolle un API Http REST funcional que permita consultar las ventas de grandes proveedores por cuatro criterios de búsqueda y que como resultado responda el detalle y el consolidado de las ventas.",
        Rutas_De_La_Rest_API:[
            "/sales_2020/itacol",
            "/sales_2020/vecol",
            "/total_sales/itacol",
            "/total_sales/vecol",
            "/best_selling_product",
            "/worst_selling_day",
        ]
    }]);
});

module.exports=router;