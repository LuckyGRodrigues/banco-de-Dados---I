import UsuarioModel from '../models/UsuarioModel';

const get = async (req, res) => {
  try {
    const cpf = req.params.cpf ? req.params.cpf.toString().replace(/\D/g, '') : null;

    if (!cpf) {
      const response = await UsuarioModel.findAll({
        order: [['nome', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados Encontrados!',
        response,
      });
    }

    const response = await UsuarioModel.findOne({
      where: {
        cpf,
      },
    });

    return res.status(200).send({
      message: 'Dados Encontrados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      cpf, nome, telefone, email, status,
    } = req.body;

    const response = await UsuarioModel.create({
      cpf, nome, telefone, email, status,
    });

    return res.status(201).send({
      message: 'Dados Criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const cpf = req.params.cpf ? req.params.cpf.toString().replace(/\D/g, '') : null;

    if (!cpf) {
      return res.status(400).send({
        message: 'Cpf não informado',
        response: [],
      });
    }

    const response = await UsuarioModel.findOne({
      where: {
        cpf,
      },
    });

    if (!response) {
      return res.status(500).send({
        message: 'Cpf Não Encontrado na Base',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const cpf = req.params.cpf ? req.params.cpf.toString().replace(/\D/g, '') : null;

    if (!cpf) {
      return res.status(400).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await UsuarioModel.findOne({
      where: {
        cpf,
      },
    });

    if (!response) {
      return res.status(500).send({
        message: 'Id Não Encontrado na Base',
        response: [],
      });
    }

    await response.destroy();

    return res.status(200).send({
      message: 'Usuário deletado com sucesso',
      response: [],
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

export default {
  get,
  create,
  update,
  destroy,
};
