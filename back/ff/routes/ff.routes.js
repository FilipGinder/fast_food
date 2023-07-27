const express = require('express');
const controller = require('../controllers/ff.controllers')  //moje

const router = express.Router();


/*deo samo za swagger*/
/**
 * @swagger
 * /menu:
 *    post:
 *      description: Ceo menu
 *      responses:
 *        '200':
 *          description: A successful response
 */
/*deo samo za swagger*/
router.post('/menu',controller.menu);

/*deo samo za swagger*/
/**
 * @swagger
 * paths:
 *  /dod_naslov_menu:
 *    post:
 *      summary: Primer dodavanja novog naslova menia
 *      parameters:
 *        - in: body
 *          name: Primer JSON-a
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              naslov:
 *                type: string
 *              naziv_eng:
 *                type: string
 *              slika: 
 *                type: string
 *              validan:
 *                type: integer
 *            required: ['naslov', 'validan']
 *      responses:
 *        200:
 *          description: Example object created successfully
 */
/*deo samo za swagger*/

router.post('/menu_klijentska_stana',controller.menu_klijentska_stana);
router.post('/dod_naslov_menu',controller.dod_naslov_menu);
router.post('/stavke_menia',controller.stavke_menia);
router.post('/dodaci',controller.dodaci);
router.post('/dod_stavku_menia',controller.dod_stavku_menia);
router.post('/dodaci_odr_stavke',controller.dodaci_odr_stavke);
router.post('/odredjena_stavka_menia',controller.odredjena_stavka_menia);
router.post('/izm_stavku_menia',controller.izm_stavku_menia);
router.post('/odr_naslov_menia',controller.odr_naslov_menia);
router.post('/izm_odr_naslov_menia',controller.izm_odr_naslov_menia);
router.post('/naslovi_i_stavke',controller.naslovi_i_stavke);
router.post('/dodavanje_u_porudzbinu',controller.dodavanje_u_porudzbinu);


module.exports = router;