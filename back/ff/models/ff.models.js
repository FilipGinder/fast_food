const sql = require("../../db/konekcija").pool;
const express = require('express');
const router = express.Router();

 const Ff = {};

Ff.menu = data => {

    let sqlQuery = `SELECT * FROM meni `
  
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};

Ff.menu_klijentska_stana = data => {

    //let sqlQuery = `SELECT * FROM meni `
    //daj mi sve redove iz menia koji imaju bar jednu validnu stavku 
    let sqlQuery = `SELECT DISTINCT  m.id,m.id_objekta,m.naziv,m.validan,m.naziv_eng FROM meni m LEFT JOIN meni_stavke ms ON m.id=ms.id_menia WHERE ms.id_menia=m.id AND ms.validan = 1`
    ;

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};


Ff.dod_naslov_menu = data => {
    
    const naslov = data.body.naslov;
    const naslovEng = data.body.naslovEng;
    //console.log(data.body)
    const sqlQuery = `INSERT INTO meni  (naziv,id_objekta,naziv_eng,validan)  VALUES  ('${naslov}',88,'${naslovEng}',1)`;  
      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve({poruka: "uspesno"});
                }
            });
       });
};




Ff.stavke_menia = data => {
    
    const id_menia = data.body.id_menia;
    let sqlQuery = `SELECT * FROM meni_stavke WHERE id_menia =${id_menia}`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};



Ff.dodaci = data => {
    
    let sqlQuery = `SELECT * FROM dodaci`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};



Ff.dod_stavku_menia = data => {
    
    const naziv = data.body.naziv;
    const tezina = data.body.tezina;
    const obim = data.body.obim;
    const cena = data.body.cena;
    const opis = data.body.opis;
    const id_menia = data.body.id_menia;
    const nizDodataka = data.body.nizDodataka;
    const slika = data.body.slika;
    const slikaIme = data.body.slikaIme;
    // const slikaIme = slika.name;
    // const slikaSize = slika.size;
    // const slikaType = slika.type;
 

    const sqlQuery = `INSERT INTO meni_stavke  (id_menia,naziv,tezina,obim,cena,opis,validan,slika_url)  VALUES  (${id_menia},'${naziv}','${tezina}','${obim}','${cena}','${opis}',1,'${slikaIme}')`;  
      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    
                

                    nizDodataka.map((element) => (
                        sql.query(`INSERT INTO meni_stavke_doadci (id_meni_stavke,id_dodataka) VALUES (${rows.insertId},${element})`,
                            (error, rows, fields) => {
                                if (error) {
                                    reject(error);
                                    return 1;
                                } else {
                                                    //dodavanje slike
                                                    const Jimp = require("jimp");
                                                    const fs = require("fs");
                                                    const buffer = Buffer.from(slika, "base64");
                                                    Jimp.read(buffer, (err, x) => {
                                                        if (err) throw new Error(err);
                                                        x.quality(5).write('slike_stavki/' + slikaIme, (err) => {
                                                            if (err) {
                                                                resolve({poruka: "Greška pri čuvanju slike."});
                                                            }
                                                            resolve({poruka: "uspesno"});
                                                            //console.log("Slika je uspešno sačuvana.");
                                                        });
                                                        
                                                    }); 
                                                    //dodavanje slike     
                                }})
                        
                        ))
                    
                    
                }
            });
       });
};

// module.exports.saveImagesBaner = function (req, res) {
//     const Jimp = require("jimp");
//     const fs = require("fs");

//     const data = req.body.file;
//     const name = req.body.name;

//     const buffer = Buffer.from(data, "base64");
//     Jimp.read(buffer, (err, x) => {
//         if (err) throw new Error(err);
//         x.quality(5).write('media/baner/' + name);
//     });

//     res.status(200)

// };




Ff.dodaci_odr_stavke = data => {
    const id_meni_stavke = data.body.id_meni_stavke;
    let sqlQuery = `SELECT msd.id, msd.id_meni_stavke,msd.id_dodataka,d.naziv,d.cena FROM meni_stavke_doadci msd LEFT JOIN dodaci d ON d.id=msd.id_dodataka WHERE id_meni_stavke = ${id_meni_stavke}`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};



Ff.odredjena_stavka_menia = data => {
    const id_meni_stavke = data.body.id_meni_stavke;
    let sqlQuery = `SELECT * FROM meni_stavke WHERE id = ${id_meni_stavke}`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};



Ff.izm_stavku_menia = data => {
    const naziv = data.body.naziv;
    const tezina = data.body.tezina;
    const obim = data.body.obim;
    const cena = data.body.cena;
    const opis = data.body.opis;
    const id_stavke = data.body.id_stavke;
    const nizDodataka = data.body.nizDodataka;


    let sqlQuery = `UPDATE meni_stavke SET naziv='${naziv}', tezina='${tezina}', obim='${obim}', cena='${cena}', opis='${opis}'  WHERE id = ${id_stavke}`
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {

                                     
                                            let sqlQuery = `DELETE FROM meni_stavke_doadci WHERE id_meni_stavke = ${id_stavke}`
                                            sql.query(sqlQuery,
                                                (error, rows, fields) => {
                                                    if (error) {
                                                        reject(error);
                                                        return 1;
                                                    } else { 
                                                            if(nizDodataka != ""){                                                                       
                                                                            nizDodataka.map((element) => (
                                                                                sql.query(`INSERT INTO meni_stavke_doadci (id_meni_stavke,id_dodataka) VALUES (${id_stavke},${element})`,
                                                                                    (error, rows, fields) => {
                                                                                        if (error) {
                                                                                            reject(error);
                                                                                            return 1;
                                                                                        } else {
                                                                                            resolve({poruka: "uspesno"});
                                                                                    }})
                                                                                
                                                                                ))
                                                            }else{
                                                                resolve({poruka: "uspesno"});
                                                            }

                                                    }
                                                });
                        }
            });
       });
};






Ff.odr_naslov_menia = data => {
    
    const id_naslova = data.body.id_naslova;
    let sqlQuery = `SELECT * FROM meni WHERE id =${id_naslova}`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};


Ff.izm_odr_naslov_menia = data => {
    
    const id_naslova = data.body.id_naslova;
    const naslov = data.body.naslov;
    const naslovEng = data.body.naslovEng;
    const validan = data.body.validan;

    let sqlQuery = `UPDATE meni SET naziv='${naslov}', naziv_eng='${naslovEng}', validan='${validan}'  WHERE id = ${id_naslova}`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve({poruka: "uspesno"});
                }
            });
       });
};




Ff.naslovi_i_stavke = data => {
    
    let sqlQuery = `SELECT 
    m.id,
    m.naziv AS naziv_naslova,
    m.validan AS validnost_naslova,
    m.naziv_eng AS naziv_eng_naslova,
    ms.id AS id_stavke,
    ms.naziv AS naziv_stavke,
    ms.opis AS opis_stavke,
    ms.tezina AS tezina_stavke,
    ms.cena AS cena_stavke,
    ms.validan AS validan_stavke,
    ms.naziv_eng AS naziv_eng_stavke,
    ms.opis_eng AS opis_eng_stavke,
    ms.obim AS obim_stavke,
    ms.slika_url AS slika_url_stavke

    FROM meni m LEFT JOIN meni_stavke ms ON m.id=ms.id_menia
    WHERE m.validan = 1 AND ms.validan = 1
    
    ORDER BY m.id,ms.id`

      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {
                    resolve(rows);
                }
            });
       });
};




Ff.dodavanje_u_porudzbinu = data => {
    
    const idStavke = data.body.idStavke;
    const trenutnaCena = data.body.trenutnaCena;
    const nizDodataka = data.body.nizDodataka;
    // const naslovEng = data.body.naslovEng;
    // const validan = data.body.validan;

    const sqlQuery = `INSERT INTO porudzbine  (ime_porucioca,telefon,napomena)  VALUES  ('','','')`;  
      
    return new Promise((resolve, reject) => {
        sql.query(sqlQuery,
            (error, rows, fields) => {
                if (error) {
                    reject(error);
                    return 1;
                } else {

                           
                            var id_porudzbine = rows.insertId;
                            sql.query(`INSERT INTO porudzbina_stavke (id_porudzbine,id_meni_stavke) VALUES (${id_porudzbine},${idStavke})`,
                                    (error, rows1, fields) => {
                                        if (error) {
                                            reject(error);
                                            return 1;
                                        } else {
                                                        var id_porudzbine_stavke = rows1.insertId;  
                                                        nizDodataka.map((element) => (
                                                            sql.query(`INSERT INTO porudzbina_stavke_dodaci (id_porudzbine_stavke,id_dodataka) VALUES (${id_porudzbine_stavke},${element})`,
                                                                (error, rows, fields) => {
                                                                    if (error) {
                                                                        reject(error);
                                                                        return 1;
                                                                    } else {
                                                                                        
                                                                           resolve({id_porudzbine});
                                                                           //resolve(id_porudzbine);
                                                                                                
                                                                    }
                                                                }
                                                                    )
                                                            
                                                            ))    
                                                                
                                        }})
                }
            });
       });
};
module.exports = Ff;