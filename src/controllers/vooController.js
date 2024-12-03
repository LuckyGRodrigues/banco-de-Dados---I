import VooModel from '../models/VooModel';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().trim() : null;

    if (!id) {
      const response = await VooModel.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados encontrados!',
        response,
      });
    }

    const response = await VooModel.findOne({
      where: { id },
    });

    if (!response) {
      return res.status(404).send({
        message: 'Voo não encontrado',
      });
    }

    return res.status(200).send({
      message: 'Dados encontrados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Erro ao buscar dados',
      error: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      id, origem, destino, dataSaida, dataChegada, horarioSaida, horarioChegada,
      quilometragem, idAeronave, idCliente, idPiloto,
    } = req.body;

    const response = await VooModel.create({
      id,
      origem,
      destino,
      dataSaida,
      dataChegada,
      horarioSaida,
      horarioChegada,
      quilometragem,
      idAeronave,
      idCliente,
      idPiloto,
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
    const id = req.params.id ? req.params.id.toString().trim() : null;

    if (!id) {
      return res.status(400).send({
        message: 'id não informado',
        response: [],
      });
    }

    const response = await VooModel.findOne({
      where: {
        id,
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
    const id = req.params.id ? req.params.id.toString().trim() : null;

    if (!id) {
      return res.status(400).send({
        message: 'id não informado',
        response: [],
      });
    }

    const response = await VooModel.findOne({
      where: {
        id,
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
