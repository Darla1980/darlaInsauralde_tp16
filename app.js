const bicis = require('./datosBici.js');

const dhBici = {
    bicicletas: bicis,
    buscarBici : function (id) {
        const bici = this.bicicletas.filter(bici => bici.id === id);
        return bici;
    },
    venderBici : function (id) {
        const vender = this.buscarBici(id);
        if (vender.length) {
            vender[0].vendida = true;
            return vender;
        }
        else{
            return "Bicicleta no encontrada";
        };
    },

    biciParaLaVenta () {
        const noVendida = this.bicicletas.filter((bici) => bici.vendida === "");
        return noVendida;
    },

    totalDeVentas : function () {
        const biciVendidos = this.bicicletas.filter((bici) => bici.vendida === true)
            const totalPrecio = biciVendidos.reduce((acumulador, bici) => (acumulador + bici.precio), 0);
            return totalPrecio;
        }
}

// console.log(dhBici.buscarBici(5));
// console.log(dhBici.venderBici(5));
// console.log(dhBici.biciParaLaVenta());
// console.log("total:", dhBici.totalDeVentas());





