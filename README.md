# Descripción de la API

<p>El desarrollo de está Rest API hace parte de la prueba técnica para el puesto de desarrollador junior de la empresa 
<b>Inalambria</b>, a continuación se presenta la descripción del ejercicio:

> <b><i>
Desarrolle un API Http REST funcional que permita consultar las ventas de grandes proveedores por cuatro criterios de búsqueda y que como resultado responda el detalle y el consolidado de las ventas.
</i></b>

</p>

## Comenzando 🚀

<p>

Para la resolución de este ejercicio se crearon dos Datasets con la herramienta <b>Mockaroo</b> que sirve para la creación de Datasets con diferentes datos y estructuras, y la información que se usó, proviene de las empresas <b>Itacol</b>, encargada de la distribución y venta de comida para perros y de <b>Vecol</b>, compañía encargada de brindar soluciones integrales para promover la sanidad animal, venden productos veterinarios tanto para animales de granja como de compañía.
Cabe resaltar que sobre estos Datasets se realizaron todas las operaciones sugeridas en la descripción del ejercicio.

</p>

## Estructura de los DataSets 📌

```js 
    [{
            Nombre_De_Proveedor: "",
            Inicio_De_informe:"",
            Fin_De_Informe:"",
            Negocio: "",
            Descrip_De_Proveedor: "",
            Cod_De_Producto_Descrip: [
                { Cod: 0, Nombre: "" },
                ...
            ]
        },
        { 
            Dia: 0, 
            Ventas: 0, 
            Cod_Producto_Mas_Vendido: 0 
        }, 
    ...]
```
## Despliegue 📦

<p>La API se desplegó en Heroku:</p>


>**<https://inalambria-api.herokuapp.com/>**



## Rutas de la Api 📋

>### Obtener la información completa de ventas

**URL**: `/api/sales_2020/itacol`

**URL**: `/api/sales_2020/vecol`

**Method**: `GET`

**Requiere permisos**: `None`

```js 
GET /api/sales_2020/:Nombre_De_Proveedor
```

>### Obtener la ganancia total de las ventas registradas

**URL**: `/api/total_sales/itacol`

**URL**: `/api/total_sales/vecol`

**Method**: `GET`

**Requiere permisos**: `None`

```js 
GET /api/total_sales/:Nombre_De_Proveedor
```

>### Obtener el producto más vendido de cada proveedor

**URL**: `/api/best_selling_product`

**Method**: `GET`

**Requiere permisos**: `None`

```js 
GET /api/best_selling_product
```

>### Obtener el valor de las ganancias del día en el que más vendió de cada proveedor

**URL**: `/api/best_selling_day`

**Method**: `GET`

**Requiere permisos**: `None`

```js 
GET /api/best_selling_day
```

>### Obtener el valor de las ganancias del día en el que menos se vendió de cada proveedor

**URL**: `/api/worst_selling_day`

**Method**: `GET`

**Requiere permisos**: `None`

```js 
GET /api/worst_selling_day
```

## Construido con 🛠️

* [Node-Js](https://nodejs.org/es/) 
* [Express](https://expressjs.com/es/) 
* [Mockaroo](https://www.mockaroo.com/)

## Autor ✒️
* **Jhonn Calderon** - [jscalderon65](https://github.com/jscalderon65)

