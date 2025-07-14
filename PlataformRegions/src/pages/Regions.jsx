import React, { useEffect, useState } from 'react';
import * as api from '../services/regionService.js'
import RegionForm from '../components/RegionForm';
import RegionTable from '../components/RegionTable';
import Swal from 'sweetalert2';


const regions = () => {
  const [regions, setRegions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formEdit, setFormEdit] = useState(null);
  const [page, setPage] = useState(1);
  const byPages = 3;

  const allPages = Math.ceil(regions.length / byPages);
  const pagedRegions = regions.slice(
    (page - 1) * byPages,
    page * byPages
  );


  const getRegions = async () => {
    const { data } = await api.getRegions();
    setRegions(data);
  };

  useEffect(() => {
    getRegions();
  }, []);

  
  const createdRegions = async (dados) => {
    try {
      let result;
      if (editing) {
        let regionEditing = {
          id: formEdit.id,
          uf: dados.uf,
          nome: dados.nome
        }
        result = await api.updateRegion(regionEditing);
        Swal.fire({
          icon: 'success',
          title: 'Região atualizada com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        result = await api.createRegion(dados);
        Swal.fire({
          icon: 'success',
          title: 'Região cadastrada com sucesso!',
          showConfirmButton: false,
          timer: 2000,
        });
      }

      await getRegions();

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao salvar',
        text: error.response?.data || 'Tente novamente.',
      });
    }
  };


  const ActiveOrInactiveRegion = async (id, ativo) => {

    ativo ? await api.inactivarRegion(id) : await api.activeRegion(id);
    await getRegions();
  };

  const handleEdit = (regiao) => {
    setSelected(regiao);
    setFormEdit(regiao);
    setEditing(true);
  };



  return (
    <div>
      <h1 style={{ marginBottom: 10, color: "#393939", fontSize: 40 }}>Gerenciamento de Regiões</h1>
      <RegionForm onSubmit={createdRegions} selected={selected} setSelected={setSelected} />
      <RegionTable
        regioes={pagedRegions}
        onEdit={handleEdit}
        onToggleAtivo={ActiveOrInactiveRegion}
        paginaAtual={page}
        totalPaginas={allPages}
        setPaginaAtual={setPage}
      />

    </div>
  );
};

export default regions;
