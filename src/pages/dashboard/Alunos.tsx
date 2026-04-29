import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Edit2, Trash2 } from 'lucide-react';

const mockAlunos = [
  { id: '1', nome: 'Enzo Fermiano', email: 'enzo@example.com', plano: 'Anual PRO', status: 'Ativo', matricula: '34902' },
  { id: '2', nome: 'Amanda Nunes', email: 'amanda@example.com', plano: 'Mensal Fit', status: 'Inadimplente', matricula: '34903' },
  { id: '3', nome: 'Carlos Drumond', email: 'carlos@example.com', plano: 'Semestral PRO', status: 'Ativo', matricula: '34904' },
  { id: '4', nome: 'Beatriz Silva', email: 'bia@example.com', plano: 'Anual PRO', status: 'Cancelado', matricula: '34905' },
  { id: '5', nome: 'Roberto Alves', email: 'beto@example.com', plano: 'Mensal Fit', status: 'Ativo', matricula: '34906' },
  { id: '6', nome: 'Juliana Costa', email: 'juju@example.com', plano: 'Trimestral', status: 'Ativo', matricula: '34907' },
];

export default function Alunos() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockAlunos.filter(a => a.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar alunos por nome, email ou matrícula..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full h-12 pl-10 pr-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 outline-none focus:border-orange-500/50 transition-colors placeholder:text-slate-500"
          />
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 h-12 bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium rounded-xl border border-slate-800 transition-colors w-full sm:w-auto">
            <Filter size={18} /> Filtros
          </button>
          <button className="flex items-center justify-center gap-2 px-6 h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all w-full sm:w-auto">
            <Plus size={18} /> Novo Aluno
          </button>
        </div>
      </div>

      {/* Table List */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50 text-slate-400 text-xs uppercase tracking-widest">
                <th className="p-4 font-bold border-b border-slate-800">Matrícula</th>
                <th className="p-4 font-bold border-b border-slate-800">Aluno</th>
                <th className="p-4 font-bold border-b border-slate-800">Plano</th>
                <th className="p-4 font-bold border-b border-slate-800">Status</th>
                <th className="p-4 font-bold border-b border-slate-800 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filtered.map((aluno) => (
                 <tr key={aluno.id} className="hover:bg-slate-800/20 transition-colors">
                   <td className="p-4 text-sm font-mono text-slate-400">#{aluno.matricula}</td>
                   <td className="p-4">
                     <div>
                       <p className="font-bold text-white text-sm">{aluno.nome}</p>
                       <p className="text-xs text-slate-500">{aluno.email}</p>
                     </div>
                   </td>
                   <td className="p-4">
                     <span className="text-sm font-medium text-slate-300 bg-slate-800 py-1 px-3 rounded-lg border border-slate-700">
                       {aluno.plano}
                     </span>
                   </td>
                   <td className="p-4">
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider
                        ${aluno.status === 'Ativo' ? 'bg-green-500/10 text-green-500' : ''}
                        ${aluno.status === 'Inadimplente' ? 'bg-red-500/10 text-red-500' : ''}
                        ${aluno.status === 'Cancelado' ? 'bg-slate-500/10 text-slate-500' : ''}
                     `}>
                       {aluno.status}
                     </span>
                   </td>
                   <td className="p-4 text-right">
                     <div className="flex items-center justify-end gap-2">
                       <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                         <Edit2 size={16} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-800 rounded-lg transition-colors">
                         <Trash2 size={16} />
                       </button>
                       <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                         <MoreVertical size={16} />
                       </button>
                     </div>
                   </td>
                 </tr>
              ))}
            </tbody>
          </table>
          
          {filtered.length === 0 && (
            <div className="p-12 text-center text-slate-500 font-medium">
              Nenhum aluno encontrado com essa busca.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
