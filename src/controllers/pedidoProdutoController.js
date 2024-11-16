import PedidoProduto from '../models/PedidoProdutoModel';

const get = async (req, res) => {
  try {
    const idServico = req.params.idServico ? req.params.idServico.toString().replace(/\D/g, '') : null;
    const idPedido = req.params.idPedido ? req.params.idPedido.toString().replace(/\D/g, '') : null;

    if (!idServico && !idPedido) {
      const response = await PedidoProduto.findAll({
        order: [['id_servico', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados Encontrados!',
        response,
      });
    }

    const response = await PedidoProduto.findOne({
      where: {
        idServico, idPedido,
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
      idPedido, idServico, quantidade,
    } = req.body;

    const response = await PedidoProduto.create({
      idPedido, idServico, quantidade,
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
    const idServico = req.params.idServico ? req.params.idServico.toString().replace(/\D/g, '') : null;
    const idPedido = req.params.idPedido ? req.params.idPedido.toString().replace(/\D/g, '') : null;

    if (!idServico || !idPedido) {
      return res.status(400).send({
        message: 'id não informado',
        response: [],
      });
    }

    const response = await PedidoProduto.findOne({
      where: {
        idServico,
      },
    });

    if (!response) {
      return res.status(404).send({
        message: 'id Não Encontrado na Base de Dados',
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
    const idServico = req.params.idServico ? req.params.idServico.toString().replace(/\D/g, '') : null;
    const idPedido = req.params.idPedido ? req.params.idPedido.toString().replace(/\D/g, '') : null;

    if (!idServico) {
      return res.status(400).send({
        message: 'id não informado',
        response: [],
      });
    }

    const response = await PedidoProduto.findOne({
      where: {
        idServico, idPedido,
      },
    });

    if (!response) {
      return res.status(500).send({
        message: 'id Não Encontrado na Base',
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
