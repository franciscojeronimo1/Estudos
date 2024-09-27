import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // Lista usuarios  NAO deve exister
// router.get('/:id', userController.show); // lista usuario NAO DEVE existir

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/* index -> lista todos os usuários - GET
    store/create -> cria um novo usuário - POST
    delete -> apaga um usuário - DELETE
    show -> mostra um usuário - GET
    update -> atualiza um usuário - PATCH OU PUT */
