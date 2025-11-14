import { db } from "../config/db.js";

// ============================
//  Rotas CRUD
// ============================

export async function criarFavorito(req, res) {
    try {
        const { usuario_id, livro_id, data_favorito } = req.body;
        if (!usuario_id || !livro_id || !data_favorito)
            return res.status(400).json({ erro: "Campos obrigatórios" });

        await db.execute(
            "INSERT INTO favoritos (usuario_id, livro_id, data_favorito) VALUES (?, ?, ?)",
            [usuario_id, livro_id, data_favorito]
        );

        res.json({ mensagem: "Favoritado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};


export async function listarFavoritos(req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM favoritos");
        if (!rows || rows.length === 0) {
            return res.status(404).json({ erro: "Nenhum favorito encontrado" });
        }
        res.json(rows);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

export async function excluirFavorito(req, res) {
    try {
        await db.execute("DELETE FROM favoritos WHERE id = ?", [req.params.id]);
        res.json({ mensagem: "Favorito deletado com sucesso!" });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};