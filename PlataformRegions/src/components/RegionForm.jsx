import React, { useEffect, useState } from 'react';
import { estados } from '../utils/utils';



const RegionForm = ({ onSubmit, selected, setSelected }) => {
    const [form, setForm] = useState({ uf: '', nome: '' });

    useEffect(() => {
        if (selected) setForm({ uf: selected.uf, nome: selected.nome });
    }, [selected]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.uf || !form.nome) return alert('UF e Nome são obrigatórios.');
        onSubmit(form, selected?.id);
        setForm({ uf: '', nome: '' });
        setSelected(null);
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm mb-4">
            <h5 className="card-title" style={{fontWeight:"bold", fontSize: 32, marginBottom: 20, color:"#393939"}}>{selected ? 'Editar Região' : 'Nova Região'}</h5>
            <div className="mb-3" style={{width:'50%'}}>
                <label className="form-label">Estado (UF)</label>
                <select
                    name="uf"
                    className="form-select"
                    value={form.uf}
                    onChange={handleChange}
                >
                    <option value="">Selecione um estado</option>
                    {estados.map((estado) => (
                        <option key={estado.sigla} value={estado.sigla}>
                            {estado.nome}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3" style={{width:'60%'}}>
                <label className="form-label">Nome da Região</label>
                <input
                    name="nome"
                    className="form-control"
                    placeholder="Ex: Zona Sul"
                    value={form.nome}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="btn btn-success" style={{width:"12%", marginTop: 10}}>
                {selected ? 'Atualizar' : 'Criar'}
            </button>
        </form>

    );
};

export default RegionForm;
