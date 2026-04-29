import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, AlertTriangle, XCircle, Target, CheckCircle2, ShieldAlert,
  Database, Server, MonitorPlay, Zap, Lightbulb, 
  ChevronRight, TrendingUp, Presentation, CheckSquare, Layers
} from 'lucide-react';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500/30 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Dumbbell className="text-white" size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">FITFLOW <span className="text-orange-500">CARAGUÁ</span></span>
          </div>
          <a 
            href="https://fit-flow-indol.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all text-sm flex items-center gap-2"
          >
            Acessar App <ChevronRight size={16} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-20 max-w-5xl mx-auto px-4 space-y-24">

        {/* Slide 1 - Capa */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider text-orange-500 uppercase bg-orange-500/10 rounded-full">
            Apresentação do Projeto
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6">
            FITFLOW <br/><span className="text-orange-500">CARAGUÁ</span>
          </h1>
          <p className="text-2xl text-slate-300 font-medium mb-12">Sistema de Gestão de Academias</p>
          <div className="text-slate-400 font-medium space-y-2 max-w-sm mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <p className="text-white font-bold text-lg">Enzo Marcelo Ribeiro Fermiano</p>
            <p>Análise e Desenvolvimento de Sistemas</p>
            <p>2026</p>
          </div>
        </motion.section>

        {/* Slide 2 & 3 - Contexto e Problema */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group hover:border-orange-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Presentation className="text-orange-500" /> Introdução
            </h2>
            <p className="text-slate-400 mb-4">Atualmente, academias de pequeno porte ainda utilizam:</p>
            <ul className="space-y-3 text-slate-300 mb-6">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-600" /> Fichas de treino em papel</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-600" /> Controle financeiro manual</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-600" /> Registros informais</li>
            </ul>
            <p className="text-slate-400 mb-4">Isso gera:</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-bold">Desorganização</span>
              <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-bold">Perda de dados</span>
              <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-bold">Dificuldade de controle</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group hover:border-orange-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-500" /> O Problema
            </h2>
            <p className="text-slate-400 mb-6">Os principais problemas identificados são:</p>
            <ul className="space-y-4">
              {[
                "Falta de controle de alunos",
                "Treinos desatualizados ou perdidos",
                "Inadimplência sem controle",
                "Muito tempo gasto em tarefas manuais"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <XCircle className="text-red-500 shrink-0" size={20} />
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Slide 4 & 5 - Objetivo e Solução */}
        <section className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-orange-500" /> Objetivo
              </h2>
              <p className="text-slate-400 mb-6">Desenvolver um sistema web que:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 flex-shrink-0" size={20}/> Centralize todas as informações</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 flex-shrink-0" size={20}/> Automatize processos</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 flex-shrink-0" size={20}/> Facilite o trabalho do instrutor</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-orange-500 flex-shrink-0" size={20}/> Melhore a experiência do aluno</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-orange-500" /> Solução Proposta
              </h2>
              <p className="text-slate-400 mb-6">O FitFlow Caraguá será um sistema com:</p>
              <div className="space-y-4">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">👨‍💼 Perfil Administrador/Instrutor</h3>
                  <p className="text-slate-400 text-sm">Controle total do sistema</p>
                </div>
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">👤 Perfil Aluno</h3>
                  <p className="text-slate-400 text-sm">Acesso ao treino e status da mensalidade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6 & 7 - Funcionalidades e Regras */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group hover:border-orange-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Layers className="text-orange-500" /> Funcionalidades Principais
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Cadastro de alunos", "Cadastro de planos", "Gestão de treinos", 
                "Registro de pagamentos", "Check-in diário", "Relatórios"
              ].map((item, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 font-medium text-center text-sm flex items-center justify-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group hover:border-orange-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <ShieldAlert className="text-orange-500" /> Regras de Negócio
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl leading-none">⚠️</span>
                <span className="text-slate-300 font-medium text-sm">Bloqueio de treino por inadimplência (+5 dias)</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl leading-none">📊</span>
                <span className="text-slate-300 font-medium text-sm">Histórico de check-in não pode ser apagado</span>
              </li>
              <li className="flex items-start gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-xl leading-none">🏋️</span>
                <span className="text-slate-300 font-medium text-sm">Apenas o instrutor altera treinos</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Slide 8 & 9 - Tecnologias e Estrutura */}
        <section className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <MonitorPlay className="text-orange-500" /> Tecnologias
              </h2>
              <div className="space-y-4">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-start">
                  <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-1">Frontend Web</p>
                  <p className="text-lg font-bold text-white">HTML, CSS e JavaScript</p>
                  <p className="text-sm text-slate-400 mt-1">Focado em funcionar bem no celular.</p>
                </div>
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-start">
                  <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-1">Backend</p>
                  <p className="text-lg font-bold text-white">Node.js com Express</p>
                  <p className="text-sm text-slate-400 mt-1">API REST + Autenticação JWT</p>
                </div>
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-start">
                  <p className="text-xs text-orange-500 font-black uppercase tracking-widest mb-1">Banco de Dados</p>
                  <p className="text-lg font-bold text-white">MySQL</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="text-orange-500" /> Estrutura do Sistema
              </h2>
              <p className="text-slate-400 mb-6">Principais entidades mapeadas no banco de dados:</p>
              <div className="grid grid-cols-2 gap-4">
                {['Usuários', 'Alunos', 'Planos', 'Treinos', 'Exercícios', 'Pagamentos'].map((entidade, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <Server className="text-orange-500 shrink-0" size={18} />
                    <span className="text-slate-200 font-bold">{entidade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10 & 11 - Progresso e Próximos Passos */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-orange-500" /> Progresso do Projeto
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-300 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                <CheckSquare className="text-green-500 shrink-0" /> Estrutura inicial concluída
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                <CheckSquare className="text-green-500 shrink-0" /> Banco de dados modelado
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                <CheckSquare className="text-green-500 shrink-0" /> Sistema de autenticação
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                <CheckSquare className="text-green-500 shrink-0" /> CRUD de alunos e planos
              </li>
              <li className="flex items-center gap-3 text-slate-300 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-lg shrink-0">⚠️</span> Treinos em desenvolvimento
              </li>
            </ul>
            <div className="bg-orange-500/10 p-4 rounded-xl border border-orange-500/20 flex items-center justify-between">
              <span className="font-bold text-orange-500">Progresso Total</span>
              <span className="text-orange-500 font-black text-2xl">~50%</span>
            </div>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-orange-500" /> Próximos Passos
            </h2>
            <div className="space-y-4">
              {[
                "Implementar pagamentos",
                "Criar sistema de check-in",
                "Desenvolver dashboard",
                "Criar área do aluno",
                "Implementar relatórios"
              ].map((step, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4 text-slate-300 font-medium">
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-400 shrink-0">{i+1}</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 12 & 13 - Dificuldades e Soluções */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-500" /> Dificuldades Encontradas
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" /> Definir escopo corretamente
              </li>
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" /> Organizar todas as funcionalidades
              </li>
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" /> Estimar tempo de desenvolvimento
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="text-orange-500" /> Soluções Adotadas
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3 text-green-500/90">
                <CheckCircle2 className="shrink-0" size={20} /> Foco em MVP
              </li>
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3 text-green-500/90">
                <CheckCircle2 className="shrink-0" size={20} /> Priorização de funcionalidades essenciais
              </li>
              <li className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-medium flex items-center gap-3 text-green-500/90">
                <CheckCircle2 className="shrink-0" size={20} /> Desenvolvimento por etapas (tasks)
              </li>
            </ul>
          </div>
        </section>

        {/* Slide 14 & 15 - Viabilidade e Conclusão */}
        <section className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-orange-500" /> Viabilidade
              </h2>
              <ul className="space-y-4 text-slate-300 font-medium text-lg">
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><span className="text-green-500 font-black">✔</span> Projeto viável</li>
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><span className="text-green-500 font-black">✔</span> Aplicação real no mercado</li>
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><span className="text-green-500 font-black">✔</span> Possibilidade de expansão futura</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-orange-500" /> Conclusão
              </h2>
              <p className="text-slate-400 mb-6 font-medium">O FitFlow Caraguá:</p>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><ChevronRight className="text-orange-500 shrink-0"/> resolve problemas reais</li>
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><ChevronRight className="text-orange-500 shrink-0"/> melhora a gestão da academia</li>
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><ChevronRight className="text-orange-500 shrink-0"/> reduz erros e retrabalho</li>
                <li className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800"><ChevronRight className="text-orange-500 shrink-0"/> aumenta a eficiência operacional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Slide 16 - Encerramento */}
        <section className="text-center py-20 border-t border-slate-800">
          <h2 className="text-5xl font-black text-white mb-6">Obrigado pela atenção!</h2>
          <div className="flex justify-center mb-8">
            <Dumbbell size={64} className="text-orange-500" />
          </div>
          <a 
            href="https://fit-flow-indol.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl transition-all shadow-xl shadow-orange-500/20 text-lg uppercase tracking-wider"
          >
            Acessar Sistema <ChevronRight size={24} />
          </a>
        </section>

      </main>
    </div>
  );
}
