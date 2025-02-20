import { Router } from "express";

const router= Router()

router.get('/', (req,res)=> res.render('index',{title:'Inicio'}))
router.get('/SobreNosotros', (req,res)=> res.render('about',{title:'Sobre Nosotros'}))
router.get('/catalogo', (req,res)=> res.render('catalogo',{title:'Catálogo'}))
router.get('/promociones', (req,res)=> res.render('promociones',{title:'Promociones'}))
router.get('/bot', (req,res)=> res.render('bot',{title:'Bot'}))
export default router