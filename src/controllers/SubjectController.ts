import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjetcController {


    async create(req: Request, res: Response) {
        // Cria disciplina
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ mensagem: "O Nome é obrigatorio"})
        }

        try {
            const newSubject = subjectRepository.create({ name })

            await subjectRepository.save(newSubject)

            return res.status(201).json(newSubject)

            console.log(newSubject)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: "Internal server error"})
            
        }
    }
}