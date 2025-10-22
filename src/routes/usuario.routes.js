import express from "express"
import {
    criarUsuario,
    listarUsuarios,
    obterUsuario,
    atualizarUsuario,
    deletarUsuario
} from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.get("/:id", obterUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);

export default router;