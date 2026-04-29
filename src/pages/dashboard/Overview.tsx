import React from 'react';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, active: 240 },
  { name: 'Fev', revenue: 3000, active: 139 },
  { name: 'Mar', revenue: 2000, active: 980 },
  { name: 'Abr', revenue: 2780, active: 390 },
  { name: 'Mai', revenue: 1890, active: 480 },
  { name: 'Jun', revenue: 2390, active: 380 },
  { name: 'Jul', revenue: 3490, active: 430 },
];

const StatCard = ({ title, value, change, isPositive, icon: Icon }: any) => (
  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-orange-500">
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}%
      </div>
    </div>
    <p className="text-slate-400 font-medium mb-1">{title}</p>
    <h3 className="text-3xl font-black text-white">{value}</h3>
  </div>
);

export default function Overview() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Alunos Ativos" value="2,842" change={12.5} isPositive={true} icon={Users} />
        <StatCard title="Faturamento Mensal" value="R$ 48.2K" change={8.2} isPositive={true} icon={CreditCard} />
        <StatCard title="Taxa de Retenção" value="94%" change={1.2} isPositive={true} icon={TrendingUp} />
        <StatCard title="Treinos Realizados" value="12.4K" change={2.4} isPositive={false} icon={Activity} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Evolução de Crescimento</h3>
              <p className="text-sm text-slate-400">Análise de Faturamento vs Alunos Ativos</p>
            </div>
            <select className="bg-slate-800 border border-slate-700 text-sm text-white rounded-lg px-3 py-1.5 outline-none">
              <option>Últimos 7 meses</option>
              <option>Ano atual</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF7A21" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF7A21" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `R$${v/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#1E293B', borderRadius: '12px' }}
                  itemStyle={{ color: '#F8FAFC' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#FF7A21" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <h3 className="text-lg font-bold text-white mb-1">Check-ins Recentes</h3>
          <p className="text-sm text-slate-400 mb-6">Últimos alunos que acessaram a catraca</p>

          <div className="space-y-4">
            {[
              { name: 'Enzo Fermiano', time: 'Agora', status: 'Liberado', plan: 'Anual' },
              { name: 'Maria Silva', time: 'Há 5 min', status: 'Liberado', plan: 'Mensal' },
              { name: 'João Santos', time: 'Há 12 min', status: 'Bloqueado', plan: 'Pendente' },
              { name: 'Ana Costa', time: 'Há 25 min', status: 'Liberado', plan: 'Trimestral' },
              { name: 'Pedro Lima', time: 'Há 40 min', status: 'Liberado', plan: 'Anual' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-sm shrink-0">
                    {log.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{log.name}</h5>
                    <p className="text-xs text-slate-500">{log.plan}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${log.status === 'Liberado' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {log.status}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
