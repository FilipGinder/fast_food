const Ff = require('../models/ff.models');


module.exports.menu = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.menu(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}

module.exports.menu_klijentska_stana = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.menu_klijentska_stana(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}



module.exports.dod_naslov_menu = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.dod_naslov_menu(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}

module.exports.stavke_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.stavke_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}

module.exports.dodaci = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.dodaci(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}

module.exports.dod_stavku_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.dod_stavku_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}


module.exports.dodaci_odr_stavke = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.dodaci_odr_stavke(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}

module.exports.odredjena_stavka_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.odredjena_stavka_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}


module.exports.izm_stavku_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.izm_stavku_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}



module.exports.odr_naslov_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.odr_naslov_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}


module.exports.izm_odr_naslov_menia = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.izm_odr_naslov_menia(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}


module.exports.naslovi_i_stavke = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.naslovi_i_stavke(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}


module.exports.dodavanje_u_porudzbinu = function (req,res) {

    console.log("create")
        return new Promise((resolve,reject) => {
            Ff.dodavanje_u_porudzbinu(req).then((data)=>{
                res.status(200).send(data);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || 'Greška kontaktirajte administratora.'
                });
            })
        })

}
