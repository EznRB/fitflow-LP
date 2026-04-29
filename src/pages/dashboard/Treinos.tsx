import React, { useState } from 'react';
import { generateAIWorkout, WorkoutPlan } from '../../services/geminiService';
import { Dumbbell, Sparkles, AlertCircle, CheckCircle2, UserCircle2, Loader2, BrainCircuit } from 'lucide-react';

export default function Treinos() {
  const [goal, setGoal] = useState('hipertrofia');
  const [level, setLevel] = useState('intermediario');
  const [loading, setLoading] = useState(false);
  const [workout, setWorkout] = useState<WorkoutPlan | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const data = await generateAIWorkout(goal, level);
      setWorkout(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="grid lg:grid-cols-5 gap-6">
        
        {/* Left Col - AI Lab config */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
             <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-6">
               <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <BrainCircuit size={24} />
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white">Criador de Treinos IA</h3>
                  <p className="text-sm text-slate-400">Powered by Gemini 3.1 Pro</p>
               </div>
             </div>

             <div className="space-y-6">
               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Vincular a (Opcional)</label>
                 <div className="relative">
                   <UserCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                   <input 
                     type="text" 
                     placeholder="Buscar aluno..." 
                     className="w-full h-12 pl-10 pr-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none focus:border-orange-500/50 transition-colors"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Objetivo Principal</label>
                 <div className="grid grid-cols-2 gap-2">
                   {['Hipertrofia', 'Emagrecimento', 'Força Brutal', 'Condicionamento'].map(o => (
                     <button 
                       key={o}
                       onClick={() => setGoal(o.toLowerCase())}
                       className={`p-3 rounded-xl border transition-all text-xs font-bold ${goal === o.toLowerCase() ? 'bg-orange-500 border-orange-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                     >
                       {o}
                     </button>
                   ))}
                 </div>
               </div>

               <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Nível Fisiológico</label>
                 <select 
                   value={level}
                   onChange={(e) => setLevel(e.target.value)}
                   className="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl px-4 text-slate-200 outline-none focus:border-orange-500/50 transition-colors text-sm"
                 >
                   <option value="iniciante">Iniciante (0-6 meses)</option>
                   <option value="intermediario">Intermediário (6m-2anos)</option>
                   <option value="avancado">Avançado (+2 anos)</option>
                 </select>
               </div>

               <button 
                 onClick={handleGenerate}
                 disabled={loading}
                 className="w-full h-14 bg-white hover:bg-slate-200 text-slate-950 font-black rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm disabled:opacity-50 mt-4"
               >
                 {loading ? (
                   <><Loader2 className="animate-spin" size={20} /> Processando...</>
                 ) : (
                   <><Sparkles size={20} className="text-orange-500" /> Gerar Plano Inteligente</>
                 )}
               </button>
             </div>
          </div>
        </div>

        {/* Right Col - Visualizer */}
        <div className="lg:col-span-3">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 min-h-[600px] flex flex-col">
            
            {!workout && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                <Dumbbell size={64} className="mb-6 text-slate-600" />
                <h4 className="text-xl font-bold text-white mb-2">Aguardando Parâmetros</h4>
                <p className="text-slate-500 max-w-sm">
                  Preencha os dados do lado esquerdo e clique em gerar para criar um protocolo de treino personalizado utilizando Inteligência Artificial.
                </p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 border-4 border-slate-800 border-t-orange-500 rounded-full animate-spin" />
                  <BrainCircuit className="absolute inset-0 m-auto text-orange-500 animate-pulse" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white animate-pulse">Sintetizando Protocolo...</h4>
                <p className="text-slate-500 text-sm mt-2">Correlacionando métodos de {goal} para nível {level}.</p>
              </div>
            )}

            {workout && !loading && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="px-2.5 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                          <CheckCircle2 size={12} /> Gerado com Sucesso
                       </span>
                       <span className="px-2.5 py-1 bg-slate-800 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {goal} / {level}
                       </span>
                    </div>
                    <h3 className="text-3xl font-black text-white px-1 leading-none">{workout.title}</h3>
                  </div>
                  <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-colors">
                    Salvar Trilha
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  {workout.exercises.map((ex, idx) => (
                    <div key={idx} className="flex p-4 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-orange-500/30 transition-colors">
                       <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-orange-500 font-black text-lg shrink-0 mr-4">
                         {idx + 1}
                       </div>
                       <div className="flex-1">
                         <div className="flex justify-between items-start mb-1">
                           <h4 className="font-bold text-white text-lg">{ex.name}</h4>
                           <span className="text-sm font-black text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                             {ex.sets}x{ex.reps}
                           </span>
                         </div>
                         <p className="text-sm text-slate-500 mt-2 mb-1 flex items-center gap-2">
                           <AlertCircle size={14} className="text-orange-500" /> Insight Biomecânico
                         </p>
                         <p className="text-sm font-medium text-slate-300 italic">
                           "{ex.tips}"
                         </p>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl relative overflow-hidden">
                   <div className="flex items-center gap-2 mb-3">
                      <Sparkles size={18} className="text-orange-500" />
                      <h5 className="text-xs font-black text-orange-500 uppercase tracking-widest">Considerações do Coach IA</h5>
                   </div>
                   <p className="text-slate-300 font-medium leading-relaxed">
                     {workout.aiAdvice}
                   </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
