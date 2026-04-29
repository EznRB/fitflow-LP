import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  CreditCard,
  CalendarDays,
  BarChart3,
  LogOut,
  Dumbbell
} from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { title: 'GESTÃO', items: [
    { icon: Users, label: 'Alunos', path: '/dashboard/alunos' },
    { icon: ClipboardList, label: 'Treinos (AI)', path: '/dashboard/treinos' },
  ]},
  { title: 'FINANCEIRO', items: [
    { icon: CreditCard, label: 'Pagamentos', path: '/dashboard/pagamentos' },
    { icon: CalendarDays, label: 'Check-ins', path: '/dashboard/checkins' },
  ]},
  { title: 'ANÁLISE', items: [
    { icon: BarChart3, label: 'Relatórios', path: '/dashboard/relatorios' },
  ]},
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Logo */}
        <div className="h-20 flex items-center px-6 gap-3 border-b border-slate-800">
           <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
             <Dumbbell size={16} className="text-white" />
           </div>
           <span className="font-black text-xl tracking-tight">FITFLOW</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navItems.map((group, idx) => (
            <div key={idx}>
              {group.title && (
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-3">
                  {group.title}
                </h4>
              )}
              <ul className="space-y-1">
                {(group.items || [group]).map((item: any) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link 
                        to={item.path}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors text-sm",
                          isActive 
                            ? "bg-orange-500/10 text-orange-500" 
                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                        )}
                      >
                        <item.icon size={18} />
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-slate-800">
           <div className="flex items-center gap-3 mb-4 px-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400 shrink-0">
                AF
              </div>
              <div className="overflow-hidden">
                 <p className="text-sm font-bold text-white truncate">Admin FitFlow</p>
                 <p className="text-xs text-slate-500 truncate">Administrador</p>
              </div>
           </div>
           <Link to="/" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium">
              <LogOut size={16} /> Sair
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 flex items-center px-8 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md">
           <h1 className="text-xl font-black text-white uppercase tracking-wider">
              {location.pathname.split('/').pop() || 'Dashboard'}
           </h1>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
           <Outlet />
        </div>
      </main>
    </div>
  );
}
