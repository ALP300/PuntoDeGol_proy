import { Router } from "express";
import { ConsultarProductos } from "../public/services/conexion.js";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: "Inicio" }));
router.get("/SobreNosotros", (req, res) =>
  res.render("about", { title: "Sobre Nosotros" })
);
router.get("/catalogo", (req, res) =>
  res.render("catalogo", { title: "Catálogo" })
);
router.get("/promociones", (req, res) =>
  res.render("promociones", { title: "Promociones" })
);
router.get("/bot", (req, res) => res.render("bot", { title: "Bot" }));
router.get("/api/get-productos", async (req, res) => {
  const productos = await ConsultarProductos();
  res.status(200).json(productos);
});
export default router;
