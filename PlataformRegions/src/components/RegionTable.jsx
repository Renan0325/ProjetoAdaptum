import React from 'react';

const RegionTable = ({
  regioes,
  onEdit,
  onToggleAtivo,
  paginaAtual,
  totalPaginas,
  setPaginaAtual,
}) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>UF</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {regioes.map((r) => (
              <tr key={r.id}>
                <td>{r.uf}</td>
                <td>{r.nome}</td>
                <td>
                  <span className={`badge ${r.ativo ? 'bg-success' : 'bg-secondary'}`}>
                    {r.ativo ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => onEdit(r)}>
                    Editar
                  </button>
                  <button
                    className={`btn btn-sm ${r.ativo ? 'btn-outline-danger' : 'btn-outline-success'}`}
                    onClick={() => {
                      if (window.confirm(`Deseja ${r.ativo ? 'inativar' : 'ativar'} esta região?`)) {
                        onToggleAtivo(r.id, r.ativo);
                      }
                    }}
                  >
                    {r.ativo ? 'Inativar' : 'Ativar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            className={`btn btn-sm mx-1 ${paginaAtual === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setPaginaAtual(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default RegionTable;
