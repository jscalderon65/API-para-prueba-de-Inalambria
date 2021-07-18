const express = require("express");
const {TotalSales, SalesInfo}=require("../Controllers/TotalSales.js");
const {BestSellingProduct, BestSellingDay, WorstSellingDay}=require("../Controllers/SalesFilters.js");
const ItacolDataSet = require("../DataSets/ItacolDataSet.js");
const VecolDataSet = require("../DataSets/VecolDataSet.js");

const router = express.Router();
const dataSets=[ItacolDataSet,VecolDataSet];

router.get("/best_selling_product",(req,res)=>BestSellingProduct(req,res,dataSets));
router.get("/best_selling_day",(req,res)=>BestSellingDay(req,res,dataSets));
router.get("/worst_selling_day",(req,res)=>WorstSellingDay(req,res,dataSets));

router.get("/sales_2020/itacol",(req,res)=>SalesInfo(req,res,ItacolDataSet));
router.get("/sales_2020/vecol",(req,res)=>SalesInfo(req,res,VecolDataSet));

router.get("/total_sales/itacol",(req,res)=>TotalSales(req,res,ItacolDataSet));
router.get("/total_sales/vecol",(req,res)=>TotalSales(req,res,VecolDataSet));

module.exports=router;